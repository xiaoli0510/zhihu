<script setup>
import BackIcon from '@/components/BackIcon.vue'
import {fetchPayProtocol} from '@/api/search.js';
const res = await fetchPayProtocol();
const data = res.data.list;

  
</script>
<template>
       <van-row align="center" justify="flex-start" class="header-fixed">
        <van-col span="1">
            <BackIcon />
        </van-col>
        <van-col offset="1">{{data.title}}</van-col>
    </van-row>
    <h2 class="text-c">{{data.title}}</h2>
    <p>{{data.sentence}}</p>
</template>
<style scoped lang='scss'>
</style>
