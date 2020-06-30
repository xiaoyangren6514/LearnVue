<template>
  <div id="app">
    <router-link to="/home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/about" replace active-class="active">关于</router-link>
    <router-link :to="{path:'/profile',query:{id:1,age:34}}" replace active-class="active">我的</router-link>
    <router-view />
    <button @click="homeClick">首页2</button>
    <button @click="aboutClick">关于2</button>
    <button @click="profileClick">我的</button>
  </div> 
</template>

<script>
export default {
  name: "App",
  methods: {
    homeClick() {
      console.log("click");
      this.$router.push("/home");
    },
    aboutClick() {
      this.$router.replace("/about");
    },
    profileClick(){
      this.$router.push({
        path:"/profile",
        query:{
          id:12,
          name:"wangcai",
          age:34
        }
      });
    }
  }
};
</script>

<style>
.active {
  color: red;
}
</style>
