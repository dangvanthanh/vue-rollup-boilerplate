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

<style>
body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
}

#app {
    color: #444;
    margin-top: 100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
}

h1 {
  padding: 0 .25em;
}
</style>
