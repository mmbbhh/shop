import Router from 'vue-router'
import Vue from 'vue'
import routes from "./routes";
import {clearRequest} from "@/service/config";

Vue.use(Router)

const router = new Router({
  routes
})

router.beforeEach((to, from, next) => {
  //跳转路由前清空请求
  clearRequest()
  next()
})

export default router