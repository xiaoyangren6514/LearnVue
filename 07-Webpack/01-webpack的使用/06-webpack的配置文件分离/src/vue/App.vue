<template>
  <div class="title">
    {{message}}
    <div>
      <Cpn />
    </div>
  </div>
</template>

<script>
import Cpn from "./Cpn";
export default {
  name: "App",
  data() {
    return {
      message: "hello vue"
    };
  },
  components: {
    Cpn
  }
};
</script>

<style scoped>
.title {
  color: green;
}
</style>
