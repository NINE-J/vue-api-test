<template>
  <div>
    <ApiTest />
  </div>
</template>

<script>
import ApiTest from "@/router/views/ApiTest.vue";

export default {
  name: "App",
  components: {
    ApiTest,
  },
  mounted() {},
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
