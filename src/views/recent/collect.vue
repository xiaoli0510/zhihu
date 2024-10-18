<template>
    <div class="collect-page-top">
        <van-row justify="space-between">
            <van-col>
                <BackIcon />
            </van-col>
            <van-col>
                <van-icon name="ellipsis" />
            </van-col>
        </van-row>
        <van-row>
            <van-col>我的收藏</van-col>
            <van-col><van-icon name="bag" /></van-col>
        </van-row>
    </div>
    <div class="collect-page-main">
        <p class="explain">{{list.length}}个内容</p>
        <CollectItem v-for="item in list" :key="item.id" :item="item"/>
    </div>
</template>
<script setup>
import BackIcon from '@/components/BackIcon.vue'
import CollectItem from './component/Collect/CollectItem.vue'
import { ref } from 'vue';
import {fetchCollectList} from '@/api/recent.js';
const list = ref([]);
fetchCollectList()
.then(res=>{
    list.value = res?.data?.list;
})

const item = ref({
    id: 1,
    title:'title1',
    author: '名字',
    avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    detail: "dfdtfdtfdiolhgjnlifkdgndlgnklfdfffdfdfdfdfdfdfdfdfdfdfddddddddddddddddfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfffffffffff",
    cover: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    collectType: 1,//1我收藏的 2我关注的
})

</script>
<style scoped lang='scss'>
.collect-page-top {
    background: rgba(0,0,0,.3);
    height:100px;
    padding:7px 9px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    color:#fff;
}
.collect-page-main{
    .explain{
        padding:7px 9px;
    }
}
</style>
