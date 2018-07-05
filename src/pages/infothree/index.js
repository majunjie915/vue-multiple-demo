/* eslint-disable */
import Vue from 'vue';

Vue.config.productionTip = false;

import InfoThree from './infothree.vue';
new Vue({
  el: '#infothree',
  template: '<InfoThree/>',
  components: { InfoThree: InfoThree }
})