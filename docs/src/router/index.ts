import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@v/layout/index.vue'
import Home from '@v/home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '',
      component: Home,
    },
    {
      path: '',
      component: Layout,
      children: []
    }
  ]
})

export default router
