import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/home/index.vue";//tab-首页
import DiscoverView from "../views/discover/index.vue";//tab-发现页
import AddView from "../views/add/index.vue";//tab-创造页
import HotView from "../views/hot/index.vue";//tab-热点页
import CenterView from "../views/center/index.vue";//tab-个人中心页
import Topic from "../views/home/topic.vue";//首页-想法-主题页
import Profile from "../views/home/profile.vue";//首页-想法-个人页
import Detail from "../views/home/detail.vue";//首页-想法-详情页
import Search from "../views/home/search.vue";//搜索页
import Result from "../views/home/result.vue";//搜索结果页
import Report from "../views/home/report.vue";//举报页
import NovelDetail from "../views/home/novelDetail.vue";//小说详情页
import Test from "../views/home/test.vue";//小说详情页
import VipWelfare from "../views/center/vipWelfare.vue";//专属会员福利

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
      path: "/profile/:id",
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
    {
      path: "/result/:keyWord",
      name: "result",
      component: Result,
      props:true,
      meta:{
        keepAlive:true//需要缓存
      }
    },
    {
      path: "/report",
      name: "report",
      component: Report,
      props:true,
    },
    {
      path: "/novel/detail/:id",
      name: "novelDetail",
      component: NovelDetail,
      props:true,
      meta:{
        keepAlive:true//需要缓存
      }
    }, 
     {
      path: "/vipWelfare",
      name: "vipWelfare",
      component: VipWelfare,
    },
     {
      path: "/test",
      name: "test",
      component: Test,
    },
  ],
});

export default router;
