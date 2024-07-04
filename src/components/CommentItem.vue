<script setup>
import { inject, ref } from 'vue';
import LikeIcon from './LikeIcon.vue'
const props = defineProps({
    'item': Object, 'isMoreIcon': {
        type: Boolean,
        default: true
    },
    'isAllReplay': {
        type: Boolean,
        default: true
    }
});
const item = ref(props.item);

// 显示更多
const emit = defineEmits(['showMore','showDiscuss']);
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

//编辑评论
const editComment = (item)=>{
    emit('showDiscuss',item);
}

//评论回复
const showReply = inject('showReply');
const handleShowReply= ()=>{
    showReply?.();
}
</script>
<template>
    <van-row justify="space-between" class="comment-list">
        <van-col span="3">
            <van-image round class="avatar-img" :src="item.avatar" />
        </van-col>
        <van-col span="21">
            <van-row justify="space-between">
                <van-col span="20" class="name">{{ item.name }}
                    <van-icon :name="item.badge.develop" />
                    <van-icon :name="item.badge.particular" />
                </van-col>
                <van-col span="1"><van-icon name="ellipsis" @click="showMore(item)" v-if="props.isMoreIcon" /></van-col>
            </van-row>
            <van-row justify="space-between">
                <van-col span="24" class="comment-txt">
                    <van-text-ellipsis rows="3" :content="item.sentence" expand-text="展开"
                        collapse-text="收起" />
                    </van-col>
            </van-row>
            <van-row justify="space-between" class="comment-info">
                <van-col span="18">{{ item.time }}</van-col>
                <van-col span="6">
                    <van-icon name="comment-circle-o" class="reply" @click="editComment(item)" size="20px"/>
                    <LikeIcon :item="item" @toggle-agree="toggleAgree" size="17px"/>
                </van-col>
            </van-row>
            <div v-if="item.subList&&item.subList.length > 0">
                <template v-for="(item1,index1) in item.subList">
                   <CommentItem @show-more="showMore" v-if="index1<=1" :item="item1" :isMoreIcon="false" />
                </template>
                <van-button v-if="props.isAllReplay" class="view-more-btn" round  plain size="small" type="default" @click="handleShowReply(item.id)">查看全部{{item.subList.length}}条回复<van-icon name="arrow" /></van-button>
            </div>
        </van-col>
    </van-row>
</template>
<style scoped lang='scss'>
.comment-list {
    margin-top: 10px;

    .avatar-img {
        width: 70%;
    }

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
            border:1px solid red;
        }
    }

    .view-more-btn {
        margin-left: 10%;
        margin-top:3%;
    }
}
</style>
