<script setup lang='ts'>
import { ref } from 'vue';
import NovelItem from '../NovelItem.vue'
import { fetchResultList } from '@/api/result.js';

const props = defineProps(['type']);
// 获取搜索结果
const list = ref([]);
fetchResultList({ type: props.type }).then(res => {
    list.value = res.data.body.list;
}).catch(err => {
    console.log(err);
})
</script>
<template>
    <template v-for="(item, index) in list" :key="index">
        <NovelItem :item="item"/>
    </template>
</template>
<style scoped lang='scss'></style>
