<template>
    <div class="interest-list">
        <div class="interest-top">
            <div class="item" v-for="item in obj.list" :key="item.id">
                <div class="img-wrap">
                    <van-image width="30px" height="30px" :src="item.imgBg" round />
                    <div class="dot" v-if="item.isNew"></div>
                </div>
                <div class="gray-font">{{ item.author }}</div>
            </div>
            <div class="item" @click="enterInterestHot">
                <div class="more-wrap">
                    <van-icon name="plus" size="17px" />
                </div>
                <div class="gray-font">关注更多</div>
            </div>
        </div>
        <van-divider />
        <div class="sort-wrap">
            <span class="sort-text" :class="{ 'active': activeIndex === Number(key) }" v-for="(item, key) in SORTTYPE"
                :key="key" @click="selectSortType(key)">{{ item }}</span>
        </div>
        <Invent v-for="(item, index) in filterList" :key="index" :item="item" />
    </div>
</template>
<script setup>
import { onMounted, ref, watch } from 'vue';
import Invent from "@/views/home/components/idea/Invent.vue";
import { fetchInterest } from '@/api/index.js';
import { useRouter } from 'vue-router';
let obj = {};
const filterList = ref({});
let productList = [];
const initData = async () => {
    await fetchInterest().then(res => {
        obj = res.data.body;
        obj.list.forEach(item => {
            productList = productList.concat(item.product);
        })
    })
}
await initData();
const activeIndex = ref(0);
const SORTTYPE = {
    0: '精选',
    1: '最新',
    2: '想法',
};
const selectSortType = (key) => {
    activeIndex.value = Number(key);
}
//排序规则
watch(activeIndex, (val) => {
    switch (val) {
        case 0:
            filterList.value = productList.sort((item1, item2) => {
                return item2.upvote - item1.upvote;
            })
            break;
        case 1:
            filterList.value = productList.sort((item1, item2) => {
                return new Date(item2.time).getTime() - new Date(item1.time).getTime();
            })
            break;
        case 2:
            filterList.value = productList.filter(item => item.type === 4);
            break;
    }
}, {
    immediate: true,
});
const router = useRouter();
const enterInterestHot = ()=>{
    router.push('/interestHot');
}

</script>
<style scoped lang='scss'>
.interest-list {
    width: 97%;
    margin: 0 auto;

    .interest-top {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;

        .item {
            width: 55px;
            height: 60px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            .img-wrap {
                position: relative;

                .dot {
                    width: 5px;
                    height: 5px;
                    border-radius: 50%;
                    position: absolute;
                    right: 2px;
                    top: 2px;
                    background: red;
                }
            }

            .more-wrap {
                width: 30px;
                height: 30px;
                border-radius: 50%;
                border: 1px dashed #ddd;
                display: flex;
                justify-content: center;
                align-items: center;
            }

        }
    }

    .sort-text {
        padding: 0 11px;
        line-height: 20px;
        height: 20px;
        display: inline-block;
        background: #f5f3f3;
        color: #5f5d5d;
        border-radius: 14px;
        margin: 0 4px;
        font-size: 12px;

        &.active {
            color: #000;
        }
    }

    .item-wrap {
        align-items: flex-start;
    }
}
</style>