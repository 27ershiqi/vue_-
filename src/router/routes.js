import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Search from "../pages/Search"
import Detail from '../pages/Detail'
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
    }
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
]