import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import Layout from '@v/layout/index.vue'
import Home from '@v/home/index.vue'
import navConfig from './config.json'

const registerRoute = () => {
  const routes = []
  navConfig.forEach(item => {
    const { path, title } = item
    routes.push({
      path: `/component${path}`,
      component: () => import(`@v/components${path}`),
      meta: {
        title
      }
    })
  })
  return routes
}

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
      children: [
        ...registerRoute()
      ]
    },
    {
      path: '/component',
      redirect: '/component/icon'
    }
  ]
})

export default router
