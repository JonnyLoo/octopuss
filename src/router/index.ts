import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Generator from '../views/Generator.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/generator',
    name: 'Generator',
    component: Generator
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
