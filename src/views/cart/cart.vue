<template>
  <div id="cart">
    <header class="mui-bar mui-bar-nav head">
      <span class="mui-icon mui-icon-back" @click="goBack"></span>
      <h1 class="mui-title headtitle">购物车</h1>
    </header>
    <div class="shop-cart">
      <div class="cart-image">
        <img src="//gw.alicdn.com/tfs/TB1U0RydwoQMeJjy1XaXXcSsFXa-220-220.png_230x230q90_.webp"/>
      </div>
      <p>购物车是空的</p>
      <p>再忙，也要记得买点什么犒赏自己~</p>
      <button>去逛逛</button>
    </div>
    <div class="recommend-img">
      <img src="https://img.alicdn.com/tfs/TB1V2eQrKSSBuNjy0FlXXbBpVXa-966-114.png"/>
    </div>
    <div class="recommend-goods">
      <ul>
        <li v-for="(good,index) in recommendGoods" :key="index">
          <img
            v-lazy="good.imageUrl"/>
          <p>{{good.title}}</p>
          <div class="recommend-price">
            <span>￥ {{good.price}}</span>
            <span>{{good.sales}}人已购买</span>
          </div>
        </li>
        <!--<li>-->
          <!--<img-->
            <!--src="//gw.alicdn.com/bao/uploaded/i1/671257335/O1CN01qRX0Fi243TirGyHiX_!!671257335-0-pixelsss.jpg_500x500q90.jpg_.webp"/>-->
          <!--<p>MSI/微星RTX 2080 SUPER 8G魔龙/万图师台式机电脑游戏独立显卡</p>-->
          <!--<div class="recommend-price">-->
            <!--<span>￥ 5,599</span>-->
            <!--<span>150人已购买</span>-->
          <!--</div>-->
        <!--</li>-->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'home',
  mounted () {
    this.$store.dispatch('getRecommendGoods')
  },
  computed: {
    ...mapState(['recommendGoods'])
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #cart {
    .head {
      background-color: #cf2d28;
      .headtitle {
        color: #ececec;
      }
      span {
        color: #ffffff;
      }
    }
    .shop-cart {
      width: 100%;
      margin-top: 80px;
      .cart-image {
        margin-bottom: 20px;
        img {
          margin: 0 auto;
          width: 110px;
          height: 110px;
        }
      }
      p {
        width: 100%;
        text-align: center;
        &:nth-child(2) {
          font-size: 20px;
          color: #686868;
        }
      }
      button {
        color: #6d6d6d;
        margin-left: 50%;
        -webkit-transform: translateX(-50%);
        -moz-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        -o-transform: translateX(-50%);
        transform: translateX(-50%);
      }
    }
    .recommend-img {
      width: 100%;
      height: 49px;
      padding: 12px;
      margin-top: 70px;
      img {
        margin: 0 auto;
        width: 161px;
        height: 19px;
      }
    }
    .recommend-goods {
      width: 100%;
      padding: 0 10px;
      ul {
        width: 355px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        li {
          width: 47%;
          height: 260px;
          margin: 4px;
          background: #ffffff;
          -webkit-border-radius: 7px;
          -moz-border-radius: 7px;
          border-radius: 7px;
          img {
            width: 100%;
            height: 168px;
            margin-bottom: 11px;
            -webkit-border-radius: 7px;
            -moz-border-radius: 7px;
            border-radius: 7px;
          }
          p {
            width: 100%;
            height: 37px;
            overflow: hidden;
            padding: 0 5px;
            font-size: 13px;
            color: #222222;
            &:nth-child(2) {
              margin-bottom: 12px;
            }
          }
          .recommend-price {
            padding: 0 5px;
            font-size: 11px;
            color: #aaa2a8;
            span:nth-child(1) {
              font-size: 15px;
              color: #ff5500;
            }
            span:nth-child(2) {
              margin-left: 8px;
            }
          }
        }
      }
    }
  }
</style>
