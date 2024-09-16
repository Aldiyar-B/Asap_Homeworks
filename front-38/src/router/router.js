import Vue from "vue";
import Router from "vue-router";
// import PostDetail from "@/components/PostDetail.vue";
// import PostList from "@/components/ItemList.vue";
import ItemList from "@/components/ItemList.vue";
import ItemDetail from "@/components/ItemDetail.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/items", name: "ItemList", component: ItemList },
    {
      path: "/item/:id",
      name: "ItemDetail",
      component: ItemDetail,
      props: true,
    }, // props: true для передачи id в виде пропса
    { path: "*", redirect: "/items" },
  ],
});
