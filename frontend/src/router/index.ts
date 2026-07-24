import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import LessonDetailPage from '../pages/LessonDetailPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import LoginPage from '../pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/lesson/:id',
      name: 'lesson-detail',
      component: LessonDetailPage
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
      meta: {
      hideFooter: true, // หรือ hideHeaderFooter: true
    }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardPage
    }
  ]
})

export default router