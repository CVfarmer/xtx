//封装分类数据业务相关代码
import {getCategoryAPI} from '@/apis/category'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'  //在路由组件内部获取路由参数
import {  onMounted, ref} from 'vue'


export function useCategory (){
    const categoryDate = ref([])
    const route = useRoute()      //获取路由实例，通过route就能拿到路由参数
    const getCategory = async(id = route.params.id)=>{  //若onBeforeRouteUpdate不传参，则使用默认参数id = route.params.id
    const res = await getCategoryAPI(id)
    categoryDate.value = res.result
    
 
}
onMounted(()=> getCategory())
// 目标:路由参数变化的时候 可以把分类数据接口重新发送，且可以解决路由缓存问题
onBeforeRouteUpdate((to)=>{      
  getCategory(to.params.id)   
})
return {
    categoryDate
}
}