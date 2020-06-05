import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var a = 10

new Vue({
  el:"#app",
  render: h => h(App),
})
