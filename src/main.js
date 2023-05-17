// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useIntersectionObserver } from '@vueuse/core'  //vueUse插件 用于懒加载

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'



const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

//定义全局全局指令  此指令用于懒加载  插件内容：useIntersectionObserver 
app.directive('img-lazy',{
    mounted(el,binding){
        //el:指令绑定的那个元素 --->img
        //binding：指令对象， 常用的是binding.value  指令等于号后面绑定的表达式的值---> 图片url
        console.log(el,binding);
        useIntersectionObserver(
            el,//监听对象是el  el就是img
            ([{ isIntersecting }]) => {    //isIntersecting代表当前监听的图片是否进入视图区域
                console.log(isIntersecting);  //测试图片出现在视窗为true或者false
                if(isIntersecting){
                    el.src = binding.value     //若为真，给图片的src赋值一个有效的图片地址（发送网络请求），地址就在binding.value存着
                }
            },
          
          )
    }
})