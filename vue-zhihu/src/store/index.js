import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 怎么理解store（状态管理）？
// 你可以把store理解成当前应用程序的“数据仓库”“数据银行”
export default new Vuex.Store({
  // state
  // 作用：用于定义可共享的数据（响应式的）
  // 特点：当state发生变化时，那些使用了state的视图组件会自动更新。
  state: {
    count: 1
  },
  // mutations
  // 作用：vuex官方建议的一种用于修改state的方式
  // 语法：在mutations中可以封装很多个用于修改state方法，其语法 xxxState(state,payload)
  // 使用：在vue组件中，this.$store.commit('xxxState', '数据')
  // 注意：mutations方法用于同步地更新state，不建议使用异步逻辑，比如定时器或调接口。为什么不建议使用异步逻辑呢？原因是devtools识别不了。
  mutations: {
    changeCount(state, payload) {
      if (payload.type==='add') {
        state.count += payload.step
      } else {
        state.count -= payload.step
      }
    }
  },
  actions: {},
  getters: {},
  modules: {}
})
