<script setup>
import { useRouter } from 'vue-router';

const props = defineProps(['item']);
const router = useRouter();
const enterTopic = () => {
    router.push('/topic');
}
</script>
<template>
    <div class="subject-discuss-item" @click="enterTopic">
        <van-row justify="start" align="center">
            <van-col align="center">
                <van-image round width="22px" height="22px" :src="props.item.avatar" />
            </van-col>
            <van-col offset="1" align="center">
                <span class="name">{{ props.item.name }}</span>
                <van-icon :name="item" v-for="(item,index) in props.item.badge" :key="index"/>
            </van-col>
        </van-row>
        <div class="img-list">
            <van-image width="4rem" height="2rem" radius="4px" class="img-detail"
                v-for="(item1, index1) in props.item.cover" :src="item1" />
        </div>
        <h3>{{ props.item.title }}</h3>
        <p class="sentence">
            <van-text-ellipsis :content="props.item.sentence" />
        </p>
        <van-row justify="space-between" class="footer">
            <van-col span="17">
                {{ props.item.agreeCount }}赞同.
                {{ props.item.likeCount }}喜欢.
                {{ props.item.commentCount }}评价
            </van-col>
            <van-col>{{ props.item.time }}</van-col>
        </van-row>
    </div>
</template>
<style scoped lang='scss'>
.subject-discuss-item {
    padding: 3%;
    background: #fff;
    margin-top: 3%;

    &:nth-child(2) {
        margin-top: 0;
    }

    .name {
        font-size: 10px;
    }

    .img-list {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        overflow-x: scroll;

        .img-detail {
            margin-right: 1%;
        }
    }

    .sentence {
        color: #666666;
        font-size: 12px;
        margin: 10px 0;
    }

    .footer {
        color: #666666;
        font-size: 12px;
    }
}
</style>
