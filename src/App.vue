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
// import {reqCategorys} from "./api"
export default {
  components:{
    Header,
    Footer
  },
  // async mounted() {
  //   //测试调用接口请求函数获取数据
  //   const result = await reqCategorys()
  //   console.log('result',result)
  // },
}
</script>

<style scoped>


</style>
