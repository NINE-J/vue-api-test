<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    this.$axios
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then((res) => {
        // interceptor에서 확인한 뒤 component에서 한 번 더 확인
        console.log("response in component:", res);
        return res.data;
      })
      .then((object) => {
        // 응답 결과에서 필요한 데이터를 반환
        console.log("type:", typeof object, "/ data:", object);
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
