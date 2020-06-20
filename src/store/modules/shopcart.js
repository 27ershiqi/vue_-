//管理购物车相关数据的vuex子模块
import {reqShopCart,reqAddToCart,reqCheckCartItem} from '../../api'
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
    if(result.code === 200){
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
  async addToCart2 ({commit}, {skuId, skuNum}) {
    const result = await reqAddToCart(skuId, skuNum)
    // 如果请求的结果不正确, 抛出一个错误
    if (result.code!==200) {
      // 通知组件失败了
      throw new Error('添加购物车失败')  // action函数的promise失败了, reason为error
    }
  },

  //勾选或者不勾选某个购物项商品
  async checkCartItem({commit},{skuId,isChecked}){
    //调用接口请求函数提交异步ajax请求
    const result = await reqCheckCartItem(skuId,isChecked)
      if(result.code!== 200){
          throw new Error(result.message || '选中商品失败')
      }
    },
    //全部勾选或者不勾选,checked是否勾选的布尔值
    //需要对所有购物项与checked不一致的购物项发送请求
    //
    async checkAllCartItems({commit,state,dispatch},checked){
      const isChecked = checked ? '1' : '0'
      let promises = []

      //遍历每个购物项
      state.cartList.forEach(item=>{
        //购物项的状态与目标状态不一样
        if(item.isChecked!==isChecked){
         const promise = dispatch('checkCartItem',{skuId:item.skuId,isChecked})
         promises.push(promise)
        }
      })
      return Promise.all(promises)
    }
}


const getters = {
    //选中的总数量
    totalCount(state){
      //方式一:
      // let tota = 0
      // state.cartList.forEach(item =>{
      //   tota += item.skuNum
      // })
      // return tota

      //方式二:
      return state.cartList.reduce((preTotal,item,index)=>preTotal + (item.isChecked === 1 ? item.skuNum : 0) , 0)
    },

    //选中的总价格
      totalprice(state){
        return state.cartList.reduce((pre,item,index)=>pre + item.skuNum * item.cartPrice , 0)
      },

    //是否全部选中了
      isCheckAll(state){
        //如果数组中每个都选中了就返回true,否则是false
        return state.cartList.length > 0 && state.cartList.every((item,idnex)=>item.isChecked===1)
      }
}




export default {
  state,
  mutations,
  actions,
  getters
}