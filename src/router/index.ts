import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    component: () => import("@/pages/home"),
    name: "home",
    path: "/",
  },
  {
    component: () => import("@/pages/restaurants"),
    name: "restaurants",
    path: "/restaurants",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
