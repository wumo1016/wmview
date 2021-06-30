import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import Layout from '@v/layout/index.vue'
import Home from '@v/home/index.vue'
import navConfig from './config.json'

const registerRoute = () => {
  const LoadingComponent = {
    template: `<div style="min-height: 500px; width: 100%;">loading...</div>`,
  }
  const ErrorComponent = {
    template: `
      <div style="text-align: center;padding: 100px 0;">Loading error. Please refresh the page and try again</div>`,
  }

  const getAsyncComponent = path => {
    return defineAsyncComponent({
      loader: () => import(`@v/components${path}`),
      delay: 0,
      timeout: 30000,
      loadingComponent: LoadingComponent,
      errorComponent: ErrorComponent,
    })
  }

  const routes = []
  navConfig.forEach(item => {
    routes.push({
      path: item.path,
      component: getAsyncComponent(item.path),
      meta: {
        title: item.title
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
    }
  ]
})

export default router
