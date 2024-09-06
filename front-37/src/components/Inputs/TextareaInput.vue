<template>
  <div>
    <label :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    value: String,
  },
};
</script>

<style scoped>
/* Ваши стили CSS здесь */
</style>
