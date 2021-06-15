import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import Production from '../components/Production.vue';
import File from '../components/File.vue';
import Telephone from '../components/Telephone.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
    children: [
      {
        path: 'production',
        name: 'Production',
        component: Production
      },
      {
        path: 'file',
        name: 'File',
        component: File
      },
      {
        path: 'telephone',
        name: 'Telephone',
        component: Telephone
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
