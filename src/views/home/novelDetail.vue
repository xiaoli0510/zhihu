<script setup>
import { provide, ref } from 'vue';
import { fetchNovelDetail } from "@/api/search.js";
import BackIcon from '@/components/BackIcon.vue'
import BookIcon from '@/components/BookIcon.vue'
import ShareIcon from '../../components/ShareIcon.vue'
import UpvoteIcon from '@/components/UpvoteIcon.vue'
import CommentIcon from '@/components/CommentIcon.vue'
import dot from '@/assets/imgs/dot.png';
import CommentPopup from '@/components/CommentPopup.vue'
import CommentReply from '../../components/CommentReply.vue'
import AddBookMessage from '@/components/AddBookMessage.vue'
import { useRouter } from 'vue-router';
const props = defineProps(['id']);
provide('id', props.id);
let list = ref([]);
fetchNovelDetail({ id:props.id })
    .then(res => {
        list.value = res.data.list;
    }).catch(err => {
        console.log(err);
    });

//显示评论弹框
const isCommentPopup = ref(false);
const commentId = ref(0);
const showCommentPopup = (id) => {
    isCommentPopup.value = true;
    commentId.value = id;
}
//关闭评论弹框
const hideCommentPopup = () => {
    isCommentPopup.value = false;
}

//显示回复弹框
const isReply = ref(false);
const replyId = ref(0);
const showReply = (id) => {
    isReply.value = true;
    replyId.value = id;
}
provide('showReply', showReply);
//关闭回复弹框
const hideReply = () => {
    isReply.value = false;
}

// 加入书架提示
const isAddBookMessage = ref(false);
const showAddBookMessage = () => {
    isAddBookMessage.value = true;
}

//进入专属会员福利
const router = useRouter();
const enterVipWelfare = () => {
    router.push('/vipWelfare');
}

</script>
<template>
    <div class="novel-detail">
        <van-row align="center" justify="space-between" class="header-fixed">
            <van-col span="4">
                <BackIcon />
            </van-col>
            <van-col span="9">
                <BookIcon @showAddBookMessage="showAddBookMessage"/>
                <van-icon name="cash-back-record" color="red" size="20px" class="money" @click="enterVipWelfare"/>
                <ShareIcon />
            </van-col>
        </van-row>
        <div class="novel-content" v-for="(item, index) in list" :key="index">
            <h1>{{ item.title }}</h1>
            <van-row justify="start" class="author">
                <van-col>
                    <van-image round width="20px" height="20px" :src="item.avatar" />
                </van-col>
                <van-col>{{ item.name }}</van-col>
            </van-row>
            <van-row class="info">
                <van-col v-for="(item1, index1) in item.feature" :key="index1">{{ item1 }}·</van-col>
                <van-col>{{ item.upvote }}喜欢·</van-col>
                <van-col>{{ item.comment }}弹评·</van-col>
            </van-row>
            <div class="sentence">{{ item.sentence }}</div>
            <div class="comment-bottom">
                <van-row justify="space-between" algin="center">
                    <span class="comment-btn" @click="showCommentPopup(item.id)">发条评论吧~</span>
                    <UpvoteIcon :item="item" />
                    <CommentIcon :item="item" @showCommentPopup="showCommentPopup(item.id)" />
                    <van-icon name="list-switch" size="24px" />
                    <van-icon :name="dot" size="20px" color="#ddd" />
                </van-row>
            </div>
        </div>
    </div>
    <CommentPopup @hideCommentPopup="hideCommentPopup" :isCommentPopup="isCommentPopup" :id="commentId"
        v-if="isCommentPopup" />

    <!-- 评论回复 -->
    <CommentReply @hideReply="hideReply" :id="replyId" v-if="isReply" />

    <!-- 加入书架成功提示 -->
    <van-toast v-model:show="isAddBookMessage" style="padding: 10px" word-break="'break-word'">
        <template #message>
            <AddBookMessage />
        </template>
    </van-toast>
</template>
<style scoped lang='scss'>
.novel-detail {
    background: #fff;
    margin: 0 auto;

    .header-fixed {
        height: 40px;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 4px;
    }

    .money {
        margin: 0 6px;
    }

    .novel-content {
        margin-top: 20px 0;
        padding: 60px 10px;

        .author {
            margin: 20px 0 7px 0;
        }

        .info {
            color: #929292;
            font-size: 14px;
            line-height: 30px;
        }

        .sentence {
            padding: 20px 0;
        }
    }

}

.comment-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background: #fff;
    height: 40px;
    padding: 9px 10px;

    .comment-btn {
        width: 40%;
        background: #e6e5e5;
        height: 28px;
        line-height: 28px;
        border-radius: 14px;
        padding: 0 12px;
        font-size: 12px;
        color: #464444;
        margin-right: 2%;
    }
}
</style>
