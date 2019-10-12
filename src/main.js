import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './vuex/store';
import './components';
import './plugins/element.js'

Vue.config.productionTip = false;

axios.defaults.baseURL = process.env.VUE_APP_API_URL;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
