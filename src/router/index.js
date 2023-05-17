// createRouter: 创建router实例对象
//创建history模式的路由createWebHistory:

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',   //默认的首页
      component:Layout,
      children:[
      {
        path:'',
        component:Home
      },
      {
        path:'Category',
        component:Category
      }

      ]
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/home',
      component:Home
    }
  ]
})

export default router
