//封装倒计时逻辑函数

import { ref,computed, onUnmounted } from 'vue'
import dayjs from 'dayjs'

export const useCountDown = ()=>{
    //1.响应式的数据
    let timer = null
    const time = ref(0)
    //格式化时间
    const formatTime = computed(()=> dayjs.unix(time.value).format('mm分ss秒'))
    //2.开启倒计时
    const start = (currentTime) =>{
        //开启倒计时逻辑
        //核心逻辑的编写：每隔1秒减一
        time.value = currentTime
      timer = setInterval(()=>{
            time.value--
        },1000)
        //组件销毁时清除定时器
        onUnmounted(()=>{
            timer && clearInterval(timer)   //这种写法是确保time存在时才调用clearInterval
           /*  timer 变量的初始值是 null。如果定时器未被开启或已经被清除，那么 timer 的值仍然是 null，
            在逻辑运算中被视为假值。因此，当 timer 为 null 时，clearInterval(timer) 不会执行。 */
        })
    }
    return {
        formatTime,
        start
    }
}