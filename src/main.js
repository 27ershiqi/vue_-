import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import TypeNav from "./components/TypeNav"
import store from './store'
import mock from './mock/mockServer'//引入加载
import 'swiper/css/swiper.min.css'
import Carousel from './components/Carousel'
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')


