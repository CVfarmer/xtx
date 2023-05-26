//封装购物车模块
import { defineStore } from 'pinia'
import {  ref,computed } from 'vue'

export const useCartStore = defineStore('cart',()=>{
//1.定义state - carList
    const cartList = ref([])
//2.定义action - addCart
    const addCart = (goods)=> {
    //添加购物车操作，
    //已添加过 -> count+1
    //未添加过 -> 直接push
    //思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到就是添加过
    const item = cartList.value.find((item)=> goods.skuId === item.skuId )  //匹配
    if(item){
        item.count++    //待解决，此处若选择3个，点击添加也只加1个
    }else{
        cartList.value.push(goods)
    }
    console.log(cartList);
}

//删除购物车
const delCart = (skuId) => {
    /* 思路： 1.找到要删除的下标值 --splice
             2.使用数组的过滤方法 */
             
    //使用传下来的参数（skuId）去匹配item自身的skuId，匹配上就是要删除的
   const idx = cartList.value.findIndex((item)=> skuId === item.skuId) 
   cartList.value.splice(idx,1)
}

//单选功能
const singleCheck = (skuId,Selected)=>{
    //通过skuId找到要修改的那一项然后把他的selected修改为传过来的selected
    const item = cartList.value.find((item)=> item.skuId === skuId)
    item.Selected = Selected
}

//计算购物者总数和总价--计算属性
//1.总数  所有项的count之和
const allCount = computed(()=> cartList.value.reduce((a,c)=> a + c.count,0))   //a是每次累加完就会重新交给a，c是每一项需要加的数
//2.总价 所有项的count*price之和
const allPrice = computed(()=> cartList.value.reduce((a,c)=> a + c.count * c.price * 1000 /1000 ,0))   //a是每次累加完就会重新交给a，c是每一项需要加的数。计算精度问题


//是否全选
const isAll = computed(()=> cartList.value.every((item)=>item.Selected))

//全选功能
const allCheck = (Selected)=>{
    //把cartList中的每一项的Selected都设置为当前的全选状态
    cartList.value.forEach(item => item.Selected = Selected)
}
return{
    cartList,
    addCart,
    delCart,
    allCount,
    allPrice,
    singleCheck,
    isAll,
    allCheck
}
},{
    persist:true
})