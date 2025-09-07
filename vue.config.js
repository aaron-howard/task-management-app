const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: '/task-management-app/',
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    port: 8080,
    host: 'localhost'
  }
})
