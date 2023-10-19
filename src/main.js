import Vue from 'vue'
import App from './App.vue'
import i18n from './i18n'
import './styles/app.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
  i18n,
})
