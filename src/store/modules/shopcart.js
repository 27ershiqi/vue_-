//管理购物车相关数据的vuex子模块
import {reqShopCart,reqAddToCart} from '../../api'
const state = {
  cartList:[],//购物车购物项的列表
}
const mutations = {
  //接收保存购物项列表
    RECEIVE_CART_LIST(state,cartList){
      state.cartList = cartList
    }
}
const actions = {
  //获取购物车列表数据的异步actions
  async getCartList({commit}){
      const result = await reqShopCart()
    if(result.code === '200'){
      const cartList = result.data
      commit('RECEIVE_CART_LIST',cartList)
    }
  },

  //添加购物车的异步actions
  //方式一
  // async addToCart ({commit}, {skuId, skuNum, callback}) {
  //   const result = await reqAddToCart(skuId, skuNum)
  //   if (result.code===200) {
  //     console.log('________',result)
  //     // 通知组件成功了
  //     callback()  // 不传参数
  //   } else {
  //     // 通知组件失败了
  //     callback('添加购物车失败')
  //   }
  // }, 


  //方式二
  async addToCart2({commit}, {skuId, skuNum}) {
    const result = await reqAddToCart(skuId, skuNum)

    
    if (result.code===200) {
      console.log('________',result)
      // 通知组件成功了
     return undefined 
    } else {
      // 通知组件失败了
      throw new Error('添加购物车失败')
    }
  }, 


}


const getters = {

}




export default {
  state,
  mutations,
  actions,
  getters
}