import axios from "axios"
import Nprogress from "nprogress"
const instance = axios.create({
  baseURL:"/api",//基础path
  timeout:15000//请求超时时间
})

//注册请求拦截器
instance.interceptors.request.use(config=>{
  //显示请求进度条
  Nprogress.start()

  return config
})

//注册相应拦截器
instance.interceptors.response.use(
  response=>{
     //隐藏请求进度条
    Nprogress.done()
    return response.data
  },
  error=>{
    Nprogress.done()
    //统一处理错误请求
    alert(error.message || '位置错误')
    //不可以return error
    throw error
  }
)
export default instance