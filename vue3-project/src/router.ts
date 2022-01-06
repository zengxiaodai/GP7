import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('./pages/Home.vue')
const Find = () => import('./pages/Find.vue')

export default createRouter({
  history: createWebHashHistory(), // hash
  routes: [
    { path: '/', component: Home, meta: { transition: 'fade', isAlive: true } },
    { path: '/find', component: Find }
  ]
})
