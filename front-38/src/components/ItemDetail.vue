<template>
  <div>
    <nav><router-link to="/items">Товары </router-link></nav>

    <div class="itemContainer" v-if="item">
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
      <h4>price: {{ item.price }}$</h4>
      <h4>rating: {{ item.rating.rate }}</h4>
      <img :src="item.image" :id="item.id" />
    </div>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ItemDetail",
  props: ["id"],
  data() {
    return {
      item: null,
    };
  },
  created() {
    this.fetchPost();
  },
  methods: {
    async fetchPost() {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${this.id}`
        );
        this.item = response.data; // Обращаемся к нужным данным
        console.log("item !!!!", this.item);
      } catch (error) {
        console.error("Ошибка при загрузке товара:", error);
      }
    },
  },
};
</script>

<style scoped>
.itemContainer {
  max-width: 400px; /* Максимальная ширина карточки */
  margin: 20px auto; /* Отцентрировать карточку */
  padding: 20px; /* Внутренний отступ */
  background-color: #f9f9f9; /* Светлый фон */
  border-radius: 10px; /* Скругленные углы */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Тень для объема */
  transition: transform 0.3s, box-shadow 0.3s; /* Плавный переход для эффектов */
}

/* Эффект при наведении */
.itemContainer:hover {
  transform: translateY(-10px); /* Поднять карточку */
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Увеличить тень */
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
  color: #333;
}

h4 {
  font-size: 1.2rem;
  color: #555;
}

p {
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
}
img {
  width: 50%; /* Ширина изображения относительно родителя */
  height: auto; /* Автоматическая высота для сохранения пропорций */
  max-width: 150px; /* Максимальная ширина */
  object-fit: contain; /* Сохранение пропорций */
}
nav {
  text-align: center;
  margin-bottom: 20px;
}

a {
  text-decoration: none;
  color: #42b983;
  font-weight: bold;
  font-size: 1.2rem;
}
</style>
