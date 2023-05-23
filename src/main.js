// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'
//引入自定义懒加载插件
import {lazyPlugin } from '@/directives/index'
//通用组件全局注册
import {componentsPlugin} from '@/components/index.js'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin)  //注册自定义懒加载插件
app.use(componentsPlugin)

app.mount('#app')
