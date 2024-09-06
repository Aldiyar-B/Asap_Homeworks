<template>
  <div class="form-container">
    <HeroForm :formData="leftFormData" @sync="syncLeftForm" />
    <HeroForm :formData="rightFormData" @sync="syncRightForm" />
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
      console.log("Данные из левой формы:", data);
      this.rightFormData = { ...data };
      console.log("Данные теперь из правой формы", this.rightFormData);
    },
    syncRightForm(data) {
      console.log("Данные из правой формы:", data);
      this.leftFormData = { ...data };
      console.log("Данные теперь из левой формы", this.leftFormData);
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
