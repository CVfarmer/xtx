// createRouter: 创建router实例对象
//创建history模式的路由createWebHistory:

import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'
import SubCategory from '@/views/SubCategory/index.vue'
import Detail from '@/views/Detail/index.vue'
import CartList from '@/views/CartList/index.vue'

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
        path:'category/:id',
        component:Category
      },
      {
        path:'category/sub/:id',
        component:SubCategory
      },
      {
        path:'detail/:id',   //详情页
        component:Detail
      },
      {
        path:'cartlist',
        component:CartList
      },

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
  ],
  //路由滚动行为定制  路由切换时能回到顶部
  scrollBehavior(){
    return {
      top:0
    }
  }
})

export default router
