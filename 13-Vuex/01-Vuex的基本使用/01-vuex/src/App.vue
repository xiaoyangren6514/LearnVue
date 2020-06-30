<template>
  <div id="app">
    <h1>{{count}}</h1>
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="subFive">+5</button>
    <hello-world></hello-world>

    <h3>显示学生喽</h3>
    <button @click="addStudent">添加学生</button>
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
import { INCREMENT } from "./store/mutation.type";
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
      this.$store.commit(INCREMENT);
      // 调用actions中方法
      this.$store.dispatch("aUpdateInfo", "我是payload").then(res => {
        console.log("内部执行成功");
      });
    },
    sub() {
      this.$store.commit("decreament");
    },
    subFive() {
      // payload 载荷
      // 1. 普通提交方式
      this.$store.commit("increamentCount", 5);
      // 2. 特殊的提交封装
      // this.$store.commit({
      //   type:'increamentCount',
      //   count
      // })
    },
    addStudent() {
      const stu = { id: 6, name: "小红", age: 99 };
      this.$store.commit("addStudent", stu);
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
