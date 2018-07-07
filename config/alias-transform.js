const fs = require('fs')
const path = require('path')

function reEscape(s) {
  return s.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function isRelativeModuleId(id) {
  return /^\.+\//.test(id)
}

let exts = [
  '.js',
  '.jsx',
  '.json',
  '.ts',
  '.tsx'
]

function redirecToDir(modulePath, outDir, rootDirPrefixRe) {
  return modulePath.replace(rootDirPrefixRe, path.resolve(outDir))
}

const resolveAlias = (id, opts) => {
  const { paths, outDir, baseUrl } = opts
  if (isRelativeModuleId(id)) {
    return null
  } else {
    let mappedModuleId
    for (let rule in paths) {
      let prefixRule = rule.replace(/\*$/, '')
      if (id.indexOf(prefixRule) == 0) {
        let wildCardPart = id.slice(prefixRule.length)
        for (let mapTo of paths[rule]) {
          mappedModuleId = baseUrl + mapTo.replace(/\*$/, wildCardPart)
          let absoluteModulePath = path.resolve(mappedModuleId)

          if (fs.existsSync(absoluteModulePath)) {
            return absoluteModulePath
          }
          for (let ext of exts) {
            if (fs.existsSync(absoluteModulePath)) {
              return absoluteModulePath
            }
          }
        }
      }
    }
  }
  return null
}

module.exports = {
  __esModule: true,
  resolveAlias,
}

module.exports.default = function (options) {
  let { paths, outDir, baseUrl } = options
  baseUrl = baseUrl || ''

  if (!(paths)) {
    throw new Error('rollup-alias-transform: both `paths`, are required, in plugin\'s options.')
  }

  return {
    name: 'alias-transform',
    resolveId: function (id) {
      return resolveAlias(id, { paths, outDir, baseUrl })
    }
  }
}