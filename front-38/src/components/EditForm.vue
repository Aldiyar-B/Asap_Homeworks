<template>
  <div class="post-form">
    <router-link to="/posts">Назад </router-link>
    <h2>Редактирование поста</h2>
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
      <button type="submit" :disabled="!isValid">Сохранить изменения</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["id"], // id передается как пропс при редактировании
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
      return this.post.title && this.post.description;
    },
  },
  methods: {
    // mapActions - хелпер,привязка методов к екшионам
    ...mapActions(["editPost", "getPost"]),
    async submitPost() {
      try {
        // Редактирование поста
        await this.editPost({ ...this.post, id: this.id });
        this.$router.push("/posts"); // После сохранения перенаправляем на список постов
      } catch (error) {
        this.error = "Ошибка при сохранении поста.";
      }
    },
  },
  async created() {
    try {
      // Получаем пост по id
      const post = await this.getPost(this.id);
      this.post = post; // Загружаем данные поста в форму
    } catch (error) {
      this.error = "Ошибка при загрузке поста.";
    }
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
