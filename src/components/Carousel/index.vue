<template>
  <!--banner轮播-->
  <div class="swiper-container" ref="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in carouselList" :key="item.id">
        <img :src="item.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from 'swiper'
  export default {
    name: "Carousel",
    //声明接收属性数据
    props:{
      //轮播的数组数据
      carouselList:Array,
      autoplay:Boolean
    },
    watch: {
      //监视banners，一旦它发生改变就调用
      // carouselList(newval) {
      //   // console.log(newval)
      //   this.$nextTick(() => {
      //     this.initSwiper()
      //   })
      // },

      carouselList: {
        // console.log(newval)
        //监视的回调
        handler(value){
          //如果没有数据直接结束
          if (this.carouselList.length === 0)return
          this.$nextTick(() => {
          this.initSwiper()
          })
        },
        immediate: true//数据显示就会调用第一次
      }
    },

    //初始化显示界面后立即执行  
    mounted() {
      //创建swiper实列对象:必须在列表数据显示之后创建才有正常轮播效果
      //  setTimeout(() => {
      //    new Swiper(this.$refs.swiper, {
      //   // direction: 'vertical', // 垂直切换选项 horizontal横向，默认不写 就是横向
      //   loop: true, // 循环模式选项
      //   autoplay:true,
      //   // 如果需要分页器
      //   pagination: {
      //     el: '.swiper-pagination',
      //   },

      //   // 如果需要前进后退按钮
      //   navigation: {
      //     nextEl: '.swiper-button-next',
      //     prevEl: '.swiper-button-prev',
      //   }
      // })
      //  }, 1000);

      //列表界面如果有数据了，就创建一个对应的swiper
      if (this.carouselList.length > 0) {
          this.initSwiper()
      }
    },

    methods: {
      initSwiper() {
        new Swiper(this.$refs.swiper, {
          // direction: 'vertical', // 垂直切换选项 horizontal横向，默认不写 就是横向
          loop: true, // 循环模式选项
          autoplay: this.autoplay,
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        })
      }
    }
  }
</script>

<style scoped>


</style>