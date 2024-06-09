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
import BookShare from '../../components/BookShare.vue'
import ReadSet from '../../components/ReadSet.vue'
import MoreShare from '@/components/MoreShare.vue'
const props = defineProps(['id']);
provide('id', props.id);
let list = ref([]);
const initData = () => {
    fetchNovelDetail({ id: props.id })
        .then(res => {
            list.value = res.data.list;
        }).catch(err => {
            console.log(err);
        });
}
initData();

// 下拉加载
const loading = ref(false);
const onRefresh = () => {
    setTimeout(() => {
        initData();
        loading.value = false;
    }, 1000);
};

//上拉加载
const onScroll = (e) => {
    const novel = ref();
    console.log(novel)
    const clientHeight = e.target.clientHeight;
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    const distance = 50;
    console.log(scrollTop,clientHeight,scrollHeight,distance)
    console.log(scrollTop + clientHeight,scrollHeight + distance)
    if ((scrollTop + clientHeight) >= (scrollHeight + distance)) {
        initData();
    }
}

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

//目录
const isCatalog = ref(false);
const showCatalog = () => {
    showToast({ message: '功能开发中...' });
    isCatalog.value = true;
}
const hideCatalog = () => {
    isCatalog.value = false;
}

//分享
const isShare = ref(false);
const showShare = () => {
    isShare.value = true;
}
const hideShare = () => {
    isShare.value = false;
}

//阅读设置的默认选项
const readsetObj = ref({
    fontSize: 17,
    light: 70,
    isShowOtherNote: true
})
const isReadset = ref(false);
//显示阅读设置弹框
const showReadset = () => {
    isReadset.value = true;
    hideShare();
}
//关闭阅读设置弹框
const hideReadset = () => {
    isReadset.value = false;
}
const onChangeReadset = (type, val) => {
    readsetObj.value[type] = val;
}
//打开更多分享
const isMoreShare = ref(false);
const showMoreShare = () => {
    isMoreShare.value = true;
    hideShare();
}
// 关闭更多分享
const hideMoreShare = () => {
    isMoreShare.value = false;
}

</script>
<template>
    <div class="novel-detail">
        <van-row align="center" justify="space-between" class="header-fixed">
            <van-col span="4">
                <BackIcon />
            </van-col>
            <van-col span="9">
                <BookIcon @showAddBookMessage="showAddBookMessage" />
                <van-icon name="cash-back-record" color="red" size="20px" class="money" @click="enterVipWelfare" />
                <ShareIcon @showShare="showShare" />
            </van-col>
        </van-row>
        <van-pull-refresh v-model="loading" @refresh="onRefresh" pulling-text="下拉查看^" loosing-text="松开查看">
            <div class="novel-content" ref="novel" @scroll="onScroll">
                <div class="novel-item" v-for="(item, index) in list" :key="index">
                    <div class="inner">
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
                        <div class="sentence" v-if="index === 0" :style="{ fontSize: readsetObj.fontSize + 'px' }">{{
                            item.sentence }}</div>
                        <div class="comment-bottom">
                            <van-row justify="space-between" algin="center">
                                <span class="comment-btn" @click="showCommentPopup(item.id)">发条评论吧~</span>
                                <UpvoteIcon :item="item" />
                                <CommentIcon :item="item" @showCommentPopup="showCommentPopup(item.id)" />
                                <van-icon name="list-switch" size="24px" @click="showCatalog" />
                                <van-icon :name="dot" size="20px" color="#ddd" @click="showShare" />
                            </van-row>
                        </div>
                    </div>
                    <div class="content-next-tip" v-if="index === 0">
                        该专栏的下一个内容
                    </div>
                </div>
            </div>
        </van-pull-refresh>
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
    <!-- 分享 -->
    <BookShare :isShare="isShare" @hideShare="hideShare" v-if="isShare" @showReadset="showReadset"
        @showMoreShare="showMoreShare" />
    <!-- 更多分享 -->
    <MoreShare v-if="isMoreShare" :isMoreShare="isMoreShare" @hideMoreShare="hideMoreShare" />
    <!-- 阅读设置 -->
    <ReadSet @close="hideReadset" :readsetObj="readsetObj" @onChangeReadset="onChangeReadset" :isReadset="isReadset"
        @hideMoreShare="hideMoreShare" />
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
        // border: 1px solid red;
        z-index: 999;
    }

    .money {
        margin: 0 6px;
    }

    .novel-content {
        background: #eeecec;
        height: calc(100% - 380px);
        overflow: auto;
        border:1px solid #000;
        margin-top:41px;

        
        .novel-item {
            &:nth-child(2) {
                .inner {
                    padding-bottom: 41px;
                }
            }

            .inner {
                border-radius: 11px;
                padding: 10px 10px 10px 10px;
                background: #fff;



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

        .content-next-tip {
            line-height: 57px;
            text-align: center;
            color: #2b2b2b;
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
    border:1px solid red;

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
