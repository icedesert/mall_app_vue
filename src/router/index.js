import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/home/home')
  },
  {
    path: '/discover',
    component: () => import('../views/discover/discover')
  },
  {
    path: '/cart',
    component: () => import('../views/cart/cart')
  },
  {
    path: '/mine',
    component: () => import('../views/profile/profile')
  },
  {
    path: '/goods/huawei',
    component: () => import('../components/goods/huawei'),
    meta: {
      cartIsShow: true,
      goBackShow: true
    }
  },
  {
    path: '/login',
    component: () => import('../views/login/login')
  }
]

const router = new VueRouter({
  mode: 'history',
  /** 解决页面默认跳转到最底部： */
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'mui-active'
})

export default router
