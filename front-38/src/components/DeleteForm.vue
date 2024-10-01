<template>
  <div class="delete-form">
    <h2>Удалить пост</h2>
    <p>Вы уверены, что хотите удалить пост "{{ post.title }}"?</p>
    <button @click="confirmDelete">Удалить</button>
    <button @click="$emit('close')">Отмена</button>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      error: null,
    };
  },
  methods: {
    ...mapActions(["deletePost"]),
    async confirmDelete() {
      try {
        await this.deletePost(this.post.id);
        this.$emit("deleted"); // Сообщаем о том, что пост был удалён
        this.$emit("close"); // Закрываем форму
      } catch (error) {
        this.error = error.response
          ? error.response.data.message
          : "Ошибка при удалении поста.";
      }
    },
  },
};
</script>

<style scoped>
.delete-form {
  max-width: 400px;
  text-align: center;
  padding: 20px;
  position: absolute;
  top: 35%;
  left: 35%;
  background-color: whitesmoke;

  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}
button {
  margin-top: 10px;
}
</style>
