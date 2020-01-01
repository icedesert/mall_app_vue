<template>
  <div id="carticon" @click="goCart" v-show="$route.meta.cartIsShow">
    <span class="mui-icon-extra mui-icon-extra-cart"></span>
  </div>
</template>

<script>
export default {
  name: 'cartIcon',
  methods: {
    goCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #carticon {
    position: absolute;
    right: 10px;
    top: 10px;
    width: 30px;
    height: 30px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    background-color: #000000;
    color: #ffffff;
    opacity: 40%;
    z-index: 50;
    span {
      line-height: 30px;
      margin-left: 2px;
    }
  }
</style>
