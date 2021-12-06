# 关于@reduxjs/toolkit

- 它可以优化 redux的传统架构，@reduxjs/toolkit中已经内置了redux、redux-thunk、immer。
- 它可以更好地兼容 typescript 环境，还可以更好实践 Hooks 函数式编程。

# 项目创建

```
1、创建传统的react+redux架构环境
create-react-app react-admin
自行安装redux、redux-thunk、react-redux、immer并设计架构（不支持TS）

2、创建react+redux的TS环境
create-react-app react-admin --template typescript
自行安装redux、redux-thunk、react-redux、immer并设计架构（支持TS和ES6）

3、创建react+redux的TS环境（最佳实践）
create-react-app react-admin --template redux-typescript
无须再安装redux等，默认就已经集成了@reduxjs/toolkit的Redux架构
```

- 参考链接：https://github.com/reduxjs/cra-template-redux-typescript


# 环境搭建

```
暴露webpack等配置文件
npm run eject
npm start
```
- 可以基于create-react-app做二次封装（是可选的）
- 在scripts/start.js 修改默认端口号为 8080
- 在src/setupProxy.js，代码如下：
```
const { createProxyMiddleware } = require('http-proxy-middleware')
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:9999',
      changeOrigin: true
    })
  );
}
```
- 在config/webpack.config.js添加 alias别名：@ 代表src根路径。
- 支持less，在config/webpack.config.js添加less-loader的模块处理规则。(参考antd中支持less写法)
```
cnpm i less@3.12.2 -D
cnpm i less-loader@7.3.0 -D
```
- 支持sass，只需要安装 sass
```
cnpm i sass -D
```
- 在@reduxjs/toolkit中集成其它中间件：redux-logger，还要安装 @types/redux-logger来支持TS环境。
- 在当前环境导入.css文件，TS报“缺少CSS声明文件”的错误，建议把样式改变成.scss文件。
- 如果项目中在导入.ts文件时省略后缀报错，在config/webpack.config.js中找到 extensions 修改配置。
- 启动项目中，一些无关的目录中出现路径错误，也会影响项目的运行。建议把那些无关的文件中的路径也整对。
