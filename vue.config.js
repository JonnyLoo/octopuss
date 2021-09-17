module.exports = {
  devServer: {
    compress: true,
    port: 8080
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/scss/variables.scss';
        `
      }
    }
  }
}
