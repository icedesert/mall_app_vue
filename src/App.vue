<template>
  <div id="app">
    <goback></goback>
    <carticon></carticon>
    <keep-alive>
      <router-view/>
    </keep-alive>
    <nav v-show="tabisShow" class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/discover">
        <span class="mui-icon mui-icon-extra mui-icon-extra-class"></span>
        <span class="mui-tab-label">分类</span>
      </router-link>
      <router-link class="mui-tab-item" to="/cart">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart"></span>
        <!--               <span class="mui-badge">0</span>   数字↑ -->
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link class="mui-tab-item" to="/mine">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">我的</span>
      </router-link>
    </nav>
    <div v-show="tabgoodsisShow" class="goods-tab">
      <ul>
        <li>
          <span><span class="icon-housesale"><span class="path1"></span><span class="path2"></span><span
            class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span
            class="path7"></span></span></span>
          <div class="cell-title">店铺</div>
        </li>
        <li>
          <span class="mui-icon mui-icon-chatbubble server"></span>
          <div class="cell-title">客服</div>
        </li>
        <li>
          <span class="mui-icon mui-icon-star"></span>
          <div class="cell-title">收藏</div>
        </li>
      </ul>
      <div class="cart-buy cart">加入购物车</div>
      <div class="cart-buy buy">立即购买</div>
    </div>
  </div>
</template>

<script>
import goback from './components/iconComs/goBack'
import carticon from './components/iconComs/cartIcon'
import { mapActions } from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      tabisShow: true,
      tabgoodsisShow: false
    }
  },
  mounted () {
    this.getUserInfoSession()
    let pathSort = this.$route.path.substring(0, 6)
    if (pathSort === '/goods') {
      this.tabisShow = false
      this.tabgoodsisShow = true
    } else {
      this.tabisShow = true
      this.tabgoodsisShow = false
    }
  },
  watch: {
    '$route.path': function (newvalue) {
      let pathSort = newvalue.substring(0, 6)
      if (pathSort === '/goods') {
        this.tabisShow = false
        this.tabgoodsisShow = true
      } else {
        this.tabisShow = true
        this.tabgoodsisShow = false
      }
    }
  },
  methods: {
    ...mapActions(['getUserInfoSession'])
  },
  components: {
    goback,
    carticon
  }
}
</script>

<style lang="less" scoped>
  #app {
    padding: 44px 0px 52px 0px;
    nav {
      .mui-active {
        color: #cf2d28;
      }
    }
    .goods-tab {
      display: flex;
      position: fixed;
      text-align: center;
      bottom: 0;
      width: 100%;
      height: 50px;
      background-color: #ffffff;
      -webkit-box-shadow: 4px 4px 8px #313131;
      -moz-box-shadow: 4px 4px 8px #313131;
      box-shadow: 4px 4px 8px #313131;
      ul {
        display: flex;
        li {
          width: 50px;
          height: 50px;
          padding: 5px;
          font-size: 20px;
          color: #9a9a9f;
          .cell-title {
            font-size: 12px;
          }
          .server {
            color: #007aff;
          }
        }
      }
      .cart-buy {
        width: 112.5px;
        height: 50px;
        line-height: 34px;
        padding: 8px 0;
        font-size: 15px;
        color: #ffffff;
      }
      .cart {
        background-color: #ffa239;
      }
      .buy {
        background-color: #cf0f47;
      }
    }
  }
</style>
