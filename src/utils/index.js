//包含一些工具函数的模块

import {v4 as uuidv4} from 'uuid'

//得到一个用户临时id
//1.从localStorage中读取,如果有返回
//2.如果没有,使用uuid生成一个新的，保存到localStorage中，返回
export function getUserTempId() {
    //1.从localStorage中读取,如果有返回
    let userTempId = localStorage.getItem('USER_TEMP_ID_KEY')
    //2.如果没有,使用uuid生成一个新的，保存到localStorage中，返回
    if(!userTempId){
      userTempId = uuidv4()
      //保存到localStorage中返回
      localStorage.setItem('USER_TEMP_ID_KEY',userTempId)
    }
    //返回
    return userTempId
}

//保存用户信息到localStorage中
export function seveUserInfo(userInfo){
  window.localStorage.setItem('USER_INFO_KEY',JSON.stringify(userInfo))
}

//读取localStorage保存的用户信息
export function getUserInfo(){
 return JSON.parse(window.localStorage.getItem('USER_INFO_KEY')) || {}
}

//删除localStorage中保存的用户信息
export function removeUserInfo(){
    window.localStorage.removeItem('USER_INFO_KEY')
 }