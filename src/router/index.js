import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import FeaturesPage from "../views/FeaturesPage.vue";
import SupportPage from "../views/SupportPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/features",
    name: "features",
    component: FeaturesPage,
  },
  {
    path: "/support",
    name: "support",
    component: SupportPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
