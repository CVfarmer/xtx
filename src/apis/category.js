import request from '@/utils/http.js'


//面包屑api
export function getCategoryAPI(id){
    return request ({
        url:'/category',
        params:{
            id
        }
    })
}


export const getCategoryFilterAPI = (id) => {
 return request({
   url:'/category/sub/filter',
   params:{
     id
   }
 })
}