// 语法：CommonJS

module.exports = {
  // 配置预设
  // 什么预设？就是一些比较大的javascript语法版本。预设不一定能够编译所有的小语法。
  presets: [
    ['@babel/preset-env', {}]
  ],
  // 配置插件
  // 什么插件？用于弥补预设不能编译的小语法问题
  plugins: [
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    ["@babel/plugin-proposal-class-properties", {}]
  ]
}
