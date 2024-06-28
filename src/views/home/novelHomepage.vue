<script setup>
import { provide, ref, watch } from 'vue';
import CatalogItem from '@/components/CatalogItem.vue'
import BookIcon from '@/components/BookIcon.vue'
import { fetchCatalogList, fetchNovelDetail } from '@/api/search.js';
import { fetchCommentList } from '@/api/index.js';
import { useRouter } from 'vue-router';
import Score from '../../components/Score.vue'
import MarkScore from '../../components/MarkScore.vue'
import FollowIcon from '@/components/FollowIcon.vue'
import { showToast } from 'vant';
import CommentItem from '@/components/CommentItem.vue'

const res = await fetchCatalogList();
const detailRes = await fetchNovelDetail();
const obj = ref(res.data);
console.log(detailRes.data.list[0])
console.log('obj', obj.value)
Object.assign(obj.value, detailRes.data.list[0]);
console.log('obj', obj.value)

const list = ref(res.data.list);
const router = useRouter();
const enterNovelHomepage = () => {
    router.push(`/novel/homepage/${obj.id}`)
}

const sortType = ref(0);//0升序 1降序
const toggleSort = () => {
    sortType.value = sortType.value == 0 ? 1 : 0;
}
watch(sortType, (newVal) => {
    if (newVal === 1) {
        list.value.sort((a, b) => {
            return b.id - a.id;
        })
    } else {
        list.value.sort((a, b) => {
            return a.id - b.id;
        })
    }
})

// 加入书架提示
const isAddBookMessage = ref(false);
const showAddBookMessage = () => {
    isAddBookMessage.value = true;
}

//分享
const isShare = ref(false);
const showShare = () => {
    isShare.value = true;
}
const hideShare = () => {
    isShare.value = false;
}

//我要评价
const isMarkScore = ref(false);
const showMarkScore = () => {
    isMarkScore.value = true;
}
const hideMarkScore = () => {
    isMarkScore.value = false;
}

// tab
const active = ref(0);

//进入专属会员福利
const enterVipWelfare = () => {
    router.push('/vipWelfare');
}

const isTitle = ref(false);
const toggleTitleDetail = () => {
    isTitle.value = !isTitle.value;
}

const enterProfile = () => {
    router.push({
        name: 'profile',
        query: {
            id: obj.id
        }
    })
}

//关注
const toggleFollow = () => {
    obj.value.isFollow = !obj.value.isFollow;
}

const viewMoreCatalog = () => {
    showToast('完善中')
}

//评论
const commentList = ref([]);
fetchCommentList({ id: obj.id }).then(res => {
    //total.value = res.data.body.list.length;
    commentList.value = res.data.body.list.splice(0, 5);
    //filterList.value = res.data.body.list;

}).catch((err) => {
    console.log(err)
});
// 显示更多评论
const isMoreComment = ref(false);
const moreObj = ref(null);
const showMore = (item) => {
    isMoreComment.value = true;
    moreObj.value = item;
}
//关闭更多评论
const hideMore = () => {
    isMore.value = false;
}
const viewMoreComment = () => {
    showToast('完善中');
}

//讨论
const isDiscuss = ref(false);
// 显示讨论
const showDiscuss = (item) => {
    item = item || {};
    isDiscuss.value = true;
}
const discussParams = ref({
    fileList: [],
    discussValue: '',
    isSyncIdea: false
});
// 隐藏讨论
const hideDiscuss = (obj) => {
    discussParams.value = obj;
    isDiscuss.value = false;
}
// 发布讨论
const submitDiscuss = () => {
    discussParams.value = {
        fileList: [],
        discussValue: '',
        isSyncIdea: false
    };
    showToast('发布成功！');
    isDiscuss.value = false;
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



</script>
<template>
    <div class="novel-home">
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

        <div class="brief">
            <van-row justify="space-around" @click="enterNovelHomepage">
                <van-col span="7">
                    <van-image width="100" height="100" radius="9px" :src="obj.cover" class="img-cover" />
                </van-col>
                <van-col class="txt" span="16" offset="1" justify="space-around" align="bottom">
                    <h3>{{ obj.title }}</h3>
                    <van-row justify="space-between">
                        <van-col class="grey-font" span="24">{{ obj.view }} 人正在看 | 共 {{ obj.total }}篇</van-col>
                        <van-col span="24">
                            <span class="charge">会员免费</span>
                            <span class="origin-price grey-font">¥12.2</span>
                        </van-col>
                    </van-row>
                </van-col>
            </van-row>
            <van-row class="comment-box">

                <van-col class="score">
                    <Score :score="obj.score" />
                </van-col>
                <van-col class="grey-font" offset="1">{{ obj.comment }}人已评.</van-col>
                <van-col class="comment-go" offset="1" @click="showMarkScore">我要评价<van-icon name="play" color="#f5500f"
                        size="10px" /></van-col>
            </van-row>
        </div>

        <van-tabs v-model:active="active">
            <van-tab title="简介">内容 1</van-tab>
            <van-tab title="目录">内容 2</van-tab>
            <van-tab title="评价">内容 3</van-tab>
            <van-tab title="详情">内容 4</van-tab>
            <van-tab title="推荐">内容 4</van-tab>
        </van-tabs>

        <!-- 简介 -->
        <div class="profile tab-list">
            <h2>简介</h2>
            <van-text-ellipsis rows="2" :content="obj.sentence" expand-text="详情" collapse-text="收起" />
            <span class="tag" v-for="item in obj.feature">{{ item }}<van-icon name="arrow" /></span>
        </div>
        <!-- 分享助力 -->
        <div class="tab-list share" @click="enterVipWelfare">
            <van-row justify="space-between">
                <van-col span="19">
                    <van-icon name="point-gift" size="20px" />
                    好友助力，<span class="discount-price">1元</span>开通盐选会员
                </van-col>
                <van-col span="5">
                    <van-icon name="wechat" size="20px" />
                    分享
                    <van-icon name="arrow" />
                </van-col>

            </van-row>
        </div>
        <!-- 作者 -->
        <div class="author tab-list">
            <h2>作者</h2>
            <van-row align="center" justify="space-between">
                <van-col span="3" @click="enterProfile(id)"><van-image round width="1rem" height="1rem"
                        :src="obj.avatar" /></van-col>
                <van-col span="13" @click="enterProfile(id)">
                    <van-row>
                        <van-col span="24">
                            {{ obj.name }}</van-col>
                    </van-row>
                </van-col>
                <van-col offset="1" span="5">
                    <FollowIcon :isFollow="obj.isFollow" @toggleFollow="toggleFollow" />
                </van-col>
                <van-col span="24">代表作
                    <span v-for="item in obj.classic">《{{ item }}》</span>
                </van-col>
            </van-row>
        </div>
        <!-- 目录 -->
        <div class="catalog tab-list">
            <h2>目录</h2>
            <van-row justify="space-between" class="total-sort">
                <van-col class="grey-font">{{ obj.statu === 1 ? '已' : '未' }}完结·共{{ obj.total }}节·</van-col>
                <van-col class="grey-font">
                    <span @click="toggleTitleDetail">仅看标题</span>
                    <span @click="toggleSort" class="sort-wrap">
                        <van-icon name="exchange" />
                        {{ sortType === 0 ? '正序' : '倒序 '
                        }}
                    </span>
                </van-col>
            </van-row>
            <CatalogItem :list="list" />
            <p class="more-txt" @click="viewMoreCatalog">查看更多目录<van-icon name="arrow" color="#1989fa" /></p>
        </div>

        <!-- 评论 -->
        <div class="tab-list comment">
            <h2>精彩评论 <span class="comment-total">(共8条)</span></h2>
            <CommentItem @show-more="showMore" v-for="item in commentList" :item="item" @show-discuss="showDiscuss" />
            <p class="more-txt" @click="viewMoreComment">查看全部评价<van-icon name="arrow" color="#1989fa" /></p>
        </div>
    </div>
    <MarkScore :isMarkScore="isMarkScore" :data="{ id: obj.id, title: obj.title, isVip: obj.isVip }"
        @close="hideMarkScore" />
</template>
<style scoped lang='scss'>
.novel-home {
    background: #f1f1f1;
    padding: 10px;

    .header-fixed {
        height: 40px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 4px;
        z-index: 999;
    }

    .brief {
        background: #fff;
        margin: 44px 0 10px 0;
        border-radius: 5px;
        padding: 7px 9px;

        .img-cover {
            margin-top: -20px;
        }

        .txt {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
        }

        .charge {
            color: #e6c866;
            font-size: 12px;
        }

        .origin-price {
            text-decoration: line-through;
            margin-left: 5px;
        }

        .comment-box {
            line-height: 30px;

            .comment-go {
                color: #f5500f;
                font-size: 12px;
            }
        }
    }

    .total-sort {
        margin-bottom: 20px;

        .sort-wrap {
            margin-left: 9px;
        }
    }

    .tab-list {
        background: #fff;
        border-radius: 7px 9px;
        padding: 10px;
        overflow: auto;
        margin-top: 10px;
        font-size: 12px;

        h2 {
            line-height: 50px;
        }

        &.profile {
            .tag {
                background: #dfdcdc;
                display: inline-block;
                margin: 0 3px;
                line-height: 20px;
                padding: 0 7px;
                border-radius: 11px;
                font-size: 11px;
            }
        }

        &.share {
            font-weight: 700;

            .discount-price {
                color: #f5500f;
                font-size: 12px;
            }

        }

        &.catalog {}

        &.comment {
            .comment-total {
                color: #cb9e4c;
                font-size: 12px;
            }
        }

        // height: 520px;
        .more-txt {
            color: #1989fa;
            text-align: center;
        }
    }



    .grey-font {
        color: #616060;
        font-size: 12px;
    }
}
</style>
