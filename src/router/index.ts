import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    component: () => import("@/pages/home"),
    name: "home",
    path: "/",
  },
  {
    children: [
      {
        component: () => import("@/pages/restaurant-details"),
        name: "restaurant-details",
        path: ":restaurantId",
      },
    ],
    component: () => import("@/pages/restaurants"),
    name: "restaurants",
    path: "/restaurants",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router };
