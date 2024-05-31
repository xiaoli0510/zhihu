<script setup>
import { ref } from 'vue';
import LikeIcon from './LikeIcon.vue'
const props = defineProps(['item']);
const item = ref(props.item);

// 显示更多
const emit = defineEmits(['showMore']);
const showMore = (item) => {
    emit('showMore',item);
}

//toggle 点赞
const toggleAgree = (item) => {
    if (item.isAgree) {
        item.agreeCount--;
    } else {
        item.agreeCount++;
    }
    item.isAgree = !item.isAgree;
}
</script>
<template>
    <van-row justify="space-between" class="comment-list">
        <van-col span="3">
            <van-image round width="1rem" height="1rem" :src="item.avatar" />
        </van-col>
        <van-col span="21">
            <van-row justify="space-between">
                <van-col span="20" class="name">{{ item.name }}
                    <van-icon :name="item.badge.develop" />
                    <van-icon :name="item.badge.particular" />
                </van-col>
                <van-col span="1"><van-icon name="ellipsis" @click="showMore(item)" /></van-col>
            </van-row>
            <van-row justify="space-between">
                <van-col span="20" class="comment-txt">{{ item.sentence }}</van-col>
            </van-row>
            <van-row justify="space-between" class="comment-info">
                <van-col span="20">{{ item.time }}</van-col>
                <van-col span="4">
                    <van-icon name="comment-circle-o" class="reply" />
                    <LikeIcon :item="item" @toggle-agree="toggleAgree"/>
                </van-col>
            </van-row>
        </van-col>
    </van-row>
</template>
<style scoped lang='scss'>
.comment-list {
    margin-top: 20px;
    .name {
            font-weight: 700;
        }

        .comment-txt {
            color: #383737;
            line-height: 24px;
            ;
        }

        .comment-info {
            color: #a09d9d;
            font-size: 12px;

            .reply {
                margin-right: 7px;
            }
        } 
}
</style>
