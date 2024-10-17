<template>
    <van-row justify="space-around" style="padding:4px 1px;" align="center">
        <van-col>
            <BackIcon size="14px"/>
        </van-col>
        <van-col>
            <van-tabs v-model:active="active" @clickTab="onClickTab">
                <van-tab v-for="(item) in tabs" :title="item.label" :name="item.name">
                </van-tab>
            </van-tabs>
        </van-col>
    </van-row>
    <component :is="componentName"/>

</template>
<script setup>
import BackIcon from '@/components/BackIcon.vue'
import Scan from './component/Scan.vue'
import { ref } from 'vue';

const tabs = [
    {
        label: '最近浏览',
        id: 0,
        name:'scan'
    },
    {
        label: '收藏',
        id: 1,
        name:'collect'
    },
    {
        label: '关注问题',
        id: 2,
        name:'followMatter'
    },
    {
        label: '关注话题',
        id: 3,
        name:'followTopic'
    },
    {
        label: '你搜过的',
        id: 4,
        name:'search'
    },
]

const active = ref('scan');
const componentName = Scan;

const onClickTab = (data) => {
    console.log(data);
    console.log()
    
}

</script>
<style scoped lang='scss'></style>
