module.exports = {
  chainWebpack: config => {
    config.entryPoints.clear()
    config.entry('fishtank-vue').add('./dev/main.ts')

    config.module
    .rule('svg')
      .uses.clear()

    config.module
      .rule('svg')
        .use('vue-svg-icon')
          .loader('vue-svg-icon-loader')
  },
  configureWebpack: config => {
    config.module.rules.push({
      resourceQuery: /blockType=docs/,
      loader: require.resolve('./config/docs-loader.js')
    })
  },
}
