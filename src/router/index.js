import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "home",
    redirect: { name: "sign-in", },
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import("@/views/auth/sign-in.vue"),
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: () => import("@/views/auth/sign-up.vue"),
  },
  {
    path: "/board",
    name: "board-container",
    component: () => import("@/layouts/board.vue"),
    redirect: { name: "board-overview", },
    children: [
      {
        path: 'overview',
        name: 'board-overview',
        component: () => import("@/views/board/overview.vue"),
      },
      {
        path: 'links',
        name: 'board-links',
        component: () => import("@/views/board/links.vue"),
      },
      {
        path: 'notifications',
        name: 'board-notifications',
        component: () => import("@/views/board/notification.vue"),
      },
      {
        path: 'plan',
        name: 'board-plan',
        component: () => import("@/views/board/plan.vue"),
      },
      {
        path: 'settings',
        name: 'board-settings',
        component: () => import("@/views/board/settings.vue"),
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {x: 0, y: 0}
  }
});

export default router
