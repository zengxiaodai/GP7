import request from '@/utils/request'

// 获取商品列表
export function fetchGoodList(params) {
  return request({url:'/vant/getGoodList',method:'GET',params})
}

// 获取品类
export function fetchAllCate(params) {
  return request({url:'/vant/getAllCate',method:'GET',params})
}

export function fetchRegist(data) {
  return request({url: '/vant/regist', method:'POST', data})
}
export function fetchLogin(data) {
  return request({url: '/vant/login', method:'POST', data})
}

export function fetchGoodInfo(params) {
  return request({url:'/vant/getGoodInfo',method:'GET',params})
}

export function fetchCartAdd(data) {
  return request({url:'/vant/addToCart', method:'POST', data})
}

// 模块化语法的最佳实践
// 如果只一个“东西”要抛出，建议用export default
// 如果有多个“东西”要抛出，建议用export按需抛出，还要使用export default抛出一个“最重要”的东西
// 结论：几乎每个模块都有一个export default
export default {
  fetchGoodList,
  fetchAllCate,
  fetchLogin,
  fetchRegist,
  fetchGoodInfo,
  fetchCartAdd
}
