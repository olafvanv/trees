const path = require('path')

module.exports = {
  chainWebpack: config => {
    const apiClient = process.env.VUE_APP_API_CLIENT // mock or server
    config.resolve.alias.set(
      'api-client',
      path.resolve(__dirname, `src/api/${apiClient}`)
    )
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options['transformAssetUrls'] = {
          img: 'src',
          image: 'xlink:href',
          'b-img': 'src',
          'b-img-lazy': ['src', 'blank-src'],
          'b-card': 'img-src',
          'b-card-img': 'src',
          'b-card-img-lazy': ['src', 'blank-src'],
          'b-carousel-slide': 'img-src',
          'b-embed': 'src'
        }

        return options
      })
  }
}

