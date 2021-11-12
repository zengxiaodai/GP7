// 语法是CommonJS语法

// 在v4中，使用eslint-loader来配置ESLint
// 在v5中，使用eslint-webpack-plugin来配置ESLint

// ESLint只是一个javascript代码检测工具，所以根据不同的项目我们需要安装不同的ESLint检测器（代码规范的标准）
// ESLint的配置文件有六种，当前这种是优先级最高的。

module.exports = {
  // 用于配置eslint解析选项
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      jsx: false
    }
  },
  // 自定义eslint规则的检测级别（0-关闭规则 1-违反规则给警告 2-违反规则给报错）
  rules: {
    "no-console": 2
  },
  env: {
    node: true,
    browser: true
  }
}
