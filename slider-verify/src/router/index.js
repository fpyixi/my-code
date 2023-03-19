import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    component: () => import('@/views/Index.vue')
  }
]

const router = new Router({
  routes,
  mode: "hash"
})

export default router