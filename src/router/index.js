import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from "@/layout/Layout.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import("@/views/Home.vue")
      },
    ]
  },
  {
    path: '/self',
    name: 'Self',
    component: () => import('../views/Self.vue')
  },
  {
    path: '/tour',
    name: 'Tour',
    component: () => import('../views/Tour.vue'),
  },
  {
    path: '/vr',
    name: 'Vr',
    component: () => import('../views/Vr.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/echDet',
    name: 'EchDet',
    component: () => import('../views/EchDet.vue')
  },
  {
    path: '/zlDet',
    name: 'ZlDet',
    component: () => import('../views/ZlDet.vue')
  },
  {
    path: '/newsDet',
    name: 'NewsDet',
    component: () => import('../views/NewsDet.vue')
  },
  {
    path: '/comment',
    name: 'Comment',
    component: () => import('../views/Comment.vue')
  },
  {
    path: '/setting',
    name: 'Setting',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/self/myCollect',
    name: 'MyCollect',
    component: () => import('../views/self/MyCollect.vue')
  },
  {
    path: '/self/myRez',
    name: 'MyRez',
    component: () => import('../views/self/MyRez.vue')
  },
  {
    path: '/self/myCt',
    name: 'MyCt',
    component: () => import('../views/self/MyCt.vue')
  },
  {
    path: '/self/myCmnt',
    name: 'MyCmnt',
    component: () => import('../views/self/MyCmnt.vue')
  },
  {
    path: '/self/myInfo',
    name: 'MyInfo',
    component: () => import('../views/self/MyInfo.vue')
  },
  {
    path: '/self/myIdea',
    name: 'MyIdea',
    component: () => import('../views/self/MyIdea.vue')
  },
  {
    path: '/weather',
    name: 'Weather',
    component: () => import('../views/Weather.vue')
  },
  {
    path: '/cove',
    name: 'Cove',
    component: () => import('../views/Cove.vue')
  },
  {
    path: '/shuKw',
    name: 'ShuKw',
    component: () => import('../views/ShuKw.vue')
  },
  {
    path: '/setting/selfInfo',
    name: 'SelfInfo',
    component: () => import('../views/setting/SelfInfo.vue')
  },
  {
    path: '/setting/papa',
    name: 'Papa',
    component: () => import('../views/setting/Papa.vue')
  },
  {
    path: '/setting/safe',
    name: 'Safe',
    component: () => import('../views/setting/Safe.vue')
  },
  {
    path: '/self/myContact',
    name: 'MyContact',
    component: () => import('../views/self/MyContact.vue')
  },
  {
    path: '/self/myAbout',
    name: 'MyAbout',
    component: () => import('../views/self/MyAbout.vue')
  },

  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/Test.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
