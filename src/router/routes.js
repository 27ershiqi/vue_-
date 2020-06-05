import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Search from "../pages/Search"

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
    path: "/search/:keywrou?",
    component: Search,
    name:"key"
  },
]