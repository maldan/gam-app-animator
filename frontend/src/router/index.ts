import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Main from '../page/Main.vue';
import Workspace from '../page/Workspace.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/workspace/:id',
    name: 'Workspace',
    component: Workspace,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
