import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter) // 注册插件

import Home from '@/views/home/Home.vue'
import HomeFollow from '@/views/home/components/Follow.vue'
import HomeHot from '@/views/home/components/Hot.vue'
import HomeRecommend from '@/views/home/components/Recommend.vue'
import HomeVideo from '@/views/home/components/Video.vue'

import HotDetail from '@/views/home/HotDetail.vue'



import Vip from '@/views/vip/Vip.vue'

// 自定义
const routes = [
  {
    // 人话：当url='/'时，路由系统要找到一个名字叫alive的<router-view>来显示Home组件。
    id: 1, path: '/', components: { alive: Home }, text: '首页', name: 'home',
    // 这个children叫做“嵌套路由”
    children: [
      { id: 101, text:'关注', path: '/follow', component: HomeFollow, meta: { page: '/' } },
      { id: 102, text:'推荐', path: '/', component: HomeRecommend, meta: { page: '/' } },
      { id: 103, text:'热榜', path: '/hot', component: HomeHot, meta: { page: '/' } },
      { id: 104, text:'视频', path: '/video', component: HomeVideo, meta: { page: '/' } }
    ]
  },
  // 人话：当url='/vip'时，路由系统要找到一个叫default的<router-view>来显示Vip组件。
  { id: 2, path: '/vip', component: Vip, text: '会员', name: 'vip' },
  // props: true, 开启props传参
  { id: 3, path: '/hot/:id', component: HotDetail, props: true }
]
export { routes }

// 生成new VueRouter所需要的路由规则
const createRoutes = () => {
  // do something
  return routes
}


export default new VueRouter({
  mode: 'history', // 'history'
  // 自定义路由规则，如何理解路由规则？所谓的路由规则，当你访问某个url时，路由系统就加载指定的组件进行显示。
  routes: createRoutes()
})
