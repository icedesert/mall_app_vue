<template>
  <div id="discover">
    <header class="mui-bar mui-bar-nav head">
      <span class="mui-icon mui-icon-back" @click="$router.back()"></span>
      <h1 class="mui-title headtitle">分类</h1>
    </header>
    <div class="category">
      <div class="category-tab">
        <ul>
          <!--<li v-for="(goodClass,index) in goodsClass" :key="index"-->
          <!--@click="tabItemSelected(index)" :class="{active : indexClick === index}">{{goodClass.classTitle}}-->
          <!--</li>-->
          <li @click="tabItemSelected(0)" :class="{active : indexClick === 0}">热门推荐</li>
          <li @click="tabItemSelected(1)" :class="{active : indexClick === 1}">手机数码</li>
          <li @click="tabItemSelected(2)" :class="{active : indexClick === 2}">家用电器</li>
          <li @click="tabItemSelected(3)" :class="{active : indexClick === 3}">电脑办公</li>
          <li @click="tabItemSelected(4)" :class="{active : indexClick === 4}">美妆护肤</li>
          <li @click="tabItemSelected(5)" :class="{active : indexClick === 5}">汽车生活</li>
          <li @click="tabItemSelected(6)" :class="{active : indexClick === 6}">京东超市</li>
          <li @click="tabItemSelected(7)" :class="{active : indexClick === 7}">运动户外</li>
          <li @click="tabItemSelected(8)" :class="{active : indexClick === 8}">家具家装</li>
          <li @click="tabItemSelected(9)" :class="{active : indexClick === 9}">家居厨具</li>
          <li @click="tabItemSelected(10)" :class="{active : indexClick === 10}">箱包手袋</li>
          <li @click="tabItemSelected(11)" :class="{active : indexClick === 11}">钟表珠宝</li>
          <li @click="tabItemSelected(12)" :class="{active : indexClick === 12}">生活旅行</li>
          <li @click="tabItemSelected(13)" :class="{active : indexClick === 13}">奢侈品</li>
        </ul>
      </div>
      <div class="category-content">
        <div class="good-class" v-for="(goodClass,index) in goodsClass" :key="index">
          <div class="category-item" v-for="(category,index) in goodClass.categories" :key="index">
            <h4>{{category.name}}</h4>
            <div class="category-goods">
              <ul>
                <li v-for="(goodItem,index) in category.good" :key="index">
                  <img v-lazy="goodItem.imageUrl"/>
                  <span>{{goodItem.name}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BScroll from 'better-scroll'

export default {
  name: 'home',
  data () {
    return {
      indexClick: 0,
      testOffsetTop: 0,
      testIsFixed: false
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.scroll)
    this.$store.dispatch('getGoodsClass', () => {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll('.category-tab', { click: true })
        this.constentScroll = new BScroll('.category-content', { click: true })
      })
    })
  },
  computed: {
    ...mapState(['goodsClass'])
  },
  methods: {
    tabItemSelected (index) {
      if (this.indexClick === index) {
        return
      }
      this.indexClick = index
      if (index % 2 === 0) {
        this.$store.dispatch('getGoodsClass', () => {
          this.$nextTick(() => {
            /* eslint-disable no-new */
            if (!this.constentScroll) {
              this.constentScroll = new BScroll('.category-content', { click: true })
            } else {
              this.constentScroll.refresh()
            }
          })
        })
      } else if (index % 2 === 1) {
        this.$store.dispatch('getGoodsClass01', () => {
          this.$nextTick(() => {
            /* eslint-disable no-new */
            if (!this.constentScroll) {
              this.constentScroll = new BScroll('.category-content', { click: true })
            } else {
              this.constentScroll.refresh()
            }
          })
        })
      }
    }
    // scroll () {
    //   /** fixed writing */
    //   let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    //   if (scrollTop >= 25 && !this.testIsFixed) {
    //     this.$refs.test.style.position = 'fixed'
    //     this.$refs.test.style.top = '45px'
    //     this.testIsFixed = true
    //   } else if (scrollTop < 25 && this.testIsFixed) {
    //     this.$refs.test.style.position = 'absolute'
    //     this.$refs.test.style.top = '70px'
    //     this.testIsFixed = false
    //   }
    // }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #discover {
    .test {
      position: absolute;
      width: 100px;
      height: 50px;
      /*background: #f0ad4e;*/
      left: 50%;
      top: 70px;
      -webkit-transform: translateX(-50%);
      -moz-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      -o-transform: translateX(-50%);
      transform: translateX(-50%);
      z-index: 80;
    }
    .head {
      background-color: #cf2d28;
      .headtitle {
        color: #ececec;
      }
      span {
        color: #ffffff;
      }
    }
    .category {
      width: 100%;
      height: 573px;
      background: #ffffff;
      .category-tab {
        float: left;
        width: 23%;
        height: 573px;
        ul {
          width: 100%;
          li {
            width: 100%;
            height: 46px;
            color: #333333;
            font-size: 14px;
            background-color: #ededf2;
            text-align: center;
            line-height: 46px;
            &.active {
              background-color: #ffffff;
            }
          }
        }
      }
      .category-content {
        float: left;
        width: 76.6%;
        height: 573px;
        background: #ffffff;
        .good-class {
          .category-item {
            padding: 16px 7px 0px 7px;
            h4 {
              font-size: 14px;
              width: 100%;
              height: 30px;
            }
            .category-goods {
              overflow: hidden;
              ul {
                li {
                  float: left;
                  width: 33.333333333333333333333333333333333333333333333%;
                  margin-bottom: 5px;
                  img {
                    margin: 0 auto;
                    width: 70px;
                    height: 70px;
                  }
                  span {
                    display: inline-block;
                    width: 100%;
                    font-size: 12px;
                    text-align: center;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
</style>
