<template>
  <div id="app">
    <header class="mui-bar mui-bar-nav head">
      <h1 class="mui-title headtitle">商城项目</h1>
    </header>
    <h1>hello world</h1>
    <nav class="mui-bar mui-bar-tab">
      <a class="mui-tab-item" href="#tabbar">
        <span class="mui-icon icon-home3 icon"></span>
        <span class="mui-tab-label">首页</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-map">
        <span class="mui-icon icon-compass2 icon"></span>
        <span class="mui-tab-label">发现</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-chat">
        <span class="mui-icon icon-cart icon"><span class="mui-badge">0</span></span>
        <span class="mui-tab-label">购物车</span>
      </a>
      <a class="mui-tab-item" href="#tabbar-with-contact">
        <span class="mui-icon icon-user icon"></span>
        <span class="mui-tab-label">我的</span>
      </a>
    </nav>
  </div>
</template>

<script>

</script>

<style lang="less" scoped>
  #app {
    padding: 44px 0;
    .head {
      background-color: #7f8cff;
      .headtitle {
        color: #ececec;
      }
    }
    nav {
      a {
        .icon {
          font-size: 21px;
        }
      }
    }
  }
</style>
