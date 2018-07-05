/* eslint-disable */
import Vue from 'vue';

Vue.config.productionTip = false;

import InfoTwo from './infotwo.vue';
new Vue({
  el: '#infotwo',
  template: '<InfoTwo/>',
  components: { InfoTwo: InfoTwo }
})