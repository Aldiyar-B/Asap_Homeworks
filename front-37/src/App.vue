<template>
  <div class="form-container">
    <HeroForm v-model="leftFormData" @sync="syncLeftForm" />
    <HeroForm v-model="rightFormData" @sync="syncRightForm" />
  </div>
</template>

<script>
import HeroForm from "./components/HeroForm.vue";

export default {
  name: "App",
  components: { HeroForm },
  data() {
    return {
      leftFormData: {
        name: "",
        age: "",
        height: null,
        gender: "",
        // isMasterCharacter: false,
        race: "",
        class: "",
        talents: [],
        hairColor: "#000000",
        biography: "",
      },
      rightFormData: {
        name: "",
        age: "",
        height: null,
        gender: "",
        // isMasterCharacter: false,
        race: "",
        class: "",
        talents: [],
        hairColor: "#000000",
        biography: "",
      },
    };
  },
  methods: {
    syncLeftForm(data) {
      this.leftFormData = { ...data };
    },
    syncRightForm(data) {
      this.rightFormData = { ...data };
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.form-container {
  margin-top: 150px;
  display: flex;
  justify-content: space-around;
}
</style>
