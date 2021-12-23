import Vue from 'vue'
import App from './App'
import store from 'store'

Vue.config.productionTip = false
App.mpType = 'app'

new Vue({
  render: h=>h(App),
  store,
}).$mount('#app')
