import {
  fetchLogin,
  fetchUserInfo,
  fetchMenuAdd,
  fetchMenuList,
  fetchRoleAdd
} from '@/api'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_INFO = 'USER_INFO'
export const USER_LOGOUT = 'USER_LOGOUT'
export const ADMIN_DONE = 'ADMIN_DONE'
export const ADMIN_RESET = 'ADMIN_RESET'
export const MENU_LIST = 'MENU_LIST'

// 【管理系统的Action生成器】
export function login(data) {
  return dispatch => {
    fetchLogin(data).then(res=>{
      console.log('登录成功', res)
      if (res.token) {
        // 把token存储到store中
        dispatch({type:USER_LOGIN, payload:res.token})
        // 把token存储到本地localStorage中
        localStorage.setItem('token', res.token)
      }
    })
  }
}

export function getUserInfo() {
  return dispatch => {
    fetchUserInfo().then(res=>{
      console.log('用户信息', res)
      if (res.userInfo) {
        dispatch({type:USER_INFO,payload:res})
      }
    })
  }
}

export function logout() {
  localStorage.removeItem('token')
  return { type:USER_LOGOUT,payload:'' }
}

export function addMenu(data) {
  return dispatch => {
    fetchMenuAdd(data).then(()=>{
      // 添加菜单成功
      console.log('添加菜单')
      dispatch({type: ADMIN_DONE, payload:''})
    })
  }
}

export function listMenu(params) {
  return dispatch => {
    fetchMenuList(params).then((res)=>{
      console.log('菜单列表', res)
      dispatch({type: MENU_LIST, payload:res.list})
    })
  }
}

export function addRole(data) {
  return dispatch => {
    fetchRoleAdd(data).then(()=>{
      dispatch({type: ADMIN_DONE, payload:''})
    })
  }
}

// 重置admin子store中指定的字段
export function resetAdmin() {
  return { type:ADMIN_RESET, payload:''}
}
