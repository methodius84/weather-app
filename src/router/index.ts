import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from "@/views/AboutView.vue";
import SearchCityView from "@/views/SearchCityView.vue";
import CityView from "@/views/CityView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchCityView
  },
  {
    path: '/city/:uuid',
    name: 'city',
    component: CityView
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
