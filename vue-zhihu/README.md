created by xhf at 2021-10-25

# 环境搭建

- node 版本，建议用 v12、v14
- 安装 cnpm 淘宝镜像
- 安装 vue脚手架
```
cnpm i @vue/cli -g
vue -V
vue create vue-zhihu
cd vue-zhihu
npm run serve
```

# vue-router

- SPA单页面应用程序：只有一个页面（index.html），使用vue-router实现组件的创建与销毁，在视觉上给人一种“页面切换”的错觉。所以，对SPA应用来讲，vue-router是核心。
- 思想：在SPA应用程序中，一切皆组件，所有的组件都直接或间接地与“路由系统”有关。

- 如何在vue项目中集成vue-router呢？
  - 1、路由规则是如何配置的？（创建router实例，在main.js挂载）
  - 2、url是如何发生变化的？（声明式路由跳转，编程式路由跳转）
  - 3、url变化时它所对应的vue组件在哪里显示？（<router-view>）

- 什么是“嵌套路由”？在“路由规则”如何配置“嵌套路由”？
- 两个重要的内置api：$router, $route
- this.$router.push('/hot?list='+c.cate) 改变url，接$route变化。


# 使用sass

```
cnpm i sass -D
cnpm i sass-loader@10.2.0 -D
```
- .vue文件中，<style lang='scss'></style>
