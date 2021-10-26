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


- 两个全局组件：
  - <router-link>，常用属性to/tag/active-class/exact-active-class等。
  - <router-view>，只有一个属性 name。

- 两个内置API：
  - $route描述是当前url的信息（它是一个响应式变量，可以参与计算属性，还可以使用watch监听）
  - $router是路由API，常用方法有 push()入栈、replace()替换入栈、back()出栈。

- 两种路由模式：
  - Hash模式：url上有个#，背后是监听onhashchange事件来实现的；hash值发生变化，客户端不会向服务器发起页面请求；hash模式的SPA应用部署到服务器上时不会出404问题。
  - History模式：url上没有#，背后是使用history api来实现的；当url路径发生变化时，客户端会向服务器发起页面请求；history模式的SPA应用部署到服务器上时会出现404，怎么办？（在服务器使用Nginx做重定向处理）

  - 两种路由跳转：
    - 声明式路由跳转，使用<router-link>实现页面跳转，一般用于菜单上。
    - 编程式路由跳转，使用this.$router这个api实现页面跳转，一般用于js逻辑中。

  - 两种命名：
    - 命名路由，就是给“路由规则”添加一个名字。
      - 在声明式导航中使用“命名路由”，<router-link :to='{name:'vip'}'>
      - 在编程式导航中使用“命名路由”，this.push({name:'vip'})
    - 命名视图，给<router-view name='xxx'>添加一个名字。那么路由规则这样配置{path,components:{xxx:'组件'}}。

- 两种路由传参：
  - 动态路由传参：“动态路由”一般用于从列表页跳转到详情页，“路由规则”配置一般这种风格{path:'/detail/:id'}。那么在详情页我们可以使用this.$route.params来接收这个“动态的路由参数”。还在在“路由规则”上开启props传参{path:'/detail/:id', props:true}，在详情页使用props接收这个“动态的路由参数”。
  - Query传参：在路由跳转时使用?a=1&b=2这种查询字符串，在另一个页面中使用this.$route.query来接收。


# 使用sass

```
cnpm i sass -D
cnpm i sass-loader@10.2.0 -D
```
- .vue文件中，<style lang='scss'></style>
