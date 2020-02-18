import Vue from 'vue';

import App from './App.vue';
import { autoRegister } from './helpers/component-ref';
import router from './router';

autoRegister(require.context('./components', true, /[A-Z]\w+\.vue$/));

new Vue({
  el: '#app',
  router,
  mounted() {
    // You'll need this for renderAfterDocumentEvent.
    document.dispatchEvent(new Event('render-event'));
  },
  render: h => h(App),
});
