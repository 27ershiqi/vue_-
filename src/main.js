import Vue from 'vue'
import App from './App.vue'
import router from "./router/index"
import TypeNav from "./components/TypeNav"
import store from './store'
Vue.component('TypeNav',TypeNav)
new Vue({
  // el: '#app',
  render: h => h(App),
  router,
  store
}).$mount('#app')


