import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/buttons',
    name: 'buttons',
    component: () => import('../components/Buttons'),
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('../components/Typography'),
  },
  {
    path: '/colors',
    name: 'colors',
    component: () => import('../views/Colors'),
  },
  {
    path: '/forms',
    name: 'forms',
    component: () => import('../views/Forms'),
  },
  {
    path: '/dialogs',
    name: 'dialogs',
    component: () => import('../views/Dialog'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

export {
  routes
}
