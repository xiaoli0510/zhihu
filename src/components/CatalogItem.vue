<script setup>
import { ref } from 'vue';

    
    const list = ref([{
      id:1,
      title:'Title',
      sentence:'sentence',
      'feature': ['2222'],
      totalTxt:111,
      upvote:22,
      rate:0.98,
    }])
</script>
<template>

 <div v-for="item in list">
  <h3>{{ item.title }}</h3>
  <p>{{ item.sentence }}</p>
  <van-row justify="space-around">
    <van-col span="20">
      <span v-for="item1 in item.feature">{{ item1 }}·</span>
      <span>{{ item.totalTxt }}</span>
    </van-col>
    <van-col span="4"></van-col>
  </van-row>
  <van-divider />

 </div>
</template>
<style scoped lang='scss'>
</style>
