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
    value: Array, // Ожидаем массив выбранных значений (talents)
    talent: String, // Это значение таланта (например, "swordsmanship")
  },
  computed: {
    // Определяем, отмечен ли чекбокс
    isChecked() {
      return this.value.includes(this.talent);
    },
  },
  methods: {
    toggle() {
      let newValue = [...this.value];

      // Если талант уже есть в списке, удаляем его, иначе добавляем
      if (newValue.includes(this.talent)) {
        newValue = newValue.filter((item) => item !== this.talent);
      } else {
        newValue.push(this.talent);
      }

      // Эмитируем обновленный список талантов
      this.$emit("input", newValue);
    },
  },
};
</script>

<style scoped>
/* Ваши стили CSS здесь */
</style>
