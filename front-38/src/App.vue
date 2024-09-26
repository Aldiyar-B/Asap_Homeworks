<template>
  <div id="app">
    <header v-if="isAuthenticated">
      <router-link to="/posts">Посты </router-link>
      <button class="button-1" @click="logout">Выйти</button>
    </header>
    <!-- <header v-if="!isAuthenticated"> -->
    <header v-else>
      <router-link class="button-2" to="/login">Войти </router-link>
      <router-link class="button-3" to="/register"> Регистрация </router-link>
    </header>
    <!-- <router-link to="/posts"> </router-link> -->
    <main><router-view></router-view></main>
    <!-- <HomeWork></HomeWork> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

// import HomeWork from "./components/HomeWork.vue";

export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logout"]),
  },
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
header {
  display: flex;
  justify-content: right;
  gap: 50px;
  margin-right: 150px;
  align-items: center;
}
button {
  border: none;
  color: #2c3e50;
  cursor: pointer;
}
a {
  text-decoration: none;
}
/* CSS */

/* CSS */
button {
  appearance: none;
  background-color: #fafbfc;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0,
    rgba(255, 255, 255, 0.25) 0 1px 0 inset;
  box-sizing: border-box;
  color: #24292e;

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  padding: 6px 16px;
}

button:hover {
  background-color: #f3f4f6;
  text-decoration: none;
  transition-duration: 0.1s;
}

button:disabled {
  background-color: #fafbfc;
  border-color: rgba(27, 31, 35, 0.15);
  color: #959da5;
  cursor: default;
}

button:active {
  background-color: #edeff2;
  box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
  transition: none 0s;
}

button:focus {
  outline: 1px transparent;
}

button:before {
  display: none;
}

button:-webkit-details-marker {
  display: none;
}

.button-1 {
  background-color: #ea4c89;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  padding: 10px 16px;
  font-size: 15px;
}

.button-1:hover,
.button-1:focus {
  background-color: #cb3f74;
}

/* CSS */
.button-2 {
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  font-family: "Amazon Ember", sans-serif;
  font-size: 13px;
  line-height: 29px;
  padding: 0 10px 0 11px;
}

.button-2:hover {
  background-color: #f7fafa;
}

.button-2:focus {
  border-color: #008296;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  outline: 0;
}
/* CSS */
.button-3 {
  appearance: none;
  background-color: #2ea44f;
  border: 1px solid rgba(27, 31, 35, 0.15);
  border-radius: 6px;
  box-shadow: rgba(27, 31, 35, 0.1) 0 1px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  padding: 6px 16px;
}

.button-3:focus:not(:focus-visible):not(.focus-visible) {
  box-shadow: none;
  outline: none;
}

.button-3:hover {
  background-color: #2c974b;
}

.button-3:focus {
  box-shadow: rgba(46, 164, 79, 0.4) 0 0 0 3px;
  outline: none;
}

.button-3:disabled {
  background-color: #94d3a2;
  border-color: rgba(27, 31, 35, 0.1);
  color: rgba(255, 255, 255, 0.8);
  cursor: default;
}

.button-3:active {
  background-color: #298e46;
  box-shadow: rgba(20, 70, 32, 0.2) 0 1px 0 inset;
}
</style>
