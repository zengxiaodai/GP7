# 学习目标

- Webpack自己搭建脚手架环境：webpack（定制化）react基础、mobx、react-router-dom、antd-mobile、路由权限（移动React H5）

- node v12/v14 （window7不支持node v14）
- 包管理工具：npm、cnpm、yarn

# Webpack

- 类似：webpack、gulp、roodup、vite。。。
- 介绍：webpack是目前最流行的前端构建工具，作用是把各种模块文件及其依赖进行编译打包，转换成浏览器能够普遍兼容的优质代码（静态资源）。
- 理解：你可以把它理解成是一个“超级榨汁机”。
- 理解：在webpack眼中，一切文件皆模块。理论上讲webpack可对任意的文件（模块）进行编译打包。

- 怎么学习webpack？入口、出口、loaders、plugins；devServer。
- webpack是运行node环境中，它是基于配置文件的（定制化特点强），代码语法是CommonJS。

- webpack-cli  建议全局安装、本地也安装。暴露出了很多好用的webpack相关命令行。
- webpack  建议全局安装、本地也安装。它是webpack核心代码，是webpack API和核心插件所在的包。

- 关于webpack的版本说明：v5版本还比较新，更新比较频繁。工作中大多数的项目架构用的是v4。比如目前经典的 @vue/cli、create-react-app都是基于v4构建的。后面讲解的过程中，会给大家普及一些v4和v5的差异。v5呈现的感觉越来越强、也越来越简单。

- 需求：简单配置入口和出口，实现build打包功能。

- 需求：配置本地服务，以便开发环境。
- webpack-dev-server 它是基于express、sockjs的一个node服务器。全局、本地都安装。
- html-webpack-plugin 这是一个webpack plugins，用于把webpack编译后的js代码和指定的html文件组装起来。

- 需求：自动清除dist目录，添加文件hash值，开启编译进度条、开启代码压缩。

- 需求：区分开发环境和生产环境。
- cross-env 手动添加环境变量，这在v4中应用很广泛。
- 使用 `webpack (serve) --env`，这种方式在v5才能使用。
- webpack-merge 对webpack配置文件进行浅合并。

- 需求：把src中的js代码编译成浏览器能够普通兼容的ES5代码。
- babel-loader 是一条loaders规则。
- 安装了一系列的Babel预设和插件，添加babel.config.js对各种Babel包进行配置。
- @babel/core  Babel编译器核心包
- @babel/preset-env  用于编译ES6+代码
- @babel/preset-react  用于编译jsx代码
- @babel/preset-typesript  用于编译ts代码

- 学习方法（作业）：把webpack文档、Babel文档都翻一遍。

- 需求：在当前环境支持图片的模块化。file-loader、url-loader，v5写法参考文档。

- 需求：在当前环境中支持样式的模块化。css-loader、style-loader、css抽离。。。

- 需求：在当前环境中集成ESLint检测（集成React开发环境的代码检测）。
- v4   eslint-loader
- v4   eslint-webpack-plugin  参见.eslintrc.js这个配置。

- 需求：在当前环境下支持jsx语法。
- 安装 @babel/preset-react  参见babel.config.js这个配置。


# webpack扩展

- 常用loader有哪些？罗列七八个。
- 自定义loader
  - 每个loader都是一个function函数，它接收一种文件(对象或字符串)，最终返回另外一种文件(对象、字符串或JS代码)，什么是必须返回JS代码呢？如果当前封装的loader用于webpack规则中最后的一个loader,那么必须返回js代码。
  - 自定义loader的基本语法：
  ```
  module.exports = function(source) {
    // 使用任何第三方js模块do something
    const result = 'some string or object'
    // return `module.exports = ${JSON.stringify(result)}`
    return `export default ${JSON.stringify(result)}`
  }
  ```
  - 如果一个loader不用于webpack规则的最后一个loader，不要抛出js代码。
- 常用loaders有哪些？具体到某一个loader的背后是怎么工作的？如何自定义loader？

- 常用plugins有哪些？罗列七八个。
- 自定义plugin
  - 每个plugin本质上都是一个class类（这个类必须有一个叫apply实例方法，在这个apply方法中触发一个事件来执行工具）。
  - clean-webpack-plugin
