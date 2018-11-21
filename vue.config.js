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
      resourceQuery: /blockType=introduction/,
      loader: require.resolve('./config/introduction-loader.js')
    }),
    config.module.rules.push({
      resourceQuery: /blockType=description/,
      loader: require.resolve('./config/description-loader.js')
    }),
    config.module.rules.push({
      resourceQuery: /blockType=token/,
      loader: require.resolve('./config/token-loader.js')
    })
  },
}
