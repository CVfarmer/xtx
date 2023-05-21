//把components中的所有组件进行全局化注册
//通过插件的方式


import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'

export const componentsPlugin = {
    install(app){
        //通过app.components('自定义组件名字'，组件) 方法
        app.component('XtxImageView',ImageView)
        app.component('XtxSku',Sku)

    }
}