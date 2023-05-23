//封装所有和用户相关的接口函数（登录接口等）
import request from '@/utils/http.js'

export const loginAPI = ({account,password}) => {
    return request({
        url:'/login',
        method:'POST',
        data:{
            account,
            password
        }
    })
}