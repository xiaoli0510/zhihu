<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const obj = ref({
    id: 1,
    title: '211',
    sentence: '22222222222',
    commentCount: "1",
    agreeCount: "2",
    date: '1年前'
})

const router = useRouter();
const enterArticle = (id) => {
    router.push(`/article/${id}`);
}
</script>
<template>
    <div class="article-item" @click="enterArticle(obj.id)">
        <van-row justify="space-between" align="center">
            <van-col span="20">
                <h3 class="title">{{ obj.title }}</h3>
                <p>{{ obj.sentence }}</p>
                <van-row class="gray-font">
                    <van-col>{{ obj.agreeCount }}赞同.</van-col>
                    <van-col>{{ obj.commentCount }}评论.</van-col>
                    <van-col>{{ obj.date }}</van-col>
                </van-row>
            </van-col>
            <van-col span="3" class="quote-txt">引用</van-col>
        </van-row>
    </div>
</template>
<style scoped lang='scss'>
.article-item {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-top:10px;
    .title{
        line-height:40px;
    }

    .quote-txt {
        color: var(--van-primary-color);
    }
}
</style>
