import { createWebHistory, createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', name: '首页' , component: () => import('#/home.vue') },
  // 请确保此规则一直为最后放置，因路由判断为顺序检测
  {
    path: '*',
    name: '404',
    meta: {
      requiresAuth: true,
    },
    component: () => import('@/pages/404'),
  },
]

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes,
})

export { router };