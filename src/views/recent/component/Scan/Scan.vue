<template>
    <div class="scan-page">
        <div class="date">今天</div>
        <ScanItem v-for="item in todayList" :item="item" />
        <div class="date">更早</div>
        <ScanItem v-for="item in beforeList" :item="item" />
    </div>
</template>
<script setup>
import { ref } from 'vue';
import ScanItem from './ScanItem.vue'
import { fetchScanList } from '@/api/recent.js';
const todayList = ref([]);
const beforeList = ref([]);
fetchScanList().then(res => {
    todayList.value = res?.data?.todayList;
    beforeList.value = res?.data?.beforeList;
})
</script>
<style scoped lang='scss'>
.scan-page {
    background: #faf7f7;
    font-size: 12px;

    .date {
        color: #6f6767;
        line-height: 40px;
        padding: 0 9px;
    }
}
</style>
