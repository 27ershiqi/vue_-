import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import TypeNav from "./components/TypeNav"
import store from './store'
import mock from './mock/mockServer'//引入加载
import 'swiper/css/swiper.min.css'
import Carousel from './components/Carousel'
import Pagination from './components/Pagination'
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)
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


