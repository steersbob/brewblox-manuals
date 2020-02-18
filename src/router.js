import Vue from 'vue';
import VueRouter from 'vue-router';

import PageIndex from './components/PageIndex.vue';
import pages from './pages/__menu';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: PageIndex },
  ...pages,
];

const router = new VueRouter({
  routes,
  mode: 'history',
});

export default router;
