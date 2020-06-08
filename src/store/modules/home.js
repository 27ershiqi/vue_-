//管理首页数据的vuex子模块


import {reqCategorys,reqBanners,reqFloors} from '../../api'
export default{
    state:{
      categoryList:[],//分类列表
      banners:[],//广告轮播数据
      floors:[],//楼层列表数据
    },
    mutations:{
      //接收保存广告轮播的mutations
        RECEIVE_BANNERS(state,banners){
            state.banners = banners
        },

        //接收保存楼层列表的mutations
        RECEIVE_FLOORS(state,floors){
          state.floors = floors
      },

      //接收保存分类列表的mutations
      RECEIVE_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList.filter((item,index)=>index<15)
      }
    },//当前子模块的
    actions:{

      //请求获取广告轮播列表的异步action
     async getBanners ({commit}){
          const result = await reqBanners()
          if(result.code === 200){
            const banners = result.data
            commit('RECEIVE_BANNERS',banners)
          }
      },
         //请求获取楼层列表的异步action
      async getFloors ({commit}){
        const result = await reqFloors()
        if(result.code === 200){
          const floors = result.data
          commit('RECEIVE_FLOORS',floors)
        }
    },

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