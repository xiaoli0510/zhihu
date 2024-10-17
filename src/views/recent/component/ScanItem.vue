<template>
    <div class="scan-item" v-for="item in list" :key="item.id">
        <div>
            <van-icon name="label" />
            <span>
                {{ item.title }}
            </span>
        </div>
        <div class="name">
            <b>{{ item.author }}</b>
            <van-text-ellipsis :content="text" rows="2" />
        </div>
        <div>
            <span>{{ item.favour }}</span>赞同.
            <span>{{ item.comment }}</span>评论.
            <van-tag color="#ccc" text-color="#ddd">已读{{ item.finishPercent < 100 ? item.finishPercent < 100 + '%' : '完' }}</van-tag>
        </div>
    </div>

</template>
<script setup>
import { ref } from 'vue';

const list = ref([{
    title: '11',
    author: '22',
    favour: 1,
    comment: 2,
    finishPercent: 13,
    text: '慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。慢慢来，不要急，生活给你出了难题，可也终有一天会给出答案。',
}])

</script>
<style scoped lang='scss'></style>
