import Vue from 'vue'
import VueCompositionAPI, { createApp } from '@vue/composition-api'
import App from './App.vue'
import i18n from './i18n'
import './styles/app.css'

Vue.config.productionTip = false

Vue.use(VueCompositionAPI)

const app = createApp({
  render: (h) => h(App),
  i18n,
})

app.mount('#app')
