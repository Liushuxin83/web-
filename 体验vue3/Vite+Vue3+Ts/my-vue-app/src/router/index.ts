import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 用来扩展 routes中的属性
export type AddRouterRecordRaw = RouteRecordRaw & {
  hidden?: boolean
}

createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      component: () =>
        import('../components/CompositionChild/CompositionChild.vue'),
      hidden: true
    }
  ] as AddRouterRecordRaw[]
})
