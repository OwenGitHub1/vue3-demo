import { createWebHistory, createWebHashHistory, createRouter } from "vue-router";
import Home from '#/home.vue'

const routes = [
  // { path: '/', component: () => import('#/home') },
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHashHistory(), // hash 模式
  routes,
})

export { router };