import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import Home from '@/views/HomePage.vue';
import Error from '@/views/ErrorPage.vue';

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fruit/:id',
    name: 'Fruit',
    component: () => import(/* webpackChunkName: "fruit-detail" */ '../views/FruitPage.vue')
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  await store.restored;
  next();
});

export default router
