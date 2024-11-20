<template>
    <div v-for="item in list" class="suggest-item">
        <h3>{{ item.title }}</h3>
        <div>
            <van-image width="20px" height="20px" :src="item.avatar" round />
            <span>{{ item.author }}</span>
            <span class="gray-font">
                <van-icon name="gem-o" /> {{ item.tag }}话题下的优秀答主
            </span>
        </div>
        <van-text-ellipsis :content="item.sentence" rows="2" />
        <van-row justify="space-between" class="gray-font">
            <van-col span="22">
                <span>{{ item.upvote }} 赞同.</span>
                <span>{{ item.collect }} 收藏.</span>
            </van-col>
            <van-col span="2">
                <van-icon name="cross" />
            </van-col>
        </van-row>
        <van-divider/>
    </div>

</template>
<script setup>
import { ref } from 'vue';
import { fetchGuess } from '@/api/index.js';
const list = ref([]);
fetchGuess().then(res => {
    list.value = res.data.body.list;
}).catch(err => {
    console.log(err);
})


</script>
<style scoped lang='scss'>
.suggest-item {
    font-size: 14px;
    padding:10px;
}
</style>
