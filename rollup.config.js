import { camelCase } from "lodash"
import babel from "rollup-plugin-babel"
import commonjs from "rollup-plugin-commonjs"
import filesize from "rollup-plugin-filesize"
import json from "rollup-plugin-json"
import replace from "rollup-plugin-replace"
import vue from "rollup-plugin-vue"
import scss from 'rollup-plugin-scss'
import uglify from "rollup-plugin-uglify"
import typescript from "rollup-plugin-typescript2"
import externals from '@yelo/rollup-node-external'
import { minify } from "uglify-es"

const aliasTransform = require('./config/alias-transform').default
const scssImporter = require('./config/scss-importer').default

import pack from "./package.json"

const projectName = 'fishtank-vue'

// compute globals from dependencies
const globals = pack.dependencies && Object.assign({}, ...Object.keys(pack.dependencies).map((key) => ({
  [key]: camelCase(key)
})))

const aliasConfig = {
  baseUrl: "",
  paths: {
    "@/*": [
      "src/*"
    ]
  },
  rootDir: __dirname,
}

const builds = {
  // (CommonJS). Used by bundlers e.g. Webpack & Browserify
  cjs: {
    entry: "src/index.ts",
    dest: `dist/${projectName}.common.js`,
    format: "cjs"
  },
  // (ES Modules). Used by bundlers that support ES Modules,
  // e.g. Rollup & Webpack 2
  esm: {
    entry: "src/index.ts",
    dest: `dist/${projectName}.esm.js`,
    format: "es",
  },
}

function genConfig(name) {
  const opts = builds[name]

  const scssOpts = {
    importer: scssImporter({ aliasConfig }),
    output: 'dist/fishtank-vue.css'
  }

  const config = {
    input: opts.entry,
    external: externals(),
    plugins: [
      aliasTransform(aliasConfig),
      commonjs(),
      vue({
        compileTemplate: true,
        css: false,
        typescript: {
          compilerOptions: {
            importHelpers: true,
          }
        }
      }),
      scss(scssOpts),
      json(),
      typescript({}),
      babel({
        exclude: "node_modules/**",
        runtimeHelpers: true
      }),
      filesize()
    ].concat(opts.plugins || []),
    output: {
      exports: "named",
      file: opts.dest,
      format: opts.format,
      name: opts.moduleName || projectName
    },
  }

  if (opts.env) {
    config.plugins.push(
      replace({
        "process.env.NODE_ENV": JSON.stringify(opts.env)
      })
    )

    // minify on production targets
    if (opts.env === "production") {
      config.plugins.push(uglify({}, minify))
    }
  }

  Object.defineProperty(config, "_name", {
    enumerable: false,
    value: name
  })

  return config
}

const target = process.env.TARGET || "esm"
module.exports = genConfig(target)

