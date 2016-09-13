<template>
  <div id="app">
    <img src="assets/images/logo.png">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to your Vue.js app!'
    }
  }
}
</script>

<style>
html {
  height: 100%:
}

body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    margin: 0;
}

#app {
    color: #444;
    margin-top: -100px;
    max-width: 600px;
    font-family: Helvetica, sans-serif;
    text-align: center;
}
</style>
