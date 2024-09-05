import Vue from "vue";
import App from "./App.vue";
// import store from "./store/index";
Vue.config.productionTip = false;

// Vue.mixin(authMixin);

// Vue.component("Asap");

new Vue({
  render: (h) => h(App),
}).$mount("#app");
