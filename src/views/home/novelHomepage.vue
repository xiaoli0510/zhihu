<script setup>
import { provide, ref, watch } from 'vue';
import CatalogItem from '@/components/CatalogItem.vue'
import BookIcon from '@/components/BookIcon.vue'
import { fetchCatalogList, fetchNovelDetail, fetchRecommendList } from '@/api/search.js';
import { fetchCommentList } from '@/api/index.js';
import { useRouter } from 'vue-router';
import Score from '../../components/Score.vue'
import MarkScore from '../../components/MarkScore.vue'
import FollowIcon from '@/components/FollowIcon.vue'
import { showToast } from 'vant';
import CommentItem from '@/components/CommentItem.vue'
import personal from '@/assets/imgs/personal.jpg';
import NovelRecommend from './components/search/NovelRecommend.vue'
import { throttle } from 'lodash';

const isTop = ref(true);
const isTab = ref(false);
const scroll = throttle((e) => {
    console.log(e.target.scrollTop)
    e.target.scrollTop > 0 ? isTop.value = false : isTop.value = true;
    e.target.scrollTop > 100 ? isTab.value = true : isTab.value = false;
}, 300)

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
    commentList.value = res.data.body.list.splice(0, 5);
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

const enterRoster = () => {
    showToast('完善中');
}

const recommendList = ref([]);
fetchRecommendList().then(res => {
    recommendList.value = res.data.list;
})


</script>
<template>
    <div class="novel-home" @scroll="scroll">
        <van-row align="center" justify="space-between" class="header-fixed" :class="{ 'white-bg': !isTop }">
            <van-col span="1">
                <BackIcon />
            </van-col>
            <van-col span="14" v-show="!isTop">
                <van-row>
                    <van-col>
                        <van-image width="17" height="20" radius="4px" :src="obj.cover" />
                    </van-col>
                    <van-col>
                        <span class="title">{{ obj.title }}</span>
                    </van-col>
                </van-row>
            </van-col>
            <van-col span="8">
                <BookIcon @showAddBookMessage="showAddBookMessage" />
                <van-icon name="cash-back-record" color="red" size="20px" class="money" @click="enterVipWelfare" />
                <ShareIcon @showShare="showShare" />
            </van-col>
        </van-row>

        <div class="brief tab-list">
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

        <div class="tab-wrap" :class="{ 'fixed': isTab }">
            <van-tabs v-model:active="active">
                <van-tab title="简介">内容 1</van-tab>
                <van-tab>
                    <template #title>
                        <van-badge content="试读" color="#1989fa">
                            目录
                        </van-badge> </template>
                </van-tab>
                <van-tab>
                    <template #title>
                        <van-badge content="8" color="#ccc">
                            评价
                        </van-badge> </template>
                </van-tab>
                <van-tab title="详情">内容 4</van-tab>
                <van-tab title="推荐">内容 4</van-tab>
            </van-tabs>
        </div>
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
            <van-row justify="space-between">
                <van-col span="3">
                    <van-image round class="avatar-img" :src="personal" width="30px" />
                </van-col>
                <van-col span="21" class="edit-comment">
                    <van-row justify="space-between" align="center">
                        <van-col>写评论</van-col>
                        <van-col>
                            <van-icon name="smile" color="#1989fa" size="20px" />
                        </van-col>
                    </van-row>
                </van-col>
            </van-row>
            <CommentItem @show-more="showMore" v-for="item in commentList" :item="item" @show-discuss="showDiscuss" />
            <p class="more-txt" @click="viewMoreComment">查看全部评价<van-icon name="arrow" color="#1989fa" /></p>
        </div>

        <!-- 详情 -->
        <div class="tab-list detail">
            <h2>详情</h2>
            <van-text-ellipsis rows="5" :content="obj.sentence" expand-text="展开" collapse-text="收起" />
            <p class="tip">本专栏为知乎首届长篇征文大赛获奖作品
                <br />
                完整获取名单，请戳<span class="roster" @click="enterRoster">这里</span>！
            </p>
        </div>

        <!-- 购买须知 -->
        <div class="tab-list buy--notice">
            <h2>购买须知</h2>
            <ul>
                <li>本盐选专栏由知乎出品；</li>
                <li>订阅成功后，即可在知乎APP永久阅读盐选专栏所有内容；</li>
                <li>知乎盐选会员，可在会员有效期内免费阅读；</li>
                <li>盐选专栏为虚拟内容服务，购买前请谨慎阅读，一经购买成功，将不接受退款，还请理解。</li>
            </ul>
        </div>

        <!-- 更多推荐 -->
        <div class="tab-list buy--notice">
            <h2>更多推荐</h2>
            <NovelRecommend v-for="item in recommendList" :item="item" />
        </div>

        <div class="vip-tip grey-font">
            <p class="vip-txt"><span class="line">|</span>知乎盐选会员<span class="line">|</span></p>
            <p class="vip-content">为你盐选好内容</p>
        </div>

        <div class="footer-fixed">
            <van-row align="center" justify="space-between">
                <van-col>
                    <van-icon name="newspaper-o" size="30px" />
                    <div class="sub-txt">试读</div>
                </van-col>
                <van-col class="go-buy">
                    <div>¥ 19.90</div>
                    <div class="sub-txt">立即购买</div>
                </van-col>
                <van-col class="vip-new">
                    <div>新会员首月仅9元</div>
                    <div class="sub-txt">此内容会员免费看</div>
                </van-col>
            </van-row>
        </div>
    </div>
    <MarkScore :isMarkScore="isMarkScore" :data="{ id: obj.id, title: obj.title, isVip: obj.isVip }"
        @close="hideMarkScore" />
</template>
<style scoped lang='scss'>
.novel-home {
    background: #f1f1f1;
    height: 100%;
    overflow: auto;
    border: 1px solid red;

    .header-fixed {
        height: 40px;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        padding: 0 4px;
        z-index: 999;

        &.white-bg {
            background: #fff;

            .title {
                font-size: 12px;
                margin-left: 7px;
            }
        }
    }

    .tab-wrap {
        background: #f1f1f1;
        width: 100%;

        &.fixed {
            position: fixed;
            top: 40px;
            z-index: 999;
        }

        :deep(.van-tab__text--ellipsis) {
            overflow: visible;
        }

        :deep(.van-badge--fixed) {
            white-space: nowrap;
            right: -14px !important;
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
        font-size: 12px;
        width: 95%;
        margin: 10px auto;

        h2 {
            line-height: 50px;
        }

        &.brief {
            background: #fff;
            margin: 54px auto 10px auto;
            border-radius: 5px;
            padding: 7px 9px;
            border: 1px solid red;
            height: 120px;

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

            .edit-comment {
                height: 30px;
                line-height: 30px;
                background: #f0f0f0;
                border-radius: 20px;
                padding: 0 14px;
                color: #7c7b7b;

            }
        }

        &.detail {
            .tip {
                color: #f5500f;
                line-height: 30px;

                .roster {
                    text-decoration: underline #1989fa;
                }
            }
        }

        &.buy--notice {
            ul {
                list-style: disc;
                margin-left: 10px;

                li {
                    line-height: 22px;
                }
            }
        }

        .more-txt {
            color: #1989fa;
            text-align: center;
            line-height: 40px;
        }
    }

    .vip-tip {
        padding: 50px 0;
        text-align: center;

        .vip-txt {
            font-size: 24px;
            line-height: 50px;

            .line {
                margin: 0 11px;
            }
        }

        .vip-content {
            letter-spacing: 17px;
        }
    }

    .footer-fixed {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        border-top: 1px solid #ccc;
        padding: 4px 6px 4px 17px;

        .sub-txt {
            font-size: 10px;
        }

        .go-buy {
            background: #f5cccc;
            color: red;
            border-radius: 24px;
            padding: 4px 22px;
        }

        .vip-new {
            background: red;
            color: #fff;
            border-radius: 24px;
            padding: 4px 25px;
        }
    }



    .grey-font {
        color: #616060;
        font-size: 12px;
    }
}
</style>
