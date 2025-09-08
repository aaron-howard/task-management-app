const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8080,
    host: 'localhost'
  }
})
