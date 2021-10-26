import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // 注册插件

import Home from '@/views/home/Home.vue'
import Vip from '@/views/vip/Vip.vue'

// 自定义
const routes = [
  { id: 1, path: '/', component: Home, text: '首页' },
  { id: 2, path: '/vip', component: Vip, text: '会员' }
]
export { routes }

// 生成new VueRouter所需要的路由规则
const createRoutes = () => {
  // do something
  return routes
}


export default new VueRouter({
  mode: 'hash', // 'history'
  // 自定义路由规则，如何理解路由规则？所谓的路由规则，当你访问某个url时，路由系统就加载指定的组件进行显示。
  routes: createRoutes()
})
