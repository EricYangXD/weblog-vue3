import {
  createRouter,
  // createWebHistory,
  createWebHashHistory,
} from 'vue-router'
import Frontend from '@/pages/frontend/index.vue'
import Admin from '@/pages/admin/index.vue'
import Login from '@/pages/admin/login.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'frontend',
      component: Frontend,
      meta: {
        title: 'Weblog 首页',
      },
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        title: 'Weblog 登录页',
      },
    },
  ],
})

export default router
