<script setup lang='ts'>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import {fetchCommonList} from '@/api/search.js';
import Report from '@/views/home/components/search/Report.vue';
const list = ref([]);
const enterResult = (value) => {
    useRouter().push(`/result${value}`);
}

const firstTop10 =computed(()=>{
    return list.value.slice(0,10)
})
const last10 =computed(()=>{
    return list.value.slice(10,20)
})
fetchCommonList().then(res=>{
    list.value = res.data.list;
})

// 举报弹框
const isReportSheet = ref(false);
const isReport = ref(false);
const actions = [
    { name: '举报', icon: 'cart-o' },
];
const showReport = () => {
    isReportSheet.value = true;
}
const onSelect = () => {
    isReportSheet.value = false;
    isReport.value=true;
};
const hide=()=>{
    isReport.value=false;
}

</script>
<template>
    <div class="common-search">
        <van-row justify="space-between">
            <van-col span="7">
                <h3>大家还在搜</h3>
            </van-col>
            <van-col span="2">
                <van-icon name="ellipsis" color="#000" @click="showReport"/>
            </van-col>
        </van-row>
        
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="#39a9ed">
            <van-swipe-item>
                <div class="swiper-wrap">
                    <div class="item" v-for="(item, index) in firstTop10" :key="index"
                        @click="enterResult(item.word)">
                        <van-text-ellipsis :content="item.word" class="search-txt"/>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item>
                <div class="swiper-wrap">
                    <div class="item" v-for="(item, index) in last10" :key="index"
                        @click="enterResult(item.word)">
                        <van-text-ellipsis :content="item.word" class="search-txt"/>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 举报弹框 -->
    <van-action-sheet v-model:show="isReportSheet" :actions="actions" @select="onSelect" />
    <Report v-if="isReport" :isReport="isReport" :list="list" @hide="hide"/>
</template>
<style scoped lang='scss'>
.common-search{
    background:#fff;
    margin:10px 0;
    padding:10px;
    h3 {
        font-weight: 700;
        font-size: 14px;
    }

    .my-swipe .van-swipe-item {
        color: #39a9ed;
        font-size: 20px;
        text-align: center;
        background-color: #fff;

        .swiper-wrap {
            height:200px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;

            .item {
                font-size: 14px;
                border-radius: 20px;
                color: #000;
                text-align: left;
                width: 47%;
                margin-top: 10px;
                padding: 0 14px;
                font-weight: 700;
                background: #ebeaea;
                .search-txt{
                    line-height: 30px;
                }
            }
        }
    }
}

</style>
