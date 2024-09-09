<template>
  <div id="app">
    <HomeWork></HomeWork>
  </div>
</template>

<script>
import HomeWork from "./components/HomeWork.vue";

export default {
  name: "App",
  components: {
    HomeWork,
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
