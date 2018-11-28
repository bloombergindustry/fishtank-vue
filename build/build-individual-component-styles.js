#!/usr/bin/env node
const _ = require('lodash')
const fs = require('fs')
const scss = require('node-sass')
const { resolve, join } = require('path')
const scssImporter = require('../config/scss-importer').default

const outputDir = resolve(__dirname, '../dist/styles/')
const srcDir = resolve(__dirname, '../src/')
const stylesDir = resolve(srcDir, 'styles/components')

const postcss = require("postcss")
const autoprefixer = require("autoprefixer")

const preamble = `
@import "./styles/variables";
@import "./styles/mixins";
@import "./styles/fonts";
`

const aliasConfig = {
  baseUrl: "",
  paths: {
    "@/*": [
      "src/*"
    ]
  },
  rootDir: __dirname,
}

try {
  fs.mkdirSync(outputDir)
} catch(e) {
  if (!e.code === 'EEXIST') {
    throw e
  }
}

fs.readdirSync(stylesDir).map(fileName => {
  const fullPath = join(stylesDir, fileName)
  let source = fs.readFileSync(fullPath).toString()
  source = preamble + source

  let result = scss.renderSync({
    data: source,
    includePaths: [
      srcDir
    ],
    importer: scssImporter({ aliasConfig }),
  })

  let outFile = fileName.replace(/^_/, '').replace(/\.scss$/, '.css')

  postcss([autoprefixer])
    .process(result.css.toString(), {from:undefined})
    .then(results=>{
      fs.writeFileSync(resolve(outputDir, outFile), results)
    })

  
// result.css.toString()
  // fs.writeFileSync(resolve(outputDir, outFile), result.css.toString())
})