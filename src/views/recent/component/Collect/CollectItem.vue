<template>
    <div class="collect-item">
        <van-image round width="20px" height="20px" :src="item.avatar" />
        <span class="gray-font">{{ item.author }}</span>
        <van-row justify="space-between">
            <van-col span="18">
                <van-text-ellipsis content="2222222222222222222" rows="2" />
            </van-col>
            <van-col span="5" offset="1">
                <van-image width="90px" height="60px" :src="item.cover" radius="5px" />
            </van-col>
        </van-row>
        <div class="gray-font">收藏于 {{ item.collectType === 1 ? '我的收藏' : '我关注的' }}</div>
        <div class="line"></div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const item = ref({
    author: '名字',
    avatar: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    detail: "dfdtfdtfdiolhgjnlifkdgndlgnklfdfffdfdfdfdfdfdfdfdfdfdfddddddddddddddddfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfdfffffffffff",
    cover: "https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg",
    collectType: 1,//1我收藏的 2我关注的
})

</script>
<style scoped lang='scss'>
.collect-item {
    background: #fff;
    line-height: 20px;
    padding: 7px 9px;
    margin-bottom:10px;
    .line {
        width: 100%;
        height: 1px;
        background: #a09f9f;
    }
}
</style>
