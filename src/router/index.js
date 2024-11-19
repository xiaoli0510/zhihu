import { createRouter, createWebHashHistory } from "vue-router";
import { moduleRoutes } from "./util.js";
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [],
});

const commonModuleRoute = [];
const existRoute = router.getRoutes();
for (let key in moduleRoutes) {
  //获取最后的名字并小写
  const pathArr = key.split("/");
  let componentName = pathArr.pop().split(".")[0];
  if (componentName === "index") componentName = pathArr.pop();
  componentName = componentName.toUpperCase();
  let pathName = componentName.toLocaleLowerCase();
  //url后带参数id的路由
  const idPath = ["profile", "novelDetail", "novelHome", "pay", "article"];
  idPath.includes(pathName) ? (pathName = pathName + "/:id") : "";
  //url后带参数keyWord的路由
  const keyWordPath = ['search'];
  keyWordPath.includes(pathName) ? (pathName = pathName + "/:keyWord?") : "";
  //如果有重复的，则跳过
  if (existRoute.includes(pathName)) continue;
  const routeInfo = {
      path: `/${pathName}`,
      name: componentName,
      component: moduleRoutes[key],
      props:
      pathName.indexOf('/:id') !== -1
              ? true
              : false,
  }
  //首页
  componentName === "HOME" ? (routeInfo.alias = "/") : "";
  commonModuleRoute.push({ ...routeInfo });
} 
commonModuleRoute.forEach((item) => {
  router.addRoute(item);
}); 

export default router;
