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
  },
  {
    path: '/detail/:id',
    component: () => import('pages/detail/detail')
  },
  {
    path: '/emptyPage',
    component: () => import('components/reuse/emptyPage/emptyPage')
  },
  {
    path: '/setting',
    component: () => import('pages/setting/setting')
  },
  {
    path: '/collect',
    component: () => import('pages/profile/etc/user_collect')
  },
  {
    path: '/order',
    component: () => import('pages/profile/etc/user_order')
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router