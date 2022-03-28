import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

import Inicio from '@/views/publica/Inicio'
import Home from '@/views/publica/Home'
Vue.use(VueRouter)

const routes = [  
  {
    path: '/',
    component: Inicio,
    meta: { isPublic: true }
  },
  {
    path: '/home',
    component: Home,
    meta: { isPublic: true }
  }
]


const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
