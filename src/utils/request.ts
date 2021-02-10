import axios from 'axios'
import { Toast } from 'vant'
import config from '@/const/config'

// 创建axios实例
const service = axios.create({
  baseURL: config['BASE_API'],
  timeout: 10000,
  withCredentials: true, // 是否允许带cookie这些
  headers: { 'content-type': 'application/json' }
})

// request拦截器
service.interceptors.request.use(config => {
  // config.headers['token'] = getToken() // 让每个请求携带自定义
  return config
}, error => {
  Toast.fail('请求异常')
  console.error('error', error)
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
  /**
  * code为非0是抛错 可结合业务进行修改
  */
    const res = response.data || {}
    if (res.code !== 0) {
      Toast.fail('请求异常')
      console.error('error' + res.msg)
      return Promise.reject(`${res.msg}`)
    } else {
      return response.data
    }
  },
  error => {
    Toast.fail('请求异常')
    console.error('error' + error)
    return Promise.reject(error)
  }
)

export default class Fetch {
  static async request (method: any, url: any, data?: any) {
    const params = {
      url: url,
      method: method,
      data: method === 'POST' ? data : null,
      params: method === 'GET' ? data : null
    }
    return service(params)
  }
  static get (url: any, data?: any) {
    return this.request('GET', url, data)
  }
  static post (url: any, data?: any) {
    return this.request('POST', url, data)
  }
}

