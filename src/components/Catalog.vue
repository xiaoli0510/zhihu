<script setup>
import { ref } from 'vue';
import CatalogItem from './CatalogItem.vue'
const isShow = ref(true);
    
</script>
<template>
<van-popup
  v-model:show="isShow"
  round
  position="bottom"
  :style="{ height: '90%',padding:'10px' }"
>
<h3>目录</h3>
<p>根据您的兴趣，为您推荐的专属内容</p>
<CatalogItem />

</van-popup>
</template>
<style scoped lang='scss'>
</style>
