import Vue from 'vue';
import ApolloClient from 'apollo-boost';
import VueApollo from 'vue-apollo';
import App from './App.vue';
import router from './router';

const apolloClient = new ApolloClient({
  // You should use an absolute URL here
  uri: 'http://stringshare.test/graphql',
  // fetchOptions: {
  //   mode: 'cors',
  // },
});

Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

Vue.config.productionTip = false;

new Vue({
  router,
  apolloProvider,
  render: h => h(App),
}).$mount('#app');
