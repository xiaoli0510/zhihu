<template>
    <!-- 搜索 -->
    <van-row align="center" justify="space-between" style="padding: 1% 2%;">
        <van-col span="1">
            <BackIcon />
        </van-col>
        <van-col span="7">
            用户广场
        </van-col>
        <van-col span="1">
            <SearchIcon />
        </van-col>
    </van-row>
    <div class="list">
        <InterestHotItem v-for="item in list" :key="item.id" :item="item" />
    </div>
</template>
<script setup>
import BackIcon from '@/components/BackIcon.vue';
import SearchIcon from '@/components/SearchIcon.vue'
import InterestHotItem from './components/Interest/InterestHotItem.vue'
import { fetchInterestHot } from '@/api/index.js';
import { provide, ref } from 'vue';
const list = ref([]);
fetchInterestHot().then(res => {
    list.value = res.data.body.list;
});
const toggleFollow = (item)=>{
    item.isFollow = !item.isFollow;
}
provide('toggleFollow',toggleFollow);
</script>
<style scoped lang='scss'>
.list {
    margin:1% auto;
    width:95%;
}
</style>
