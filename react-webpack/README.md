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
