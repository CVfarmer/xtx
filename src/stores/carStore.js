//封装购物车模块
import { defineStore } from 'pinia'
import {  ref } from 'vue'

export const useCartStore = defineStore('cart',()=>{
//1.定义state - carList
    const cartList = ref([])
//2.定义action - addCart
    const addCart = (goods)=> {
    //添加购物车操作，
    //已添加过 -> count+1
    //未添加过 -> 直接push
    //思路：通过匹配传递过来额商品对象中的skuId能不能在cartList中找到，找到就是添加过
    const item = cartList.value.find((item)=> goods.skuId === item.skuId )  //匹配
    if(item){
        item.count++    //待解决，此处若选择3个，点击添加也只加1个
    }else{
        cartList.value.push(goods)
    }
    console.log(cartList);
}
return{
    cartList,
    addCart
}
},{
    persist:true
})