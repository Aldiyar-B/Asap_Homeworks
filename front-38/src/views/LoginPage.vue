<template>
  <div class="login">
    <h2>Авторизация</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Пароль:</label>
        <input type="password" v-model="password" required />
      </div>
      <button type="submit" :disabled="!isFormValid">Войти</button>
    </form>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "LoginPage", // Изменено имя компонента
  data() {
    return {
      email: "",
      password: "",
      error: null,
    };
  },
  computed: {
    isFormValid() {
      return this.email && this.password;
    },
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch("login", {
          email: this.email,
          password: this.password,
        });
        this.$router.push("/posts"); // Перенаправление после успешного входа
      } catch (error) {
        this.error = "Ошибка авторизации. Проверьте данные и попробуйте снова.";
      }
    },
  },
};
</script>

<style scoped>
.login {
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
