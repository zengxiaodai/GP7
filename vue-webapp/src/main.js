import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import store from '@/store'
import router from '@/router'

import {
  Button,
  Tabbar,
  TabbarItem,
  NoticeBar,
  Search,
  Swipe,
  SwipeItem,
  Lazyload,
  Grid,
  GridItem,
  List,
  PullRefresh,
  NavBar,
  Sidebar,
  SidebarItem,
  SubmitBar,
  Checkbox,
  SwipeCell,
  Card,
  Col,
  Row,
  Cell,
  CellGroup,
  Tag,
  Icon
} from 'vant'
Vue.use(Button)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(NoticeBar)
Vue.use(Search)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(Lazyload)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(NavBar)
Vue.use(Sidebar)
Vue.use(SidebarItem)
Vue.use(SubmitBar)
Vue.use(Checkbox)
Vue.use(SwipeCell)
Vue.use(Card)
Vue.use(Col)
Vue.use(Row)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Tag)
Vue.use(Icon)

// 原型链上尽量少放东西
import img from '@/utils/img'
Vue.prototype.$img = img
import api from '@/api'
Vue.prototype.$api = api

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
