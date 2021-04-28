import { createRouter, createWebHistory } from 'vue-router'
const Film = () => import('../views/Film.vue')
const Cinema = () => import('../views/Cinema.vue')
const Center = () => import('../views/Center.vue')
const Detail = () => import('../views/Detail.vue')
const routes = [
  {
    path: '/',
    redirect: '/film'
  },
  // 匹配所有路由
  {
    path: '/:catchAll(.*)',
    redirect: '/film'
  },
  {
    path: '/film',
    // name: 'film',
    component: Film
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.path === '/center') {
    console.log('拦截')
    next('/film')
  } else {
    next()
  }
})
export default router
