<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideSubCategorys" @mouseenter="showFirstCategorys">
        <h2 class="all">全部商品分类</h2>

        <transition name="move">
          <div class="sort" v-show="isShowFirst">
            <div class="all-sort-list2" @click="toSearch2">

              <div class="item" :class="{item_on:index === currentIndex}" v-for="(c1,index) in categoryList1"
                :key="c1.categoryId" @mouseenter="showSubScategorys(index)">
                <h3>
                  <!-- <a href="javascript:;" @click="toSearch({categoryName:c1.categoryName,category1Id:c1.categoryId})">{{c1.categoryName}}</a> -->
                  <!-- <router-link :to="`/search?categoryName=${c1.categoryName}&category1ID=${c1.categoryId}`">{{c1.categoryName}}</router-link> -->
                  <a href="javascript:;" :data-categoryName="c1.categoryName"
                    :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>

                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="(c2) in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <!-- 编程式 -->
                        <!-- <a href="javascript:;" @click="toSearch({categoryName:c2.categoryName,category2Id:c2.categoryId})">{{c2.categoryName}}</a> -->
                        <!-- 声明式 -->
                        <!-- <router-link :to="`/search?categoryName=${c2.categoryName}&category2ID=${c2.categoryId}`">{{c2.categoryName}}</router-link> -->
                        <!-- 事件委托 -->
                        <a href="javascript:;" :data-categoryName="c2.categoryName"
                          :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>

                      </dt>
                      <dd>
                        <em v-for="(c3) in c2.categoryChild" :key="c3.categoryId">
                          <!-- <a href="javascript:;" @click="toSearch({categoryName:c3.categoryName,category3Id:c3.categoryId})">{{c3.categoryName}}</a> -->
                          <!-- <router-link :to="`/search?categoryName=${c3.categoryName}&category3ID=${c3.categoryId}`">{{c3.categoryName}}</router-link> -->
                          <a href="javascript:;" :data-categoryName="c3.categoryName"
                            :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>

                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>

    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import {
    mapState,
    mapActions
  } from "vuex"
  import throttle from "lodash/throttle"

  export default {
    name: "TypeNav",
    data() {
      return {
        currentIndex: -2, //标识哪个下标的分类项需要显示子分类列表
        isShowFirst: this.$route.path === '/',
      }
    },
    mounted() {
      //通过store对象的dispatch()来触发异步acions getCategoryList执行请求获取数据
      // this.$store.dispatch('getCategoryList')//数据会从接口转移到vuex 的state中
      // this.getCategoryList()
    },
    computed: {
      categoryList1() {
        return this.$store.state.home.categoryList
      },
      // ...mapState(['categoryList'])//是undefined
      // ...mapState({categoryList2:"categoryList"})//还是undefined
      // ...mapState({categoryList3:state => state.home.categoryList})

    },
    methods: {
      ...mapActions(['getCategoryList']),

      //显示一级分类列表
      showFirstCategorys() {
        this.isShowFirst = true,
          //让子分类列表可以给改变为特定下标
          this.currentIndex = -1
      },
      //移出
      hideSubCategorys() {
        this.currentIndex = -2
        //如果当前不是ss首页,需要隐藏以一级列表
        if (this.$route.path !== '/') {
          this.isShowFirst = false
        }
      },
      //移入
      showSubScategorys: throttle(function (index) {
        if (this.currentIndex !== -2) {
          this.currentIndex = index
        }
      }, 200),

      //编程式
      toSearch({
        categoryName,
        category1Id,
        category2Id,
        category3Id
      }) {
        //query参数
        const query = {
          categoryName,
        }
        if (category1Id) {
          query.category1ID = category1Id
        } else if (category2Id) {
          query.category2ID = category2Id
        } else if (category3Id) {
          query.category3ID = category3Id
        }
        const location = {
          name: 'key',
          query

        }
        this.$router.push(location)
      },

      //事件委托来监听每一个分类项的点击
      toSearch2(event) {
        // console.log(event.target.tagName)
        //取出data自定义属性值
        const {
          categoryname,
          category1id,
          category2id,
          category3id
        } = event.target.dataset
        //如果点击的不是分类项直接结束
        if (!categoryname) return
        //准备query
        const query = {
          categoryname: categoryname
        }
        if (category1id) {
          query.category1Id = category1id
        } else if (category2id) {
          query.category2Id = category2id
        } else if (category3id) {
          query.category3Id = category3id
        }

      //去除当前params中的keywrou，如果有值那就携带上
      const keywrou = this.$route.params.keywrou
        if (keywrou) {
          location.params = {keywrou}
        }
        //准备跳转路由的location
        const location = {
          name: 'key',
          query
        }
        //跳转到search
        this.$router.push(location)
        this.hideSubCategorys()
      }
    },
  }
</script>

<style lang="less" scoped>
  .type-nav {
    border-bottom: 2px solid #e1251b;

    .container {
      width: 1200px;
      margin: 0 auto;
      display: flex;
      position: relative;

      .all {
        width: 210px;
        height: 45px;
        background-color: #e1251b;
        line-height: 45px;
        text-align: center;
        color: #fff;
        font-size: 14px;
        font-weight: bold;
      }

      .nav {
        a {
          height: 45px;
          margin: 0 22px;
          line-height: 45px;
          font-size: 16px;
          color: #333;
        }
      }

      .sort {
        position: absolute;
        left: 0;
        top: 45px;
        width: 210px;
        height: 461px;
        position: absolute;
        background: #fafafa;
        z-index: 999;
      //显示过程的transtion
      &.move-enter-active{
        transition:all 300ms;
      }
      //隐藏时的样式
      &.move-enter,&.move-leave-to{
        opacity: 0;
        height: 0;
      }
        .all-sort-list2 {
          .item {
            h3 {
              line-height: 30px;
              font-size: 14px;
              font-weight: 400;
              overflow: hidden;
              padding: 0 20px;
              margin: 0;

              a {
                color: #333;
              }
            }

            .item-list {
              display: none;
              position: absolute;
              width: 734px;
              min-height: 460px;
              background: #f7f7f7;
              left: 210px;
              border: 1px solid #ddd;
              top: 0;
              z-index: 9999 !important;

              .subitem {
                float: left;
                width: 650px;
                padding: 0 4px 0 8px;

                dl {
                  border-top: 1px solid #eee;
                  padding: 6px 0;
                  overflow: hidden;
                  zoom: 1;

                  &.fore {
                    border-top: 0;
                  }

                  dt {
                    float: left;
                    width: 54px;
                    line-height: 22px;
                    text-align: right;
                    padding: 3px 6px 0 0;
                    font-weight: 700;
                  }

                  dd {
                    float: left;
                    width: 415px;
                    padding: 3px 0 0;
                    overflow: hidden;

                    em {
                      float: left;
                      height: 14px;
                      line-height: 14px;
                      padding: 0 8px;
                      margin-top: 5px;
                      border-left: 1px solid #ccc;
                    }
                  }
                }
              }
            }

            &.item_on {
              background-color: #ddd;

              .item-list {
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>