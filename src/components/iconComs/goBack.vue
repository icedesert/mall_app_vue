<template>
  <div id="go_back" @click="goBack" v-show="$route.meta.goBackShow">
    <span class="mui-icon mui-icon-back">
    </span>
  </div>
</template>

<script>
export default {
  name: 'goBack',
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
  #go_back {
    position: absolute;
    left: 10px;
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
      margin-left: 1px;
    }
  }
</style>
