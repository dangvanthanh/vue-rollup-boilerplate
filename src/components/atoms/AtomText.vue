<template>
  <p>{{ text }}</p>
</template>

<script setup>
defineProps({
  text: {
    type: String,
  },
})
</script>

<style scoped>
p {
  font-size: 1.25rem;
}
</style>

