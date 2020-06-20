//管理用户数据
import {reqRegister,reqLogout,reqLogin} from '../../api/'
import {getUserTempId,seveUserInfo,getUserInfo,removeUserInfo} from "../../utils"
export default {
  state:{
    userInfo:getUserInfo(),//登录用户的信息 如果有数据就自动登录上了
    userTempId:getUserTempId()
  },
  mutations:{
    RECEIVE_USER_INFO(state,userInfo){
      state.userInfo = userInfo
    },
    RESET_USER_INFO(state){
      state.userInfo = {}
    }
  },
  actions:{
    //请求注册的接口,注册异步的actions
    async register({commit},userInfo){
      const result = await reqRegister(userInfo)
        if(result.code !== 200){
          throw new Error(result.message || '注册失败')
        }
    },

    //登录的异步的actions
    async login ({commit}, {mobile, password}) {
      const result = await reqLogin(mobile, password)
      if (result.code==200) {
        const userInfo = result.data
        // 通过commit触发mutation调用 ==> 保存信息到state
        commit('RECEIVE_USER_INFO', userInfo)
        // 保存localStorage中  ===> 从而可以实现自动登陆的功能
        seveUserInfo(userInfo)
      } else {
        throw new Error(result.message || '登陆失败')
      }
    },

    //退出登录的异步actions
    async logout({commit},){
      const result = await reqLogout()
      if(result.code === 200){
        const userInfo = result.data
        commit('RESET_USER_INFO')
        removeUserInfo(userInfo)
      } else {
        throw new Error(result.message || '退出登录失败')
      }
    },

  },
  getters:{},
}