//管理订单支付相关数据的vuex模块
import {
  reqTradeInfo,
  reqPayInfo
} from '../../api/'
export default {
  state: {
    tradeInfo: {}, //交易信息对象
    payInfo: {}, //支付信息对象
  },
  mutations: {
    RECEIVE_TRADE_INFO(state, {
      tradeInfo
    }) {
      // debugger
      state.tradeInfo = tradeInfo
    },
    RECEIVE_PAY_INFO(state, {
      payInfo
    }) {
      state.payInfo = payInfo
    },
  },
  actions: {
    //请求获取交易信息的异步axtion
    async getTradeInfo({
      commit
    }) {
      const result = await reqTradeInfo()
      console.log('getTradeInfos', result);
      if (result.code === 200) {
        const tradeInfo = result.data
        // debugger
        // console.log('123456',tradeInfo)
        commit('RECEIVE_TRADE_INFO', {
          tradeInfo
        })
      }
    },

    //请求获取支付信息的异步axtion
    async getPayInfo({
      commit
    }, orderId) {
      const result = await reqPayInfo()
      if (result.code === 200) {
        const payInfo = payInfo.data
        commit('RECEIVE_PAY_INFO', {
          payInfo
        })
      }
    }
  },
  getters: {},
}