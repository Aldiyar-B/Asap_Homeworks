<template>
  <div class="itemsList">
    <h1>Список названий товаров</h1>
    <ul v-if="items.length">
      <li v-for="item in items" :key="item.id">
        <router-link :to="{ name: 'ItemDetail', params: { id: item.id } }">
          {{ item.id }})
          {{ item.title }}
          <br />
          <br />
        </router-link>
      </li>
    </ul>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ItemList",
  data() {
    return {
      items: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        let items = response.data;
        console.log("items 1", response);
        console.log("items 2", response.data);
        this.items = items;

        // console.log("response data", response.data);
        // console.log("this posts", this.posts);
      } catch (error) {
        console.error("Ошибка при загрузке товаров:", error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
  font-size: 20px;
}
a {
  color: #42b983;
}
</style>
