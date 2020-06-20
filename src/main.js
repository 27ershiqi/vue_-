import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import TypeNav from "./components/TypeNav"
import store from './store'
import mock from './mock/mockServer'//引入加载
import 'swiper/css/swiper.min.css'
import './validata.js' //引入表单验证
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
import './elements'


import VueLazyload from 'vue-lazyload'
import loading from './assets/images/loading.gif'
Vue.use(VueLazyload, {
  loading,
})



// 引入api模块所有分别暴露的函数, 封装到API对象中
import * as API from '@/api'

Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)
// 将API对象保存到Vue的原型对象上 ===> 让所有组件对象都直接可见(不用再引入API)
Vue.prototype.$API = API
new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  store,
  //全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
    //Vue.prototype.$bus = new Vue() 这样写也行
  }
}).$mount('#app')


