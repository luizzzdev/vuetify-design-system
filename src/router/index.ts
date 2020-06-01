import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/buttons',
    name: 'buttons',
    component: () => import('../components/Buttons.vue'),
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('../components/Typography.vue'),
  },
  {
    path: '/colors',
    name: 'colors',
    component: () => import('../views/Colors.vue'),
  },
  {
    path: '/forms',
    name: 'forms',
    component: () => import('../views/Forms.vue'),
  },
  {
    path: '/dialogs',
    name: 'dialogs',
    component: () => import('../views/Dialog.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

export {
  routes
}
