//包含项目中所有接口的ajax请求函数

import ajax from "./ajax"
import mockAjax from './mockAjax'
//登录
export function reqLogin(){
  return ajax({
    url:"/user/passport/login",
    method:"POST",
    data:{
      // mobile,
      // password
    }
  })
  // return ajax.post('/user/passport/login', {mobile, password})
}

//首页三级分类
//product/getBaseCategoryList GET
// export const reqCategorys = () => ajax('product/getBaseCategoryList')
export function  reqCategorys() {
   return ajax({
        url:"product/getBaseCategoryList",
        method:'GET'
    })
}

//定义访问mock接口的接口请求函数
export const reqBanners = () => mockAjax('/banners')
export const reqFloors = () => mockAjax('/floors')