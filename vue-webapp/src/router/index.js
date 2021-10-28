import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const Home = () => import('@/views/home/Home.vue')
const Find = () => import('@/views/find/Find.vue')


export default new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: Home },
    { path: '/find', component: Find }
  ]
})
