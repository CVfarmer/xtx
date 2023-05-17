<template>
 <HomePanel title="人气推荐" subTitle="新鲜出炉 品质靠谱">
  <ul class="goods-list">
    <li v-for="item in hotList" :key="item.id">
      <RouterLink to="/">
        <img v-img-lazy="item.picture"  />
        <p class="title">{{ item.title }}</p>
        <p class="alt">{{ item.alt }}</p>
      </RouterLink>
    </li>
  </ul>
</HomePanel>

</template>

<script setup>
import { findHotAPI } from '@/apis/home'
import HomePanel from './HomePanel.vue';
import { ref,onMounted } from 'vue'

const hotList = ref([])
const getHotList = async () =>{
  const res = await findHotAPI()
  // console.log(res);
  hotList.value = res.result

}

onMounted(()=> getHotList())

</script>

<style scoped>
.alt{
  color: rgb(205, 202, 202);
  font-size: 14px;
}
</style>