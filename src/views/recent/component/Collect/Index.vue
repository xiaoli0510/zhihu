<template>
    <div class="collect-page">

        <van-row justify="space-between" style="border:1px solid #000;" align="center">
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
                1条内容
            </van-col>
            <van-col>
                <van-icon name="peer-pay" />按收藏夹
            </van-col>
        </van-row>
        <CollectItem />
    </div>

</template>
<script setup>
import { ref } from 'vue';
import CollectItem from './CollectItem.vue'

const active = ref(0);

</script>
<style scoped lang='scss'>
.collect-page {
    background: #faf7f7;
    font-size: 12px;
    .explain{
        line-height: 40px;
    }
}
</style>
