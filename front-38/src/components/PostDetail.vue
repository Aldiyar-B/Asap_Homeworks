<template>
  <div>
    <router-link to="/posts">Назад </router-link>
    <div class="postDetail" v-if="post">
      <h3>{{ post.title }}</h3>
      <p>{{ post.description }}</p>
    </div>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "PostDetail",
  props: ["id"],
  data() {
    return {
      post: null,
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.get(
          `http://vseverske.ru/blog/api/post/${this.id}`
        );
        this.post = response.data.data; // Обращаемся к нужным данным
        console.log("post !!!!", this.post);
      } catch (error) {
        console.error("Ошибка при загрузке поста:", error);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
}
</style>
