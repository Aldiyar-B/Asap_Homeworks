import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

// Инициализация токена из localStorage при загрузке приложения
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default new Vuex.Store({
  state: {
    user: null, // Данные пользователя
    token: token || null, // Инициализация токена из localStorage
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_TOKEN(state, token) {
      state.token = token;
    },
    LOGOUT(state) {
      state.user = null;
      state.token = null;
    },
  },
  actions: {
    // Логин
    async login({ commit }, credentials) {
      try {
        const response = await axios.post(
          "http://vseverske.ru/blog/api/sign-in",
          credentials
        );
        console.log("Login response:", response.data); // Логируем ответ сервера

        const token = response.data.token; // Токен из ответа в response.data.token
        const user = response.data.data; // Данные пользователя в response.data.data

        // Сохраняем токен и данные пользователя в state
        commit("SET_TOKEN", token);
        commit("SET_USER", user);

        // Сохранение токена в localStorage
        localStorage.setItem("token", token);

        // Добавление токена в заголовки Axios
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      } catch (error) {
        if (error.response) {
          console.error(
            "Ошибка авторизации:",
            error.response.data.message || "Ошибка на сервере"
          );
        } else {
          console.error("Ошибка сети:", error.message);
        }
      }
    },
    // Регистрация
    async register({ commit }, userData) {
      try {
        const response = await axios.post(
          "http://vseverske.ru/blog/api/sign-up",
          userData
        );
        console.log("Register response:", response.data); // Логируем ответ сервера

        const token = response.token; // Проверяем наличие токена в response.data
        const user = response.data; // Проверяем данные пользователя в response.data.data

        // Проверяем, есть ли токен в ответе (если нет, пропустим шаг)
        if (token) {
          commit("SET_TOKEN", token);
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }

        // Сохраняем данные пользователя в state
        commit("SET_USER", user);
      } catch (error) {
        if (error.response) {
          // Логируем ошибки валидации или ошибки сервера
          console.error("Ошибка регистрации:", error.response.data);
          if (error.response.status === 422) {
            throw new Error(
              "Ошибка валидации: " + error.response.data.errors.join(", ")
            );
          } else {
            throw new Error(error.response.data.message || "Ошибка на сервере");
          }
        } else {
          console.error("Ошибка сети:", error.message);
          throw new Error("Ошибка сети. Проверьте соединение.");
        }
      }
    },
    // Логаут
    logout({ commit }) {
      commit("LOGOUT");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  getters: {
    isAuthenticated(state) {
      return !!state.token; // Проверяем, есть ли токен
    },
    getUser(state) {
      return state.user; // Возвращаем данные пользователя
    },
  },
});
