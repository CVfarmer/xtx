import httpInstance from "@/utils/http";

//获取banner
export function getBannerAPI(){
    return httpInstance({
        url:'/home/banner'
    })
}

// * @description : 新鲜好物

export const findNewAPI = () => {
    return httpInstance({
        url:'/home/new'
    })
}