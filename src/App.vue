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
export default {
  components:{
    Header,
    Footer
  },
}
</script>

<style scoped>


</style>
