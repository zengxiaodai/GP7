// 代码语法是CommonJS模块，在这里可以使用大多数的JS语法和Node API。

const path = require('path')

// 所有的webpack plugins都class类
const HtmlWebpackPlugin = require('html-webpack-plugin')

// do something

// module.exports = {}
// module.exports = function () { return {} }
// module.exports = () => { return {} }
// module.exports = () => ({})

module.exports = {

  mode: 'production',

  // 入口配置（建议在配置入口文件时使用绝对路径）
  // entry: './src/main.js',
  entry: path.resolve(__dirname, 'src/main.js'),
  // entry: {
  //   app: './src/main.js'
  // }

  // 出口配置（在配置出口时只能使用绝对路径）
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },

  // 本地服务配置（前提是要安装webpack-dev-server）
  // 本地服务只对development环境起作用
  devServer: {
    port: 8080,
    open: true,
    hot: true
    // v4中有contentBase
    // contentBase: path.resolve(__dirname, 'public')
    // v5中要使用html-webpack-plugin实现静态资源目录和src的组装
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html')
    })
  ]
}
