import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExampleView from "../views/ExampleView.vue"
import WatcherVi from "../views/WatcherVi.vue"
import Home from "../views/Home.vue"
import Add from "../views/Add.vue"
import Update from "../views/Update.vue"
import Login from "../views/Login.vue"
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    component: HomeView
  },
  {
    path: '/add',
    name: 'add',
    component:Add
  },
  {
    path: '/update/:id',
    name: 'update',
    component:Update
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },{
    path:'/example',
    component:ExampleView,
    children: [{
      path: 'watcher',
      component: WatcherVi,
  }
],
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
