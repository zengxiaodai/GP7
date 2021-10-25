// 入口文件
import Vue from 'vue'
// 根组件
import App from './App.vue'

// 如果项目上线，关闭掉vue的报错等提示
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  el: '#app'
})
