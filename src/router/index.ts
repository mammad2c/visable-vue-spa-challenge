import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    component: () => import("@/pages/home"),
    name: "home",
    path: "/",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
