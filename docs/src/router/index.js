import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@v/layout/index.vue'
import Home from '@v/home/index.vue'

require.context('../views/components', true, /index\.(vue|js)$/iu).keys().map(path => {
  console.log(path);
})

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
