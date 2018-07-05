/* eslint-disable */
import Vue from 'vue';

Vue.config.productionTip = false;

import App from './infoone.vue';
new Vue({
  el: '#infoone',
  template: '<App/>',
  components: { App: App }
})