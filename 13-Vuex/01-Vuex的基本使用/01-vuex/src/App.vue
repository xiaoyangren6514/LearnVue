<template>
  <div id="app">
    <h1>{{count}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <hello-world></hello-world>

    <h3>显示学生喽</h3>
    <h3>{{ this.$store.state.students }}</h3>
    <h3>显示年龄大于40的</h3>
    <h3>
      {{ this.$store.getters.ageMore40 }}
      <br />
      length:{{ this.$store.getters.ageMore40Length }}
    </h3>
    <h3>根据ID筛选学生</h3>
    {{ $store.getters.getStudentById(4) }}
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
