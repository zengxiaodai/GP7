// webpack二次封装（建议使用webpack的一级字符）
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
    port: 9090
  }
}
