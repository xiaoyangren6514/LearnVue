<template>
  <div id="home">
    <h2>我是home页面</h2>
    <span>我是home内容 哈哈哈</span>
    <router-link to="/home/waitreceive">待收货</router-link>
    <router-link to="/home/waitevaluate" >待评价</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>

<style >
</style>