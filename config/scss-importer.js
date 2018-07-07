const path = require('path')
const utils = require("loader-utils")
const { resolveAlias } = require('./alias-transform')

const matchModuleImport = /^~([^/]+|@[^/]+[/][^/]+)$/g
/**
 * This is stolen from the webpack sass-loader source and modified to work well enough for rollup
 * purposes:
 * https://github.com/webpack-contrib/sass-loader/blob/f4eeff1dbcf37c9c0ce4bcb5d8d083bee4ecde8f/lib/importsToResolve.js
 *
 * @param {string} url
 * @returns {Array<string>}
 */
function importsToResolve(url) {
  const request = utils.urlToRequest(url);
  // Keep in mind: ext can also be something like '.datepicker' when the true extension is omitted and the filename contains a dot.
  // @see https://github.com/webpack-contrib/sass-loader/issues/167
  const ext = path.extname(url);

  if (matchModuleImport.test(url)) {
      return [request, url];
  }

  // libsass' import algorithm works like this:

  // In case there is a file extension...
  //   - If the file is a CSS-file, do not include it all, but just link it via @import url().
  //   - The exact file name must match (no auto-resolving of '_'-modules).
  if (ext === ".css") {
      return [];
  }
  if (ext === ".scss" || ext === ".sass") {
      return [request, url];
  }

  // In case there is no file extension...
  //   - Prefer modules starting with '_'.
  //   - File extension precedence: .scss, .sass, .css.
  const basename = path.basename(request);

  if (basename.charAt(0) === "_") {
      return [
          `${ request }.scss`, `${ request }.sass`, `${ request }.css`,
          url
      ];
  }

  const dirname = path.dirname(request);

  return [
      `${ dirname }/_${ basename }.scss`, `${ dirname }/_${ basename }.sass`, `${ dirname }/_${ basename }.css`,
      `${ request }.scss`, `${ request }.sass`, `${ request }.css`,
      url
  ];
}

function resolveImportList(imports, resolver) {
  let resolved

  imports.find(importVariation => {
    resolved = resolver(importVariation)
    return resolved
  })

  return resolved
}

module.exports = {
  __esModule: true
}
module.exports.default = (opts) => {
  let aliasConfig = opts.aliasConfig
  let aliasResolver = (importVariation) => resolveAlias(importVariation, aliasConfig)
  let nodeResolver = (importVariation) => {
    try {
      return require.resolve(importVariation)
    } catch(e) {
      return undefined
    }
  }

  return (file, prev, done) => {
    // We only want to worry about module imports using ~ as a prefix
    if (file.indexOf('~') === 0) {
      let imports = importsToResolve(file)
      let resolved

      // First use the configured aliases
      if (aliasConfig) {
        resolved = resolveImportList(imports, aliasResolver)
      }

      // Then try to use the standard node resolve algorithm
      if (!resolved) {
        resolved = resolveImportList(imports, nodeResolver)
      }

      if (resolved) {
        return { file: resolved }
      }
    }
    return { file }
  }
}