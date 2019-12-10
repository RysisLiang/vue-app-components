// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  // pages: {
  //   index: {
  //     entry: 'src/index.js',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   }
  // },
  chainWebpack(config) {
    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()
  }
}
