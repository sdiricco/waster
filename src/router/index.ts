import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import OverviewPage from '../views/OverviewPage.vue'
import TabsPage from '../views/TabsPage.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/overview'
  },
  {
    path: '/tabs',
    component: () => import('@/views/TabsPage.vue'),
    children: [
      {
        path: '',
        redirect: '/tabs/overview'
      },
      {
        path: 'overview',
        component: () => import('@/views/OverviewPage.vue')
      },
      {
        path: 'categories',
        component: () => import('@/views/CategoriesPage.vue')
      },
      {
        path: 'settings',
        component: () => import('@/views/SettingsPage.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
