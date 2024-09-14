import Vue from "vue";
import Router from "vue-router";
import PostDetail from "@/components/PostDetail.vue";
import PostList from "@/components/PostList.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/posts", name: "PostList", component: PostList },
    {
      path: "/post/:id",
      name: "PostDetail",
      component: PostDetail,
      props: true,
    }, // props: true для передачи id в виде пропса
    { path: "*", redirect: "/posts" },
  ],
});
