<script setup>
import {  onMounted, provide, ref, watch,toRef } from 'vue';
import { fetchNovelDetail } from "@/api/search.js";
import BackIcon from '@/components/BackIcon.vue'
import UpvoteIcon from '@/components/UpvoteIcon.vue'
import dot from '@/assets/imgs/dot.png';
import { useRouter } from 'vue-router';
import debounce from 'lodash/debounce';
import Catalog from '@/components/Catalog.vue' 
import Book from '@/components/Bookshelf/Book.vue'
import TopBookNav from '../../components/TopBookNav.vue'
import BookShare from '@/components/BookShare/Index.vue'
import CommentReply from '@/components/CommentReply/Index.vue'

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

//评论弹框id
const commentId = ref(0);

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

//阅读设置的默认选项
const readsetObj = ref({
    fontSize: 17,
    light: 70,
    isShowOtherNote: true
})
const onChangeReadset = (type, val) => {
    readsetObj.value[type] = val;
}
provide('onChangeReadset',onChangeReadset);
provide('readsetObj',readsetObj.value);
provide('isShareDetail',true);

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
    // if (currentY - startY <= -50 && isScrollBottom.value) {
    //     novel.value.scrollTo(0, 0);
    //     // 获取下一章数据
    //     isScrollBottom.value = false;
    //     initData(id++);
    // }
}

//进入profile
const enterProfile = (id)=>{
    router.push(`/profile/${id}`);
}

const showCommentPopup = ()=>{

}

</script>
<template>
    <div class="novel-detail" ref="novel" @scroll="novelScroll" @touchstart="onTouchStart" @touchend="onTouchEnd"
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
                <BookShare :data="list[0]" v-if="list[0]" />
            </van-col>
        </van-row>
        <van-pull-refresh v-model="loading" @refresh="onRefresh" pulling-text="下拉查看^" loosing-text="松开查看">
            <div class="novel-content">
                <div class="novel-item" v-for="(item, index) in list" :key="index">
                    <div class="inner" v-if="index===0">
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
                                <CommentReply :item="item"  :id="commentId" >
                                    <template #header="{id,togglePopup}">
                                        <span class="comment-btn" @click="togglePopup">发条评论吧1~</span>
                                    </template>
                                </CommentReply>
                                <UpvoteIcon :item="item" />
                                <CommentReply :item="item" :id="commentId"/>
                                <van-icon name="list-switch" size="24px" @click="showCatalog" />
                                <BookShare :data="{name:dot,size:'20px'}" />
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
        display: inline-block;
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
