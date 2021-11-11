// 这是build时的专用配置
const TerserPlugin = require("terser-webpack-plugin")

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()]
  }
}
