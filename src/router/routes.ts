const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('views/home/Home.vue')
  },
  {
    path: '/category',
    component: () => import('views/category/Category.vue')
  },
  {
    path: '/shopcart',
    component: () => import('views/shopcart/ShopCart.vue')
  },
  {
    path: '/profile',
    component: () => import('views/profile/Profile.vue')
  },
  {
    path: '/detail/:id',
    component: () => import('views/detail/Detail.vue')
  },
  {
    path: '/setting',
    component: () => import('views/setting/Setting.vue')
  },
  {
    path: '/collect',
    component: () => import('views/profile/components/UserCollect.vue')
  },
  {
    path: '/order',
    component: () => import('views/profile/components/UserOrder.vue')
  }
]

export default routes;