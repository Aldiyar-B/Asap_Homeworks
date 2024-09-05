<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      type="date"
      :id="id"
      :value="value"
      @input="$emit('update:value', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    value: String, // Даты обычно передаются в виде строки в формате 'yyyy-mm-dd'
  },
};
</script>

<style scoped>
/* Ваши стили CSS здесь */
</style>
