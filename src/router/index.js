import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/fountMusic'
}, {
  path: '/layout',
  name: 'Layout',
  component: () => import('../views/Layout'),
  children: [{
    path: '/fountMusic',
    name: 'FountMusic',
    component: () => import('../views/FountMusic')
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
