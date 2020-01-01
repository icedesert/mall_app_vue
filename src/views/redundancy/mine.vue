<template>
  <div id="mine">
    <header class="mui-bar mui-bar-nav head" @click="swiperChildrenIndexs">
      <span class="mui-icon mui-icon-back" @click="$router.back()"></span>
      <h1 class="mui-title headtitle">个人中心</h1>
    </header>
    <div class="swiper" ref="swiper">
      <transition name="move" v-for="(item,index) in 3" :key="index">
        <div class="swiper-item" :class="itemClasses[index]" :index="index" v-show="currentIndex===index">
          {{item}}
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      currentIndex: 0,
      swiperLength: 0,
      itemClasses: ['item-green', 'item-red', 'item-blue']
    }
  },
  mounted () {
    this.swiperLength = this.$refs.swiper.getElementsByClassName('swiper-item').length
    setInterval(() => {
      this.currentIndex++
      if (this.currentIndex >= this.swiperLength) {
        this.currentIndex = 0
      }
    }, 2000)
  },
  methods: {
    swiperChildrenIndexs () {
      const items = this.$refs.swiper.getElementsByClassName('swiper-item')
      items.forEach(item => {
        console.log(item.attributes[1].nodeValue)
      })
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #mine {
    .head {
      background-color: #cf2d28;
      .headtitle {
        color: #ececec;
      }
      span {
        color: #ffffff;
      }
    }
    .swiper {
      position: relative;
      overflow: hidden;
      width: 100%;
      height: 150px;
      padding: 5%;
      background: #f0dfd7;
      .swiper-item {
        width: 337px;
        height: 112px;
        background: #7272d9;
        text-align: center;
        line-height: 110px;
        &.item-green {
          background: #4cd964;
        }
        &.item-red {
          background: #cf2d28;
        }
        &.item-blue {
          background: #007aff;
        }
        &.move-enter-active, &.move-leave-active {
          position: absolute;
          margin: 0 15px;
          -webkit-transition: all .3s;
          -moz-transition: all .3s;
          -ms-transition: all .3s;
          -o-transition: all .3s;
          transition: all .3s;
        }
        &.move-enter {
          -webkit-transform: translateX(105%);
          -moz-transform: translateX(105%);
          -ms-transform: translateX(105%);
          -o-transform: translateX(105%);
          transform: translateX(105%);
        }
        &.move-leave-to {
          -webkit-transform: translateX(-105%);
          -moz-transform: translateX(-105%);
          -ms-transform: translateX(-105%);
          -o-transform: translateX(-105%);
          transform: translateX(-105%);
        }
      }
    }
  }
</style>
