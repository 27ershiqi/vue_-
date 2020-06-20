import Vue from "vue"
import VueRouter from "vue-router"
import routes from "./routes"
import store from '@/store'
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
const router = new VueRouter({
    mode:'history',
    routes,
    // 路由跳转后, 滚动条停留在最上面(0,0)
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
      }
})
const checkPaths = ['/trade','/pay','/center']
//注册全局前置守卫
router.beforeEach((to, from, next) => {//监视回调函数
    
  const targetPath = to.path
  const needCheck = checkPaths.find(path => targetPath.indexOf(path)===0)
  if(needCheck){
   const token = store.state.user.userInfo.token
   if(token){
    next()//放行 
   }else{
    next('/login?redirect=' + targetPath)
   }
  } else {
    next()//放行
}
})
//向外暴露路由器对象
export default router