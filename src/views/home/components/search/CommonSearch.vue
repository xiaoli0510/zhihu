<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const list = ref([
    { id: 0, name: '广跟' },
    { id: 1, name: '广跟' },
    { id: 2, name: '广跟' },
    { id: 3, name: '广跟' },
    { id: 4, name: '广跟' },
    { id: 5, name: '广跟' },
    { id: 6, name: '广跟' },
    { id: 7, name: '广跟' },
    { id: 8, name: '广跟' },
    { id: 9, name: '广跟' },
    { id: 10, name: '广跟' },
    { id: 11, name: '广跟' },
    { id: 12, name: '广跟' },
    { id: 13, name: '广跟' },
    { id: 14, name: '广跟' },
    { id: 15, name: '广跟' },
]);
const enterResult = (value)=>{
    useRouter().push(`/result${value}`);
}

</script>
<template>
    <van-row>
        <van-col span="4">
            <h3>大家还在搜</h3>
        </van-col>
        <van-col span="4">
            <van-icon name="ellipsis" color="#ddd" />
        </van-col>
    </van-row>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
            <div class="swiper-warp">
                <div class="item" v-for="(item, index) in list.splice(0,8)" :key="index" @click="enterResult(item.name)">
                    <van-text-ellipsis :content="item.name"/>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item>
            <div class="swiper-warp">
                <div class="item" v-for="(item, index) in list.splice(10,8)" :key="index" @click="enterResult(item.name)">
                    <van-text-ellipsis :content="item.name" />
                </div>
            </div>
        </van-swipe-item>
    </van-swipe>


</template>
<style scoped lang='scss'>
h3 {
    font-weight: 700;
    font-size: 14px;
}

.my-swipe .van-swipe-item {
    color: #39a9ed;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #fff;

    .swiper-warp {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        .item {
            border-radius: 4px;
            line-height: 30px;
            color: #000;
            text-align: left;
            width: 47%;
        }
    }
}
</style>
