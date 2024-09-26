<template>
  <div class="register">
    <h2>Регистрация</h2>
    <form @submit.prevent="register">
      <div>
        <label for="name">Имя:</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit" :disabled="!isFormValid">Зарегистрироваться</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: null,
    };
  },
  computed: {
    isFormValid() {
      return this.name && this.email && this.password;
    },
  },
  methods: {
    async register() {
      try {
        // Используем this.$store.dispatch для вызова экшена в Vuex
        await this.$store.dispatch("register", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        this.$router.push("/posts"); // Перенаправление после успешной регистрации
      } catch (error) {
        if (error.response) {
          console.error("Ошибка регистрации:", error.response.data);
          this.error = error.response.data.message || "Ошибка на сервере";
        } else {
          console.error("Ошибка сети:", error.message);
          this.error = "Ошибка сети. Проверьте соединение.";
        }
      }
    },
  },
};
</script>

<style scoped>
.register {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
}
button {
  margin-top: 10px;
}
</style>
