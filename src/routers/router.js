import { createWebHistory, createRouter } from "vue-router";
import MainPage from "../pages/Main.vue";
import MainDetail from "../pages/MainDetail.vue";
import ChartPage from "../pages/ChartPage.vue";
import BoardPage from "../pages/BoardPage.vue";
import boardDetail from "../pages/BoardDetail.vue";
import CrudPage from "@/pages/CrudPage.vue";
import Login from "@/pages/login.vue";

const routes = [
  {
    path: "/",
    component: MainPage,
  },
  {
    path: "/mainDetail/:id",
    component: MainDetail,
  },
  {
    path: "/chart",
    component: ChartPage,
  },
  {
    path: "/board",
    component: BoardPage,
  },
  {
    path: "/boardDetail/:id",
    component: boardDetail,
  },
  {
    path: "/crud",
    component: CrudPage,
  },
  {
    path: "/login",
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
