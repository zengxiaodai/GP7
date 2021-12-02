import {
  fetchLogin,
  fetchUserInfo
} from '@/api'

export const USER_LOGIN = 'USER_LOGIN'
export const USER_INFO = 'USER_INFO'

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
