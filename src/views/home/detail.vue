<script setup lang='ts'>
import { ref } from 'vue';
import InviteIcon from '@/components/InviteIcon.vue'
import AnswerIcon from '@/components/AnswerIcon.vue'
import TopicItem from '@/views/home/components/idea/TopicItem.vue'

import { fetchTopicList } from "@/api/index";
import BackIcon from '@/components/BackIcon.vue'
let list = ref([]);

const initData = () => {
    fetchTopicList()
        .then(res => {
            list.value = res.data.list;
        });
};
initData();
</script>
<template>
    <div class="detail-wrap">
        <van-row align="center" justify="space-between">
            <van-col span="4">
                <BackIcon/>
            </van-col>
            <van-col span="9">
                <InviteIcon />
                <AnswerIcon />
            </van-col>
        </van-row>
        <div class="detail-header">
            <h3>这是标题</h3>
            <van-row class="info">
                <van-col>知乎·</van-col>
                <van-col>44个回答·</van-col>
                <van-col>119个关注</van-col>
                <van-col><van-icon name="arrow" /></van-col>
            </van-row>
        </div>

        <div></div>
        <TopicItem :item="item" v-for="(item, index) in list" :key="index">
            <template v-slot:favour>
                2人赞同了该回答
            </template>
        </TopicItem>
    </div>
</template>
<style scoped lang='scss'>
.detail-wrap {
    background: #fff;
    padding: 2%;

}

.detail-header {
    border-bottom: 1px solid #ccc;
    margin-top: 20px 0;
    padding-bottom: 10px;

    .info {
        color: #585656;
        font-size: 14px;
        line-height: 30px;
        ;
    }
}
</style>
