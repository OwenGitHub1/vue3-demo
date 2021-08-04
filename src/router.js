import { createWebHistory, createWebHashHistory, createRouter } from "vue-router";

const routes = [
  { path: '/', name: '首页' , component: () => import('#/home.vue') },
]

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes,
})

export { router };