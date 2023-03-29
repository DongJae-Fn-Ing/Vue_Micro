import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../pages/Main.vue";
import ChartPage from "../pages/ChartPage.vue";
import BoardPage from "../pages/BoardPage.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/chart",
    component: ChartPage,
  },
  {
    path: "/board",
    component: BoardPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
