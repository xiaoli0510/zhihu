<template>
    <div class="answer-wrap">
        <div class="item" v-for="item1 in props.list" :key="item1.id" @click="enterDetail(item1.id)">
            <van-row justify="start" align="center">
                <van-col>
                    <van-image width="20" height="20" fit="cover" round :src="personal" />
                </van-col>
                <van-col>
                    <span class="gray-font"> {{ item1.author }} </span>
                </van-col>
            </van-row>
            <van-text-ellipsis :content="item1.detail" row="2" />
            <div class="gray-font">
                <span v-if="item1.scan > 0">{{ formatPeopleNumber(item1.scan) }}浏览.</span>
                <span v-if="item1.agree > 0">{{ formatPeopleNumber(item1.agree) }}赞同.</span>
                <span v-if="item1.comment > 0">{{ formatPeopleNumber(item1.comment) }}评论.</span>
                <span v-if="item1.collect > 0">{{ formatPeopleNumber(item1.collect) }}收藏.</span>
                {{ formatTimeStamp(item1.updateTime) }}前
            </div>
        </div>
    </div>
</template>
<script setup>
import personal from '@/assets/imgs/personal.jpg';
import { getCurrentInstance } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['list']);
const formatTimeStamp = getCurrentInstance().proxy.$utils.formatTimeStamp;
const formatPeopleNumber = getCurrentInstance().proxy.$utils.formatPeopleNumber;
const router = useRouter();
const enterDetail = (id) => {
    router.push(`/detail?id=${id}`)
}
</script>
<style scoped lang='scss'>
.answer-wrap {
    font-size: 10px;
    background: #ebeaea;
    padding: 5px;
    margin-top: 7px;
    .item{
        padding:5px;
    }
    .item:nth-child(n+2) {
        border-top: 1px solid #ddd;
    }
}
</style>
