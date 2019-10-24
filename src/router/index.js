import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('pages/home/home')
  },
  {
    path: '/category',
    component: () => import('pages/category/category')
  },
  {
    path: '/shopcart',
    component: () => import('pages/shopcart/shopcart')
  },
  {
    path: '/profile',
    component: () => import('pages/profile/profile')
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router