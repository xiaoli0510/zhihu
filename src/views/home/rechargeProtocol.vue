<script setup>
import { fetchRechargeProtocol } from '@/api/search.js';
import Header from '@/components/Protocol/Header.vue';
const res = await fetchRechargeProtocol();
const data = res.data.list;
</script>
<template>
    <Header :title="data.title"/>
    <div class="protocol-main">
        <h2 class="text-c">{{ data.title }}</h2>
        <p>{{ data.sentence }}</p>
    </div>
</template>
<style scoped lang='scss'>
.protocol-main {
    padding: 10px 10px;
    height: calc(100% - 60px);
    box-sizing: content-box;
    overflow: auto;
}
</style>
