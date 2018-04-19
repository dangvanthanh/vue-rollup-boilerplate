import Vue from 'vue';
{{#router}}
import VueRouter from 'vue-router';
{{/router}}
import App from './App.vue';

Vue.config.productionTip = false;

{{#router}}
Vue.use(VueRouter);
{{/router}}

const app = new Vue({
  render: h => h(App)
}).$mount('#app');
