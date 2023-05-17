<template>
 <div>
  <div class="container">
    <HomeCategorys />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct/>
  <!-- 测试面板组件 -->
 
  <HomePanel title="新鲜好物" subTitle="新鲜好物 好多商品">
    <div>新鲜好物内容</div>
  </HomePanel>
  <HomePanel title="人气推荐" subTitle="人气推荐 好多商品">
    <div>人气推荐内容</div>

  </HomePanel>
  
  
 </div>
</template>

<script setup>
import HomeCategorys from './components/HomeCategorys.vue'
import HomeBanner from './components/HomeBanner.vue'
import HomeNew from './components/HomeNew.vue'
import HomeHot from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
import HomePanel from './components/HomePanel.vue'


</script>

<style>

</style>