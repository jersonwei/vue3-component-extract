import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Container from '../components/container/src/index.vue'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    alias: '/home',
    component: Container,
    children: [
      {
        path: "/",
        component: Home
      },
      {
        path: "/chooseIcon",
        component: () => import('@/views/chooseIcon/index.vue')
      },
      {
        path: "/chooseArea",
        component: () => import('@/views/chooseArea/index.vue')
      },
      {
        path: "/chooseStreet",
        component: () => import('@/views/chooseStreet/index.vue')
      },
      {
        path: "/cascaderStreet",
        component: () => import('@/views/cascaderStreet/index.vue')
      },
      {
        path: "/trend",
        component: () => import('@/views/trend/index.vue')
      },
      {
        path: "/notification",
        component: () => import('@/views/notification/index.vue')
      }
    ]
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router