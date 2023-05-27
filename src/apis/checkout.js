
import request from '@/utils/http.js'

//获取详情接口
export const getCheckInfoAPI = ()=>{
    return request({
        url:'/member/order/pre'
    })
} 