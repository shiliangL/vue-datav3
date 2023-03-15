import { createRouter, createWebHistory } from 'vue-router'
const Login = () => import('../views/system/login.vue')
const Personal = () => import('../views/system/personal.vue')

const routes = [
  { path: '/', name: 'login', component: Login },
  { path: '/home', name: 'home', component: Home },
  { path: '/personal', name: 'personal', component: Personal }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
