// import Home from "../pages/Home"
// import Search from "../pages/Search"
// import Detail from '../pages/Detail'

import Login from "../pages/Login"
import Register from "../pages/Register"

const Home = () => import('@/pages/Home')
const Search = () => import('@/pages/Search')
const Detail = () => import('@/pages/Detail')


import AddCartSuccess from "../pages/AddCartSuccess/"
import ShopCart from "../pages/ShopCart"
import Center from '@/pages/Center'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Trade from '@/pages/Trade'
import MyOrder from '../pages/Center/MyOrder'
import GroupBody from '../pages/Center/GroupBody'
import store from '@/store'
export default [
  {
    path:'/',
    component: Home
  },
  {
    path: "/login",//登录
    component: Login,
    meta:{
      isHideFooter:true
    },
    //只有没有登陆,才能查看登录页面
    // beforeEnter:(to, from, next) => {
    //   const token = store.state.user.userInfo.token
    //   if(token){
    //     next('/')
    //   }else{
    //     next()
    //   }
    // }
  },
  {
    path: "/register",//注册
    component: Register,
    meta:{
      isHideFooter:true
    }
  },
  {
    path: "/search/:keyword?",
    component: Search,
    name:"key",
    //  props(route){
    //    return{
    //     keywrou3:route.params.keyword,
    //     keywrou4:route.query.keywrou2
    //    }
    //  },
    //  props:route => ({keywrou3:route.params.keyword, keywrou4:route.query.keywrou2})
    props:function (route) {
        return {
          keywrou3:route.params.keyword,
          keywrou4:route.query.keywrou2
        }
    }
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path:'/addcartsuccess',
    component:AddCartSuccess,
    beforeEnter:(to, from, next) => {
     const skuNum = to.query.skuNum
     const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
     if(skuNum && skuInfo instanceof Object){
       next()
     }else{
       next('/shopcart')
     }
    }
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
      path: '/trade',
      component: Trade,
      beforeEnter:(to, from, next) => {//监视回调函数
        if(from.path === '/shopcart'){
          next()
        }else{
          next('/shopcart')
        }
    }
 },
  {
    path: '/pay',
    component: Pay,
    beforeEnter:(to, from, next) => {//监视回调函数
      if(from.path === '/trade'){
        next()
      }else{
        next('/trade')
      }
  }
  },
  {
    path: '/paysuccess',
    component: PaySuccess,
    beforeEnter:(to, from, next) => {//监视回调函数
      if(from.path === '/pay'){
        next()
      }else{
        next('/pay')
      }
  }
  },
  {
    path: '/center',
    component: Center,
    children:[
      {
        path:'/center/myorder',
        component:MyOrder,
      },
      {
        // path:'/center/groupbody',
        path:'groupbody',//简写方式，不加斜杠
        component:GroupBody
      },
      //自动跳转的路由
      {
        path:'',
        redirect: '/center/myorder',
      }
    ]
  },
  {
    path: '/communication',
    component: () => import('@/pages/Communication/Communication'),
    children: [
      {
        path: 'event',
        component: () => import('@/pages/Communication/EventTest/EventTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'model',
        component: () => import('@/pages/Communication/ModelTest/ModelTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'sync',
        component: () => import('@/pages/Communication/SyncTest/SyncTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'attrs-listeners',
        component: () => import('@/pages/Communication/AttrsListenersTest/AttrsListenersTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'children-parent',
        component: () => import('@/pages/Communication/ChildrenParentTest/ChildrenParentTest'),
        meta: {
          isHideFooter: true
        },
      },
      {
        path: 'scope-slot',
        component: () => import('@/pages/Communication/ScopeSlotTest/ScopeSlotTest'),
        meta: {
          isHideFooter: true
        },
      }
    ],
  },
]