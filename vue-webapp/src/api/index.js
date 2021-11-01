import request from '@/utils/request'

export function fetchGoodList(params) {
  return request({url:'/vant/getGoodList',method:'GET',params})
}

export function fetchAllCate(params) {
  return request({url:'/vant/getAllCate',method:'GET',params})
}

// 模块化语法的最佳实践
// 如果只一个“东西”要抛出，建议用export default
// 如果有多个“东西”要抛出，建议用export按需抛出，还要使用export default抛出一个“最重要”的东西
// 结论：几乎每个模块都有一个export default
export default {
  fetchGoodList,
  fetchAllCate
}
