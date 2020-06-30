<template>
  <div id="app">
    <h1>{{count}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <hello-world></hello-world>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
export default {
  name: "App",
  computed: {
    count() {
      return this.$store.state.counter;
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    add() {
      this.$store.commit("increament");
    },
    sub() {
      this.$store.commit("decreament");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
