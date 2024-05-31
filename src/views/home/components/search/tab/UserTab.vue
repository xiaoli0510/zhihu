<script setup lang='ts'>
import UserItem from '../UserItem.vue'
import { ref } from 'vue';
import { fetchUserList } from '@/api/search.js';

const props = defineProps(['type']);
const list = ref([]);
fetchUserList({ type: props.type }).then(res => {
    list.value = res.data.list;
}).catch(err => {
    console.log(err);
})

</script>
<template>
    <UserItem v-for="(item,index) in list" :key="index" :item="item"/>
    <div class="no-data" align="center">-- 没有更多了 --</div>
</template>
<style scoped lang='scss'>
.no-data {
    color: #525151;
    padding: 20px 0;
    font-size: 14px;
}
</style>
