<template>
  <div>
    <input type="checkbox" :id="id" :checked="isChecked" @change="toggle" />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    value: Array,
    talent: String,
  },
  computed: {
    isChecked() {
      return this.value.includes(this.talent);
    },
  },
  methods: {
    toggle() {
      let newValue = [...this.value];
      console.log("newValue :", newValue);
      console.log("this.talent :", this.talent);
      if (newValue.includes(this.talent)) {
        // Если талант уже есть в списке (пользователь снимает галочку), удаляем его
        newValue = newValue.filter((item) => item !== this.talent);
      } else {
        // Если таланта нет в списке (пользователь ставит галочку), добавляем его
        newValue.push(this.talent);
      }

      this.$emit("input", newValue);
    },
  },
};
</script>

<style scoped>
/* Ваши стили CSS здесь */
</style>
