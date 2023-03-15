import { createRouter, createWebHistory } from 'vue-router'

const Login = () =>
  import('@/views/system/login.vue')
const Personal = () =>
  import('@/views/system/personal.vue')

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
      component: () =>
        import('@/views/component/chart/index.vue')
    },
    {
      path: 'datav',
      name: 'datav',
      component: () =>
        import('@/views/component/datav/index.vue')
    }
    ]
  },
  { path: '/login', name: 'login', component: Login },
  { path: '/personal', name: 'personal', component: Personal },
  {
    path: '/404',
    name: '404',
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
