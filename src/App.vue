<template>
<div>
  <Header/>
    <router-view></router-view>
  <Footer/>
</div>
</template>

<script type="text/ecmascript-6">
import Footer from "./components/Footer"
import Header from "./components/Header"
export default {
  components:{
    Footer,
    Header
  }
}
</script>

<style scoped>


</style>
