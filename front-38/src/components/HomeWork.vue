<template>
  <div class="homework">
    <h1>Список названий постов</h1>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        {{ post.id }}) {{ post.title }}
      </li>
    </ul>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeWork",
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://vseverske.ru/blog/api/posts");
        let posts = response.data;
        console.log("response", response.data.data);
        this.posts = posts.data;

        console.log("response data", response.data);
        console.log("this posts", this.posts);
      } catch (error) {
        console.error("Ошибка при загрузке постов:", error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
li {
  display: block;
  margin-bottom: 15px;
  text-align: left;
}
a {
  color: #42b983;
}
</style>
