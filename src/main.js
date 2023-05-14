// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
//引入初始化样式文件
import '@/styles/common.scss'

//axios测试接口函数
import { getCategory } from './apis/testApi'
getCategory().then(res=>{
    console.log(res);
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

