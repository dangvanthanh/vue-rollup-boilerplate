import Vue from 'vue'
{{#router}}
import VueRouter from 'vue-router'
{{/router}}
import App from './App.vue'

{{#router}}
Vue.use(VueRouter)
{{/router}}

const app = new Vue({
  el: '#app',
  render: h => h(App)
})
