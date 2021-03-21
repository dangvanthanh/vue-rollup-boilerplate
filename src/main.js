import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue'
import i18n from './i18n'
import './styles/app.css'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)

new Vue({
  i18n,
  render: (h) => h(App),
}).$mount('#app')
