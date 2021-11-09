module.exports = {
  devServer: {
    proxy: {
      '/apiSearch': {
        target: 'https://www.google.com/complete/search',
        changeOrigin: true,
        pathRewrite: {
          '^/apiSearch': ''
        }
      }
    }
  }
}