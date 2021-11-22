import axios from 'axios'

const baseURL = 'http://localhost:8080'
const version = '/api/v1'

// 创建axios实例对象
const instance = axios.create({
  baseURL: baseURL + version,
  timeout: 5000, // 毫秒
  headers: {}
})

instance.interceptors.request.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

instance.interceptors.response.use(function (response) {
  if (response.status===200) {
    // 数据过滤
    if (response.data && response.data.success) {
      return response.data.data
    }
  }
  return response
}, function (error) {
  return Promise.reject(error)
})

export default instance
