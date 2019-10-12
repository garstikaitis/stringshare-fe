import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './vuex/store';

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const files = require.context('./', true, /\.vue$/i);
files.keys().map(key => Vue.component(
  key
    .split('/')
    .pop()
    .split('.')[0],
  files(key).default,
));

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
