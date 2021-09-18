import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Generator from '../views/Generator.vue'
import Roadmap from '../views/Roadmap.vue'
import Team from '../views/Team.vue'
import Wtf from '../views/Wtf.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/roadmap',
    name: 'Roadmap',
    component: Roadmap
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/wtf',
    name: 'Wtf',
    component: Wtf
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
