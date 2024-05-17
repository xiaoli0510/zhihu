<script setup lang='ts'>
import { ref } from 'vue';
import { fetchHotList } from '@/api/search';
const list = ref([]);
fetchHotList().then(res => {
    list.value = res.data.list;
    console.log(list.value)
}
).catch(err => {
    console.log(err)
})

</script>
<template>
    <van-row class="hot-top" justify="space-between">
        <van-col span="7">
            <span class="type">搜索发现</span>
        </van-col>
    </van-row>
    <div class="hot-content ">
        <div class="name" v-for="(item, index) in list" :key="index">
            <van-row>
                <van-col span="22">
                    <span class="dot" :class="{ 'active': index <= 2 }"></span>
                    <span>{{ item.word }}</span>
                    <span class="num">{{item.follow}}万</span>
                </van-col>
                <van-col span="1" v-if="item.type===1"><van-tag color="rgb(245 238 238)" text-color="rgb(207, 40, 40)">热</van-tag></van-col>
            </van-row>
        </div>
    </div>

</template>
<style scoped lang='scss'>
.hot-top {
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;

    .type {
        border-left: 4px solid rgb(207, 40, 40);
        padding: 0 4px;
    }
}

.hot-content {
    .name {
        line-height: 34px;
        font-size: 12px;

        .dot {
            width: 3px;
            height: 3px;
            display: inline-block;
            background: rgb(155, 155, 155);
            border-radius: 50%;
            margin-right: 9px;
            vertical-align: middle;

            &.active {
                background: rgb(207, 40, 40);
            }
        }

        .num {
            color: rgb(136 130 130);
            font-size: 10px;
            margin-left: 4px;
        }
    }

}
</style>
