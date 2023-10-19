<script setup>
defineProps({
  text: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <h1>{{ text }}</h1>
</template>

<style scoped>
h1 {
  padding: 0 0.25em;
  font-size: 1.875rem;
}
</style>
