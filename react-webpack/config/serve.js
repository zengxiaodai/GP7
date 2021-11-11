// 这是serve时的专用配置

const path = require('path')

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',

  optimization: {
    minimize: false,
  },

  // 本地服务配置（前提是要安装webpack-dev-server）
  // 本地服务只对development环境起作用
  devServer: {
    port: 8080,
    open: true,
    // HMR 热模块替换技术（Hot Module Replacement）
    // 在v4中实现热更新，webpack.HotModuleReplacementPlugin
    // 在v5中热更新功能默认就是开启的，不需要再使用其它插件来实现
    // 背后原理：devServer启动时会开启一个websocket长连接，当本地代码发生变化时，通过websocket把变化的代码推送到客户端中，客户端就更新了。
    hot: true,
    // v4中有contentBase
    // contentBase: path.resolve(__dirname, 'public')
    // v5中要使用html-webpack-plugin实现静态资源目录和src的组装
    static: path.resolve(__dirname, '../dist'),

    client: {
      progress: true
    },
    compress: false
  },
}
