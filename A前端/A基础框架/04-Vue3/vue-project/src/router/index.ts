import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/index.vue')
  },
  {
    path:'/toRaw',
    name:'toRaw',
    component:()=>import('@/pages/01-toRaw和markRaw的使用/index.vue')
  },
  {
    path:'/toRefs',
    name:'toRefs',
    component:()=>import('@/pages/02-toRefs的使用/index.vue')
  },
  {
    path:'/customRef',
    name:'customRef',
    component:()=>import('@/pages/03-★customRef的使用/index.vue')
  },
  {
    path:'/exampleAPI',
    name:'exampleAPI',
    component:()=>import('@/pages/04-★手写组合API/index.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
