import Vue from 'vue'
import VueRouter from 'vue-router'

const HOME = () => import('./../views/Home.vue')
const ABOUT = () => import('./../views/About.vue')
const PROFILE = () => import('./../views/Profile.vue')
const MYSELF = () => import('./../views/Myself.vue')
// import HOME from './../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'HOME',
    component: HOME
  },
  {
    path: '/about',
    name: 'ABOUT',
    component: ABOUT
  },
  {
    path: '/profile',
    name: 'PROFILE',
    component: PROFILE
  },
  {
    path: '/myself',
    name: 'MYSELF',
    component: MYSELF
  }
]

const router = new VueRouter({
  routes,
  // mode: 'history'
})

export default router
