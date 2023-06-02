import { createRouter, createWebHashHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const homePage = () => import('@/views/HomePage.vue')
const overviewPage = () => import('@/views/OverviewPage.vue')
const categoriesPage = () => import('@/views/CategoriesPage.vue')
const settingsPage = () => import('@/views/SettingsPage.vue')


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/'
  },
  {
    path: '/home',
    component: homePage,
    redirect: '/home/overview',
    children: [
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
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    // Se la rotta non è valida, reindirizza alla home
    next('/');
  } else {
    next();
  }
});

export default router