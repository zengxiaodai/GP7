import produce from 'immer'
import {
  USER_LOGIN,
  USER_INFO,
  USER_LOGOUT,
  ADMIN_DONE,
  MENU_LIST,
  ADMIN_RESET
} from '../actions'

const initState = {
  done: 0,
  token: localStorage.getItem('token'),
  userInfo: {},
  menuList: []
}

// 作用：把普通一维数据变成多维数组
function listToTree(list) {
  // 第一步，找出没有pid的一级模块
  let modules = list.filter(ele=>ele.pid==='')
  // 第二步，遍历一级模块，给它们添加children
  modules.forEach(ele=>{
    ele['children'] = list.filter(ele2=>ele2.pid===ele._id)
  })
  return modules
}

export default function(state=initState, {type,payload}) {
  return produce(state, state=>{
    switch (type) {
      case USER_LOGIN:
        state.token = payload
        break
      case USER_INFO:
        state.userInfo = payload.userInfo
        state.roleInfo = payload.roleInfo
        break
      case USER_LOGOUT:
        state.token = null
        state.userInfo = {}
        state.roleInfo = {}
        break
      case ADMIN_DONE:
        state.done++
        break
      case MENU_LIST:
        // 菜单处理
        state.menuList = listToTree(payload)
        break
      case ADMIN_RESET:
        state.done = 0
        break
      default:
    }
  })
}
