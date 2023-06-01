import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const homePage = () => import('@/views/HomePage.vue')
const overviewPage = () => import('@/views/OverviewPage.vue')
const categoriesPage = () => import('@/views/CategoriesPage.vue')
const settingsPage = () => import('@/views/SettingsPage.vue')


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home/overview'
  },
  {
    path: '/home',
    component: homePage,
    children: [
      {
        path: '',
        redirect: '/home/overview'
      },
      {
        path: 'overview',
        component: overviewPage
      },
      {
        path: 'categories',
        component: categoriesPage
      },
      {
        path: 'settings',
        component: settingsPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
