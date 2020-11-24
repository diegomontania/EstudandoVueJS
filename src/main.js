import Vue from 'vue';
import App from './App.vue';

import VueResource from 'vue-resource';

// utilizando vue resource após importação
Vue.use(VueResource);

new Vue({
  el: '#app',
  render: h => h(App)
})
