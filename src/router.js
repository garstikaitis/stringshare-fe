import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import store from '@/vuex/store';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/dashboard',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/Login.vue'),
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      meta: {
        requiresUserToBeLoggedIn: true,
      },
    },
    {
      path: '/bands',
      name: 'bands',
      component: () => import(/* webpackChunkName: "bands" */ '@/views/Bands.vue'),
      meta: {
        requiresUserToBeLoggedIn: true,
      },
      // children: [],
    },
    {
      path: '/bands/:slug',
      name: 'band',
      component: () => import(/* webpackChunkName: "band" */ '@/views/Band.vue'),
      meta: {
        requiresUserToBeLoggedIn: true,
      },
    },
    {
      path: '/venues',
      name: 'venues',
      component: () => import(/* webpackChunkName: "venues" */ '@/views/Venues.vue'),
      meta: {
        requiresUserToBeLoggedIn: true,
      },
    },
    {
      path: '/proposals',
      name: 'proposals',
      component: () => import(/* webpackChunkName: "proposals" */ '@/views/Proposals.vue'),
      meta: {
        requiresUserToBeLoggedIn: true,
      },
    },
  ],
});

router.beforeResolve((routeTo, routeFrom, next) => {
  const requiresUserToBeLoggedIn = routeTo.matched.some(
    record => record.meta.requiresUserToBeLoggedIn,
  );

  const userIsLoggedIn = store.getters['auth/userIsLoggedIn'];

  if (requiresUserToBeLoggedIn && !userIsLoggedIn) {
    next({ name: 'login' });
  } else if (routeTo.name === 'login' && userIsLoggedIn) {
    next({ name: 'dashboard' });
  } else {
    next();
  }
});

export default router;
