#!/usr/bin/env node
const _ = require('lodash')
const fs = require('fs')
const { resolve, join } = require('path')

const componentsDir = resolve(__dirname, '../src/components')
const vueFiles = fs.readdirSync(componentsDir).map(fileName => {
  if (!fileName.match(/\.vue$/)) {
    return
  }
  const fullPath = join(componentsDir, fileName)
  const source = fs.readFileSync(fullPath).toString()
  const componentName = fileName.replace(/\.vue$/g, '')
  const outputName = componentName + '.ts'

  return {
    fullPath,
    fileName,
    componentName,
    outputName,
    source,
  }
}).filter(Boolean)

const distDir = resolve(__dirname, '../dist')

let typeDef = `import Vue, { VueConstructor } from "vue"\n\n`

vueFiles.forEach(component => {
  typeDef += `export const ${component.componentName}: VueConstructor<Vue>\n`
})

fs.writeFileSync(join(distDir, 'fishtank-vue.d.ts'), typeDef)