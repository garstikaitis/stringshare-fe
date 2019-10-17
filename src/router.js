import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
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
    },
    {
      path: '/bands',
      name: 'bands',
      component: () => import(/* webpackChunkName: "bands" */ '@/views/Bands.vue'),
      // children: [],
    },
    {
      path: '/bands/:id',
      name: 'band',
      component: () => import(/* webpackChunkName: "band" */ '@/views/Band.vue'),
    },
    {
      path: '/venues',
      name: 'venues',
      component: () => import(/* webpackChunkName: "venues" */ '@/views/Venues.vue'),
    },
    {
      path: '/proposals',
      name: 'proposals',
      component: () => import(/* webpackChunkName: "proposals" */ '@/views/Proposals.vue'),
    },
  ],
});
