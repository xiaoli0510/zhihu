import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home/index.vue";
import DiscoverView from "../views/discover/index.vue";
import AddView from "../views/add/index.vue";
import HotView from "../views/hot/index.vue";
import CenterView from "../views/center/index.vue";
import Topic from "../views/home/topic.vue";
import Profile from "../views/home/profile.vue";
import Detail from "../views/home/detail.vue";
import Search from "../views/home/search.vue";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      alias:'/',
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
      path: "/topic",
      name: "topic",
      component: Topic,
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
  ],
});

export default router;
