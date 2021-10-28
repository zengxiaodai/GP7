import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from '@/store'
import router from '@/router'

import { Button } from 'vant'
Vue.use(Button)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
