import { defineStore } from "pinia";
import {ref} from 'vue'
import {loginAPI } from '@/apis/use'

export const useUserStore = defineStore('use',()=>{
    //1.定义管理用户数据的state
    const useInfo = ref({})
    //2.定义获取接口数据的action函数
    const getUseInfo = async ({account,password})=>{
        const res = await loginAPI({account,password})
        useInfo.value = res.result
    }
    //3.以对象的格式把state和action return
    return{
        useInfo,
        getUseInfo
    }
},
    {
    persist: true,   //pinia数据持久化插件配置
})