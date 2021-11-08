import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Main from '../page/Main.vue';
import Scene from '../page/Scene.vue';
import Project from '../page/Project.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/scene/:projectId/:id',
    name: 'Scene',
    component: Scene,
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: Project,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
