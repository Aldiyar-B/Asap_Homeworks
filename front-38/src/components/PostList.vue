<template>
  <div class="postList">
    <h1>Список названий постов</h1>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
      </li>
    </ul>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "PostList",
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
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>
