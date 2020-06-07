//管理首页数据的vuex子模块


import {reqCategorys} from '../../api'
export default{
    state:{
      categoryList:[],//分类列表
      xxx:{},
      yyy:'atguigu'
    },
    mutations:{
      //接收保存分类列表的mutations
      RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList.filter((item,index)=>index<15)
      }
    },//当前子模块的
    actions:{
      //请求获取分类列表的异步actions
      async getCategoryList ({commit}){
        //调用接口请求函数发异步的ajax请求
        const result = await reqCategorys()
        //请求成功后取出数据提交给mutastion
        console.log('result',result)
        if(result.code === 200){
          const categoryList = result.data
          commit('RECEIVE_CATEGORY_LIST',categoryList)
        }
      } 
    },
    getters:{
     
    }
}