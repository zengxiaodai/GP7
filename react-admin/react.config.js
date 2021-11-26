// webpack二次封装（参考vue.config.js）
const path = require('path')
module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [

    ]
  },
  plugins: [],
  devServer: {
    port: 9090,
    open: false
  }
}
