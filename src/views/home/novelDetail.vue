<script setup>
import { provide, ref, watch } from 'vue';
import { fetchNovelDetail } from "@/api/search.js";
import BackIcon from '@/components/BackIcon.vue'
import ShareIcon from '../../components/ShareIcon.vue'
import UpvoteIcon from '@/components/UpvoteIcon.vue'
import CommentIcon from '@/components/CommentIcon.vue'
import dot from '@/assets/imgs/dot.png';
import CommentPopup from '@/components/CommentPopup.vue'
import CommentReply from '../../components/CommentReply.vue' 
import { useRouter } from 'vue-router';
import BookShare from '../../components/BookShare.vue'
import ReadSet from '../../components/ReadSet.vue'
import MoreShare from '@/components/MoreShare.vue'
import debounce from 'lodash/debounce';
import Catalog from '@/components/Catalog.vue' 
import Book from '@/components/Bookshelf/Book.vue'
import TopBookNav from '../../components/TopBookNav.vue'

const props = defineProps(['id']);
const id = ref(props.id);
const isCatalog = ref(false);
const catalogData = ref({});
provide('id', props.id);
const list = ref([]);
const isClick = ref(false);//是否有点击加入书架按钮

const initData = (id) => {
    isClick.value=false;
    fetchNovelDetail({ id })
        .then(res => {
            isScrollBottom.value = false;
            list.value = res.data.list;
            catalogData.value = {id:list.value[0].id,cover:list.value[0].cover,title:list.value[0].title,isHas:list.value[0].isHas};
        }).catch(err => {
            console.log(err);
        });
}
watch(()=>props.id, (newVal) => {
    id.value = newVal;
    initData(newVal);
    isCatalog.value=false;
},{
    immediate:true
});  

// 下拉加载
const loading = ref(false);
const onRefresh = () => {
    setTimeout(() => {
        initData();
        loading.value = false;
    }, 1000);
};

const isScrollBottom = ref(false);
const isTop = ref(true);
//上拉加载
const novelScroll = (e) => {
    e.target.scrollTop > 0 ? isTop.value = false : isTop.value = true;
    const clientHeight = e.target.clientHeight;
    const scrollHeight = e.target.scrollHeight;
    const scrollTop = e.target.scrollTop;
    if ((scrollTop + clientHeight) >= scrollHeight) {
        isScrollBottom.value = true;
    }
}

const onScroll = debounce((e) => {
    onScroll(e);
}, 100);

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

//进入专属会员福利
const router = useRouter();
const enterVipWelfare = () => {
    router.push('/vipWelfare');
}

//目录
const showCatalog = () => {
    isCatalog.value = true;
}
const hideCatalog = () => {
    isCatalog.value = false;
}

// 切换加入书架
const toggleBookshelf = () => {
    catalogData.value.isHas = !catalogData.value.isHas;
    isClick.value = true;
}
provide('toggleBookshelf',toggleBookshelf)

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

//上拉
let startY = 0;
let currentY = 0;
const onTouchStart = (e) => {
    startY = e.touches[0].pageY;
}
const onTouchMove = (e) => {
    currentY = e.touches[0].pageY;
}
const novel = ref();
const onTouchEnd = (e) => {
    if (currentY - startY <= -50 && isScrollBottom.value) {
        novel.value.scrollTo(0, 0);
        // 获取下一章数据
        isScrollBottom.value = false;
        initData(id++);
    }
}

//进入profile
const enterProfile = (id)=>{
    router.push(`/profile/${id}`);
}

</script>
<template>
    <div class="novel-detail" @scroll="novelScroll" ref="novel" @touchstart="onTouchStart" @touchend="onTouchEnd"
        @touchmove="onTouchMove">
        <van-row align="center" justify="space-between" class="header-fixed">
            <van-col span="1">
                <BackIcon />
            </van-col>
            <van-col span="14" v-show="!isTop">
                <TopBookNav :data="{ cover: catalogData.cover, title: catalogData.title,id:catalogData.id }" />
            </van-col>
            <van-col span="9">
                <Book :isHas="catalogData.isHas" :isClick="isClick" />
                <van-icon name="cash-back-record" color="red" size="20px" class="money" @click="enterVipWelfare" />
                <ShareIcon @showShare="showShare" />
            </van-col>
        </van-row>
        <van-pull-refresh v-model="loading" @refresh="onRefresh" pulling-text="下拉查看^" loosing-text="松开查看">
            <div class="novel-content">
                <div class="novel-item" v-for="(item, index) in list" :key="index">
                    <div class="inner" v-if="index === 0">
                        <h1>{{ item.title }}</h1>
                        <van-row justify="start" class="author" @click="enterProfile(item.id)">
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
                        <div class="sentence" :style="{ fontSize: readsetObj.fontSize + 'px' }">{{
                            item.sentence }}</div>
                        <div class="comment-bottom" :class="{ 'pos-r': isScrollBottom }">
                            <van-row justify="space-between" algin="center">
                                <span class="comment-btn" @click="showCommentPopup(item.id)">发条评论吧~</span>
                                <UpvoteIcon :item="item" />
                                <CommentIcon :item="item" @showCommentPopup="showCommentPopup(item.id)" />
                                <van-icon name="list-switch" size="24px" @click="showCatalog" />
                                <van-icon :name="dot" size="20px" color="#ddd" @click="showShare" />
                            </van-row>
                        </div>
                    </div>
                    <div class="content-next-tip" v-if="index === 1 && isScrollBottom">
                        该专栏的下一个内容
                    </div>
                </div>
                <div class="novel-item" v-for="(item, index) in list" :key="index">
                    <div class="inner" v-if="index === 1 && isScrollBottom">
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
                    </div>
                </div>
            </div>

        </van-pull-refresh>
        <!-- 下一章 -->
        <div class="novel-next" @click="initData(id++)">
            <van-icon name="arrow-down" />
        </div>
    </div>
    <CommentPopup @hideCommentPopup="hideCommentPopup" :isCommentPopup="isCommentPopup" :id="commentId"
        v-if="isCommentPopup" />

    <!-- 评论回复 -->
    <CommentReply @hideReply="hideReply" :id="replyId" v-if="isReply" />

    <!-- 分享 -->
    <BookShare :item="list[0]" :isShare="isShare" @hideShare="hideShare" v-if="isShare" @showReadset="showReadset"
        @showMoreShare="showMoreShare" />
    <!-- 更多分享 -->
    <MoreShare v-if="isMoreShare" :isMoreShare="isMoreShare" @hideMoreShare="hideMoreShare" />
    <!-- 阅读设置 -->
    <ReadSet @close="hideReadset" :readsetObj="readsetObj" @onChangeReadset="onChangeReadset" :isReadset="isReadset"
        @hideMoreShare="hideMoreShare" />
    <!-- 目录 -->
    <Catalog v-if="isCatalog" :isCatalog="isCatalog" @close="hideCatalog" :data="catalogData" />
</template>
<style scoped lang='scss'>
.novel-detail {
    background: #fff;
    margin: 0 auto;
    height: 100%;
    overflow: auto;

    .header-fixed {
        height: 40px;
        background: #fff;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 4px;
        z-index: 999;
    }

    .money {
        margin: 0 6px;
    }

    .novel-content {
        background: #eeecec;
        height: calc(100% - 380px);
        overflow: auto;
        margin-top: 41px;
        padding-bottom: 40px;

        .novel-item {

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

    .novel-next {
        position: fixed;
        right: 3%;
        bottom: 30%;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: #fff;
        text-align: center;
        line-height: 40px;
        box-shadow: rgb(63, 63, 63) 0 0 5px;
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
    border-top: 1px solid #ccc;

    &.pos-r {
        position: relative;
    }


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
