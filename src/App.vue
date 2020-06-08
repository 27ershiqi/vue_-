<template>
<div>
    <Header/>
        <router-view></router-view>
    <Footer v-if="!$route.meta.isHideFooter"/>
</div>
</template>

<script type="text/ecmascript-6">
import Header from "./components/Header"
import Footer from "./components/Footer"
import {reqCategoryList,reqFloors} from "./api"
export default {
  components:{
    Header,
    Footer
  },
  async mounted() {
    //在路由切换时不会重复执行
  //   //测试调用接口请求函数获取数据
  //   const result = await reqCategorys()
  //   console.log('result',result)
  //分发给异步的action请求获取分类数据
    this.$store.dispatch('getCategoryList')
    // const result = await reqFloors()
    // console.log('____result',result)  
  },
}
</script>

<style scoped>


</style>
