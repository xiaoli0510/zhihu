import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home/index.vue";
import DiscoverView from "../views/discover/index.vue";
import AddView from "../views/add/index.vue";
import HotView from "../views/hot/index.vue";
import CenterView from "../views/center/index.vue";
import IdeaDetail from "../views/home/ideaDetail.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/discover",
      name: "discover",
      component: DiscoverView,
    },
    {
      path: "/add",
      name: "add",
      component: AddView,
    },
    {
      path: "/hot",
      name: "hot",
      component: HotView,
    },
    {
      path: "/center",
      name: "center",
      component: CenterView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/idea",
      name: "idea",
      component: IdeaDetail,
    },
  ],
});

export default router;
