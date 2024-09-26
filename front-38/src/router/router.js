import Vue from "vue";
import Router from "vue-router";
import PostDetail from "@/components/PostDetail.vue";
import PostList from "@/components/PostList.vue";
import LoginPage from "@/views/LoginPage.vue";
import RegisterPage from "@/views/RegisterPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/posts", name: "PostList", component: PostList },
    {
      path: "/post/:id",
      name: "PostDetail",
      component: PostDetail,
      props: true, // Пропсы будут переданы как параметры
    },
    { path: "*", redirect: "/posts" },
    {
      path: "/login",
      name: "LoginPage",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "RegisterPage",
      component: RegisterPage,
    },
  ],
});
