import Vue from 'vue'
import VueRouter from 'vue-router'
// @代表src目录
import Home from '@/components/home/Home'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
