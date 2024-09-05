<template>
  <div>
    <input
      type="checkbox"
      :id="id"
      :checked="checked"
      @change="$emit('change', $event)"
    />
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    checked: Boolean,
  },
};
</script>

<style scoped>
/* Ваши стили CSS здесь */
</style>
