import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/lifeCycle',
    name: 'lifeCycle',
    component: () => import(/* webpackChunkName: "LifeCycle" */ '../views/LifeCycle.vue')
  },
  {
    path: '/router',
    name: 'router',
    component: () => import(/* webpackChunkName: "Router" */ '../views/Router.vue')
  },
  {
    path: '/vuex',
    name: 'vuex',
    component: () => import(/* webpackChunkName: "Vuex" */ '../views/Vuex.vue')
  },
  {
    path: '/axios',
    name: 'axios',
    component: () => import(/* webpackChunkName: "Axios" */ '../views/Axios.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
