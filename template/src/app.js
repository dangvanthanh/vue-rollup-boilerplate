import Vue from 'vue'
import App from './components/App.vue'

window.Vue = Vue

const app = new Vue({
  el: 'body',
  components: { App }
})
