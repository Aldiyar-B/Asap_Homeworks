<template>
  <div>
    <label :for="id">{{ label }}</label>
    <select
      :id="id"
      :value="value"
      @change="$emit('input', $event.target.value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
    label: String,
    value: String,
    options: Array,
  },
};
</script>

<style scoped>
/* Ваши стили CSS здесь */
</style>
