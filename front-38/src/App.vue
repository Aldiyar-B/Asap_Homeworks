<template>
  <div id="app">
    <header>
      <nav><router-link to="/items"> </router-link></nav>
    </header>
    <main><router-view></router-view></main>
    <!-- <HomeWork></HomeWork> -->
  </div>
</template>

<script>
// import HomeWork from "./components/HomeWork.vue";

export default {
  name: "App",
  components: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  text-decoration: none;
}
a:hover {
  color: #2c3e50;
}
</style>
