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

# 环境搭建

```
暴露webpack等配置文件
npm run eject
npm start

可以基于create-react-app做二次封装（是可选的）
```
- 在scripts/start.js
