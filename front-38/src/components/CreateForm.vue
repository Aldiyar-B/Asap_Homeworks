<template>
  <div class="post-form">
    <h2>Создание поста</h2>
    <form @submit.prevent="submitPost">
      <div>
        <label for="title">Заголовок:</label>
        <input type="text" id="title" v-model="post.title" required />
      </div>
      <div>
        <label for="description">Описание:</label>
        <textarea
          id="description"
          v-model="post.description"
          required
        ></textarea>
      </div>
      <button type="submit" :disabled="!isValid">Создать пост</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      post: {
        title: "",
        description: "",
      },
      error: null,
    };
  },
  computed: {
    isValid() {
      // Проверяем, заполнены ли оба поля
      return this.post.title && this.post.description;
    },
  },
  methods: {
    ...mapActions(["createPost"]),
    async submitPost() {
      try {
        console.log("Отправляем данные поста:", this.post);
        await this.createPost(this.post);
        this.$router.push("/posts");
      } catch (error) {
        this.error = error.response
          ? error.response.data.message
          : "Ошибка при создании поста.";
      }
    },
  },
};
</script>

<style scoped>
.post-form {
  max-width: 600px;
  margin: 50px auto;
}
button {
  margin-top: 10px;
}
</style>
