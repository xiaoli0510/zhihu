<script setup lang='ts'>
import { fetchResultList } from '@/api/result.js';
import { ref } from 'vue';
import ResultItem from '../ResultItem.vue'
const props = defineProps(['type']);
const type = props.type;
// 获取搜索结果
const list = ref([]);
fetchResultList({ type: type }).then(res => {
    list.value = res.data.body.list;
}).catch(err => {
    console.log(err);
})
</script>
<template>
    <div v-for="(item,index) in list" :key="index">
        <ResultItem :item="item" />
    </div>
</template>
<style scoped lang='scss'>
.suggest {
    background: #fff;
    line-height: 64px;
    padding: 0 10px;
    font-size: 15px;

    .elite-txt {
        font-weight: 700;
        margin-left: 10px;
    }

    .more-txt {
        color: #8f8c8c;
        margin-right: 5px;
        font-size: 13px;
    }
}
</style>
