//Vuex最核心的管理对象 store(仓库)
import Vue from "vue"
import Vuex from "vuex"
import  home from './modules/home'
import  user from './modules/user'
Vue.use(Vuex)

// const state = {}
const mutations = {}
const actions = {}
const getters = {}

export default new Vuex.Store({
  // state,
  mutations,
  actions,
  getters,
  modules:{//指定vuex管理所有的子模块
    home,//标识名称，vuex的子模块
    user
  }
})