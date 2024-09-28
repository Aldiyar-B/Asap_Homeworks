<template>
  <div class="postList">
    <div class="top-part">
      <h1>Список названий постов</h1>
      <router-link v-if="isAuthenticated" to="/post/create">
        <button>Создать пост</button>
      </router-link>
    </div>
    <ul v-if="posts.length">
      <li v-for="post in posts" :key="post.id" class="post">
        <router-link :to="{ name: 'PostDetail', params: { id: post.id } }">
          {{ post.title }}
        </router-link>
        <router-link
          v-if="isAuthenticated"
          :to="{ name: 'EditForm', params: { id: post.id } }"
        >
          <button>Редактировать</button></router-link
        >
      </li>
    </ul>
    <p v-else>Загрузка...</p>
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters } from "vuex";
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
  computed: { ...mapGetters(["isAuthenticated"]) },
  methods: {
    async fetchPosts() {
      try {
        const response = await axios.get("http://vseverske.ru/blog/api/posts");
        let posts = response.data;
        // console.log("response", response.data.data);
        this.posts = posts.data;

        // console.log("response data", response.data);
        // console.log("this posts", this.posts);
      } catch (error) {
        console.error("Ошибка при загрузке постов:", error);
      }
    },
  },
};
</script>

<style scoped>
.top-part {
  display: flex;
  align-items: baseline;
  gap: 50px;
}
.postList {
  margin: 0 150px;
}
.post {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  transition: transform 0.8s;
}
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
