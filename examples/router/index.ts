import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/about.vue')
  },
  {
    path: '/buttons',
    name: 'Buttons',
    component: () => import('../views/buttons.vue')
  },
  {
    path: '/tables',
    name: 'Tables',
    component: () => import('../views/tables.vue')
  },
  {
    path: '/websocket-client',
    name: 'Websocket Client',
    component: () => import('../views/websocket-client.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
