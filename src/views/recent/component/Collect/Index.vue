<template>
    <div class="collect-page">
        <van-row justify="space-between" align="center">
            <van-col>
                <van-tabs v-model:active="active">
                    <van-tab title="我收藏的"></van-tab>
                    <van-tab title="我关注的"></van-tab>
                </van-tabs>
            </van-col>
            <van-col>新建收藏夹</van-col>
        </van-row>
        <van-row justify="space-between" class="explain">
            <van-col>
                {{list.length}}条内容
            </van-col>
            <van-col>
                <van-icon name="peer-pay" />按收藏夹
            </van-col>
        </van-row>
        <CollectItem v-for="item in list" :key="item.id" :item="item"/>
        <p class="tips gray-font">没有更多内容</p>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import CollectItem from './CollectItem.vue'
import {fetchCollectList} from '@/api/recent.js';
const list = ref([]);
fetchCollectList()
.then(res=>{
    list.value = res?.data?.list;
})

const active = ref(0);

</script>
<style scoped lang='scss'>
.collect-page {
    background: #fff;
    font-size: 12px;
    .explain{
        background: #faf7f7;
        line-height: 40px;
    }
    .tips{
        line-height:50px;
        text-align: center;
    }
}
</style>
