<template>
  <div>
    <img src="assets/images/logo.png">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Vue.js - The Progressive JavaScript Framework'
    }
  }
}
</script>

<style scope>
h1 {
  padding: 0 .25em;
}
</style>
