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
                {{ list.length }}条内容
            </van-col>
            <van-col @click="onToggleOrderType">
                <template v-if="orderType===0">
                    <van-icon name="peer-pay" />按收藏夹
                </template>
                <template v-if="orderType===1">
                    <van-icon name="orders-o" />按内容
                </template>
            </van-col>
        </van-row>
        <CollectItem v-for="item in list" :key="item.id" :item="item" @share="onShare" />
        <p class="tips gray-font">没有更多内容</p>
        <BookShare ref="bookShare" :data="{ item:bookShareData,hideIcon:true }"/>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import CollectItem from './CollectItem.vue'
import BookShare from '@/components/BookShare/Index.vue'

import { fetchCollectList } from '@/api/recent.js';
const list = ref([]);
fetchCollectList()
    .then(res => {
        list.value = res?.data?.list;
    })

const active = ref(0);
const bookShare = ref();
const bookShareData = ref({});
const onShare = (item) => {
    bookShareData.value = item;
    console.log('share')
    bookShare.value?.showShare();
}

const orderType = ref(0);//0按收藏夹 1按内容
const onToggleOrderType = () => {
    orderType.value === 0 ? orderType.value = 1 : orderType.value = 0;
}

</script>
<style scoped lang='scss'>
.collect-page {
    background: #fff;
    font-size: 12px;

    .explain {
        background: #faf7f7;
        line-height: 40px;
    }

    .tips {
        line-height: 50px;
        text-align: center;
    }
}
</style>
