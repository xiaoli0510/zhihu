<script setup lang='ts'>
import { ref,inject } from 'vue';
import NovelItem from '../NovelItem.vue'
import { fetchNovelList } from '@/api/search.js';

const props = defineProps(['type']);
const keyWord=inject('keyWord');
// 获取搜索结果
const list = ref([]);
fetchNovelList({ type: props.type,keyWord:keyWord }).then(res => {
    list.value = res.data.list;
}).catch(err => {
    console.log(err);
})
</script>
<template>
    <NovelItem :item="item" v-for="(item, index) in list" :key="index" />
    <div class="no-data" align="center">-- 没有更多了 --</div>
</template>
<style scoped lang='scss'>
.no-data {
    color: #525151;
    padding: 20px 0;
    font-size: 14px;
}
</style>
