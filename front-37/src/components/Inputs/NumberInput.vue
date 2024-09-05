<template>
  <div>
    <label :for="id">{{ label }}</label>
    <input
      type="number"
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
    value: [String, Number],
  },
};
</script>

<style scoped>
/* Ваши стили CSS здесь */
</style>
