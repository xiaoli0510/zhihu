<script setup>
import BackIcon from '@/components/BackIcon.vue'
import FollowIcon from '@/components/FollowIcon.vue'
import { provide, ref } from 'vue';
import SubjectDiscuss from './subject/Discuss.vue'
import BookShare from '@/components/BookShare/Index.vue';

const props = defineProps(['keyWord']);
const item = ref({
    id: 1,
    name: '张三',
    avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
    isFollow: true,
})
const toggleFollow = (item) => {
    item.isFollow = !item.isFollow;
}
provide('toggleFollow', toggleFollow);

const activeName = ref(0);
const tabLabel = ref({
    0: '讨论',
    1: '想法',
    2: '待回答',
})

</script>
<template>
    <div class="subject-wrap">
        <div class="top">
            <van-row justify="space-between" align="center">
                <van-col>
                    <BackIcon />
                </van-col>
                <van-col span="6">
                    <FollowIcon :item="item" />
                    <BookShare :data="{ iconName: 'ellipsis', size: '20px' }" />
                </van-col>
            </van-row>
            <h3 class="title-word"><van-icon name="chat" color="#1989fa" />{{ props.keyWord }}</h3>
            <p class="gray-font detail">
                1亿浏览.7.1万讨论
            </p>
        </div>
        <div class="tab-wrap">
            <van-tabs v-model:active="activeName" shrink>
                <van-tab v-for="(item, index) in tabLabel" :title="item" :name="index">
                    <van-divider />
                    <SubjectDiscuss />
                </van-tab>
            </van-tabs>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.subject-wrap {
    background: #f7f7f7;

    .top {
        width: 95%;
        margin: 0 auto;
        line-height: 40px;

        .title-word {
            margin: 2% 0 1% 0;
        }
    }

    .tab-wrap {
        border-radius: 10px 10px 0 0;
        background: #fff;
        padding-top: 10px;
        margin-top: 4%;
    }
}
</style>
