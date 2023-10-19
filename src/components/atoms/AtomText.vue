<script setup>
defineProps({
  text: {
    type: String,
  },
})
</script>

<template>
  <p>{{ text }}</p>
</template>

<style scoped>
p {
  font-size: 1.25rem;
}
</style>
