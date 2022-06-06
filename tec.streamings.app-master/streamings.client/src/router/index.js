import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// import isAuthenticatedGuard from '../modules/auth/router/auth-guard'

// import authRouter from '../modules/auth/router'
// import daybookRouter from '../modules/daybook/router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    //component: Home
    component: () => import('../views/Registro.vue')
  },
  {
    path: '/streamings',
    name: 'Streamings',
    //component: Home
    component: () => import('../views/Streamings.vue')
  },
  {
    path: '/streamings/:id',
    name: 'Streaming',
    //component: Home
    component: () => import('../views/Streaming.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
