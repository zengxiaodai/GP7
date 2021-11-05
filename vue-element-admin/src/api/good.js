import request from '@/utils/request'

export function fetchGoodList(params) {
  return request({url:'/element/good/list',method:'GET',params})
}

export function fetchAllCate(params) {
  return request({url:'/element/all/cate',method:'GET',params})
}

export function fetchGoodForm(data) {
  return request({url:'/element/good/add/edit',method:'POST',data})
}

export default {
  fetchGoodList,
  fetchGoodForm,
  fetchAllCate
}
