import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
Vue.use(VueRouter)
const originpush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location, onComplete, onAbore){
    if(!onComplete && !onAbore){
        return originpush.call(this,location).catch(error=>{
            console.log('---push', error.message)
        })
    }else{
        originpush.call(this,location,onComplete,onComplete)
    }
}

VueRouter.prototype.replace = function(location,onComplete,onAbore) {
    if(!onComplete && !onAbore){
        return originReplace.call(this,location).catch(error=>{
            console.log('---push', error.message)
        })
    }else{
        originReplace.call(this,location,onComplete,onAbore)
    }
}
export default new VueRouter({
    mode:'history',
    routes,
    // 路由跳转后, 滚动条停留在最上面(0,0)
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
      }
})