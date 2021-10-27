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
- this.$router.push('/hot?list='+c.cate) 改变url，接着$route变化。


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

- 两个优化：
  - 重定向：给未定义的url添加默认跳转，跳转到指定的路由规则上，像这样配置{path:'/*',redirect:'/404'}。这是一种用户体验层面的优化。
  - 路由懒加载：当页面太多时，我们要根据url访问需求按需加载组件。背后技术原理是Vue异步组件和Webpack代码分割技术。扩展：这种`()=>import()`代码是异步的，并且在webpack打包时只要遇到这种语法，会默认将其分割一个独立的小的.js文件。

- 两个高级技巧：
  - 导航守卫：我们知道每次发生url变化时，路由系统要根据“路由规则”去寻找对应的组件进行显示。vue-router把这个匹配的过程抽象成几个重要的“路由钩子”——beforeEach()/beforeResolve()/afterEach()。导航守卫经常用于登录拦截、权限设计等。
  - 路由元信息：一种方便我们给“路由规则”添加自定义属性的方式，并且可以在$route上进行访问。在“路由规则”这样配置 {path,component,meta:{}}。通常路由元信息可以配置导航守卫实现权限设计。

- 其它路由小技巧：
  - 路由别名：{path:'/home', alias:'/h' }，路由别名的作用是给复杂的path取一个方便记忆的“小名”。
  - 过渡行为：在<router-view>外面包裹一个<transition>动画，让页面切换时更加温和。
  - 数据获取：使用watch监听$route的变化，当$route变化成功后调接口。
  - 滚动行为：使用 new VueRouter({scrollBehavior}) 这个选项精确地控制页面的滚动位置。

# 使用sass

```
cnpm i sass -D
cnpm i sass-loader@10.2.0 -D
```
- .vue文件中，<style lang='scss'></style>


# Vuex状态管理

- 如何理解“状态”？本质上“状态”就是数据，因为“数据驱动视图”。
- 什么是vuex？vuex是vue技术栈中唯一的一个状态管理工具，用于管理vue应用程序中的数据。它的设计思想借鉴自Flux数据架构思想。（如果你能把vuex用好，那么理论上你的vue项目中的数据流应该是可预测的）
- vuex作用：实现组件之间的数据共享（功能实现）；实现数据缓存（用户体验）。
- 提示：vue全家桶（vue、vue-router、vuex）中，对小项目来讲vuex是可以选的。

- axios
  1、是基于promise封装的一个ajax工具。
  2、axios在js环境（浏览器、node）都可以使用。
  3、学习axios要学会封装axios。

- 会对axios进行封装
- 在vue项目中如何实现代理（解决浏览器CORS对ajax跨域请求的阻塞）
- 走完整的vuex流程（dispatch触发调接口，commit更新state，视图自动流程）
- 使用modules、namespaced这两个属性实现对store的拆分（思考：为什么要拆分？）
- 四个map*方法的使用
