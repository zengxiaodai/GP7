import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/element/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/element/getUserInfo',
    method: 'get',
    params: {},
    // headers: {
    //   Authorization: token
    // }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
