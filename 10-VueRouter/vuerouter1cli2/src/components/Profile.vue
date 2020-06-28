<template>
  <div class="profile">
      <h2>我是Profile组件</h2>
      {{$route.query}}
      {{$route.query.age}}
  </div>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style  scoped>
</style>
