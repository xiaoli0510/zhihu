<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(['item']);

// const props.item = ref({
//     id: 1,
//     title: '211',
//     sentence: '22222222222',
//     commentCount: "1",
//     agreeCount: "2",
//     time: '1年前'
// })

const router = useRouter();
const enterArticle = (id) => {
    router.push(`/article/${id}`);
}
</script>
<template>
    <div class="article-item" @click="enterArticle(props.item.id)">
        <van-row justify="space-between" align="center">
            <van-col span="20">
                <h3 class="title">{{ props.item.title }}</h3>
                <van-text-ellipsis :content="props.item.sentence" rows="2"/>
                <van-row class="gray-font">
                    <van-col>{{ props.item.agreeCount }}赞同.</van-col>
                    <van-col>{{ props.item.commentCount }}评论.</van-col>
                    <van-col>{{ props.item.time }}</van-col>
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
