//包含项目中所有接口的ajax请求函数

import ajax from "./ajax"
import mockAjax from './mockAjax'
//登录
// export function reqLogin(){
//   return ajax({
//     url:"/user/passport/login",
//     method:"POST",
//     data:{
//       mobile,
//       password
//     }
//   })
  export const reqLogin = (mobile, password) =>  ajax.post('/user/passport/login', {mobile, password})
// }

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

//获取商品列表 /api/list  是post请求
//searchParams包含所有需要传递请求参数的对象
export const reqProductList = (options) => ajax.post('/list', options)

//获取商品详情信息
export const reqDetailInfo = (skuId) => ajax.get(`/item/${skuId}`)

//获取购物车列表 /api/cart/cartList get
export const reqShopCart = ()=> ajax.get('/cart/cartList')

//添加到购物车 /api/cart/addToCart/{ skuId }/{ skuNum } post
export const reqAddToCart = (skuId, skuNum) => ajax.post(`/cart/addToCart/${skuId}/${skuNum}`)

//切换商品选中状态 /api/cart/checkCart/{skuID}/{isChecked} GET
export const reqCheckCartItem = (skuId,isChecked) => ajax.get(`/cart/checkCart/${skuId}/${isChecked}`)

//删除购物车商品 /api/cart/deleteCart/{skuId} delete
export const reqDeleteItem = (skuId)=> ajax.delete(`/cart/deleteCart/${skuId}`)

//注册用户 user/passport/register post
//包含以下属性
//mobile
//password
//code
export const reqRegister = (userInfo) => ajax.post('user/passport/register',userInfo)

//退出登录user/passport/logout GET 
export const reqLogout = () => ajax.get('user/passport/logout')


//获取订单列表 /order/auth/{page}/{limit} get
export const reqOrders = (page, limit) => ajax(`/order/auth/${page}/${limit}`)
 

//获取订单交易的信息 /order/auth/trade get
export const reqTradeInfo = () => ajax('/order/auth/trade')

//提交订单 /order/auth/submitOrder?tradeNo={tradeNo} post
export const reqSubmitOrder = (tradeNo,orderInfo) => ajax({
  url:'/order/auth/submitOrder',
  method:'POST',
  //query:{tradeNo}错误的
  params:{tradeNo},//指定query参数的
  data:orderInfo
})


//获取订单支付信息 /payment/weixin/createNative/{orderId} get
export const reqPayInfo = (orderId) => ajax(`/payment/weixin/createNative/${orderId}`)

//查询支付订单状态 /payment/weixin/queryPayStatus/{orderId} get
export const reqPayStatus = (orderId) => ajax(`/payment/weixin/queryPayStatus/${orderId}`)