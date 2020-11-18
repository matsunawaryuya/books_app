import Vue from 'vue';
import VueRouter from 'vue-router';

import Login from './pages/Login';
import Index from './pages/Index';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Login },
  { path: '/index', component: Index }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router;