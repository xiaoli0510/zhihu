<template>
    <van-row justify="space-around" style="padding:4px 1px;" align="center">
        <van-col>
            <BackIcon size="14px" />
        </van-col>
        <van-col>
            <van-tabs v-model:active="active" @clickTab="onClickTab">
                <van-tab v-for="(item) in tabs" :title="item.label">
                </van-tab>
            </van-tabs>
        </van-col>
    </van-row>
    <component :is="componentName" />

</template>
<script setup>
import BackIcon from '@/components/BackIcon.vue'
import Scan from './component/Scan/Scan.vue'
import Collect from './component/Collect/Index.vue'
import Matter from './component/Follow/Matter.vue';
import Topic from './component/Follow/Topic.vue';
import Search from '@/views/recent/component/Search/Index.vue';
import { ref, markRaw, watch } from 'vue';

const tabs = [
    {
        label: '最近浏览',
        id: 0,
        name: 'scan'
    },
    {
        label: '收藏',
        id: 1,
        name: 'collect'
    },
    {
        label: '关注问题',
        id: 2,
        name: 'followMatter'
    },
    {
        label: '关注话题',
        id: 3,
        name: 'followTopic'
    },
    {
        label: '你搜过的',
        id: 4,
        name: 'search'
    },
]

const active = ref(4);
const componentName = ref(markRaw(Search));
watch(active, (val) => {
    switch (val) {
        case 0:
            componentName.value = markRaw(Scan);
            break;
        case 1:
            componentName.value = markRaw(Collect);
            break;
        case 2:
            componentName.value = markRaw(Matter);
            break;
        case 3:
            componentName.value = markRaw(Topic);
            break;
    }
})

const onClickTab = (data) => {
    const { name } = data;
    switch (name) {
        case 0:
            componentName.value = markRaw(Scan);
            break;
        case 1:
            componentName.value = markRaw(Collect);
            break;
    }

}

</script>
<style scoped lang='scss'></style>