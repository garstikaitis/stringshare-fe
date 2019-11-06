import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import modules from './modules';

Vue.use(Vuex);

const STATE_BLACKLIST = ['streaming'];

const persistedState = new VuexPersistence({
  modules: Object.keys(modules).filter(mod => !STATE_BLACKLIST.includes(mod)),
}).plugin;

const store = new Vuex.Store({
  modules,
  plugins: [persistedState],
  strict: process.env.NODE_ENV !== 'production',
});

// Automatically run the `init` action for every module,
// if one exists.
// eslint-disable-next-line no-restricted-syntax
for (const moduleName of Object.keys(modules)) {
  if (modules[moduleName].actions && modules[moduleName].actions.init) {
    store.dispatch(`${moduleName}/init`);
  }
}

export default store;
