import { createRouter, createWebHistory } from 'vue-router'
import LoginViewVue from '@/views/LoginView.vue'
import TimeTrackViewVue from '@/views/TimeTrackView.vue'
import TicketManagementViewVue from '@/views/TicketManagementView.vue'
import ErrorView from '@/views/ErrorView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: LoginViewVue,
      meta: { title: '登入' }
    },
    {
      path: '/TimeTrack',
      name: 'TimeTrack',
      component: TimeTrackViewVue,
      meta: { title: '簽到' }
    },
    {
      path: '/TicketManagement',
      name: 'TicketManagement',
      component: TicketManagementViewVue,
      meta: { title: '派工/完工' }
    },
    {
      path: '/:catchAll(.*)',
      name: 'ErrorView',
      component: ErrorView,
    }
  ]
})

export default router
