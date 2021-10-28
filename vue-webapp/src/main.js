import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from '@/store'
import router from '@/router'

import {
  Button,
  Tabbar,
  TabbarItem
} from 'vant'
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)

import img from '@/utils/img'
Vue.prototype.$img = img

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
