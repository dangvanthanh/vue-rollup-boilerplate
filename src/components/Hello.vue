<template>
  <div>
    <img src="assets/logo.png" />
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data() {
    return {
      msg: 'Vue.js - The Progressive JavaScript Framework',
    }
  },
}
</script>

<style scoped>
h1 {
  padding: 0 0.25em;
}
</style>
