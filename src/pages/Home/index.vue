<template>
  <div>
    <TypeNav/>
    <ListContainer/>
    <TodayRecommend/>
    <Rank/>
    <Like/>
    <Floor v-for="(floor, index) in floors" :key="floor.id" :floor="floor"/>
    <Brand/>
  </div>
</template>

<script>
import {mapState} from "vuex"
import ListContainer from "./ListContainer"
import TodayRecommend from "./TodayRecommend"
import Rank from "./Rank"
import Like from "./Like"
import Floor from "./Floor"
import Brand from "./Brand"
export default {
  name: 'Home',
  computed: {
    ...mapState({
      floors: state=> state.home.floors
    })
  },
  mounted() {
    //分发给异步action请求获取楼层列表数据
    this.$store.dispatch('getFloors')
    this.$store.dispatch('getBanners')
  },
  components:{
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand
  }
}
</script>

<style lang="less" scoped>

</style>
