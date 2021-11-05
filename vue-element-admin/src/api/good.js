import request from '@/utils/request'

export function fetchGoodList(params) {
  return request({url:'/element/good/list',method:'GET',params})
}

export default {
  fetchGoodList
}
