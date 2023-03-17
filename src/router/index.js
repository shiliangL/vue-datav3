import AutoRouter from './autoRouter'
import { createRouter, createWebHistory } from 'vue-router'
console.log(AutoRouter, 'AutoRouter')

const Layout = () =>
  import('@/views/layout/index.vue')

const routes = [
  // redirect: { name: 'homepage' }
  { path: '/', redirect: '/dashboard' },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'dashboard',
      meta: { title: 'dashboard', hideTabs: false },
      component: () =>
        import('@/views/dashboard/index.vue')
    }]
  },
  {
    path: '/component',
    component: Layout,
    redirect: '/component/chart',
    children: [{
      path: 'chart',
      name: 'chart',
      meta: { title: 'chart', hideTabs: false },
      component: () =>
        import('@/views/component/chart/index.vue')
    },
    {
      path: 'datav',
      name: 'datav',
      meta: { title: 'datav', hideTabs: false },
      component: () =>
        import('@/views/component/datav/index.vue')
    }
    ]
  },
  // TODO: 自动装载的路由
  AutoRouter,
  {
    path: '/login',
    name: 'login',
    meta: { title: 'login', hideTabs: false },
    component: () =>
      import('@/views/system/login.vue')
  },
  {
    path: '/404',
    name: '404',
    meta: { title: '404', hideTabs: false },
    component: () =>
      import('@/views/system/404.vue')
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
