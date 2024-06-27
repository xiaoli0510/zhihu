<script setup>
import { ref, watch } from 'vue'; 
// import CatalogItem from './CatalogItem.vue'
// import BookIcon from './BookIcon.vue'
import { fetchCatalogList,fetchNovelDetail} from '@/api/search.js';
import { useRouter } from 'vue-router';
import Score from '../../components/Score.vue'
import MarkScore from '../../components/MarkScore.vue'

const res = await fetchCatalogList();
const detailRes = await fetchNovelDetail();
const obj = res.data;
console.log(detailRes.data.list[0])
Object.assign(obj, detailRes.data.list[0]);
console.log('obj',obj)

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

//进入专属会员福利
const enterVipWelfare = () => {
    router.push('/vipWelfare');
}

//分享
const isShare = ref(false);
const showShare = () => {
    isShare.value = true;
}
const hideShare = () => {
    isShare.value = false;
}

// tab
const active = ref(0);
 
const isTitle = ref(false);
const toggleTitleDetail = () => {
    isTitle.value = !isTitle.value;
}

const enterProfile = () => {
    router.push({
        name: 'profile',
        query: {
           id:obj.id
        }
    })
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
                    <Score :score="obj.score"/>
                </van-col>
                <van-col class="grey-font" offset="1">{{ obj.comment }}人已评.</van-col>
                <van-col class="comment-go" offset="1">我要评价<van-icon name="play" color="#f5500f" size="10px"/></van-col>
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
        <div class="tab-list share">
            <van-row justify="space-between">
                <van-col span="19">
                    <van-icon name="point-gift" size="20px" />
                    好友助力，<span class="discount-price">1元</span>开通盐选会员
                </van-col>
                <van-col span="5">
                    <van-icon name="wechat" size="20px"/>
                    分享
                    <van-icon name="arrow" />
                </van-col>

            </van-row>
        </div>
        <!-- 作者 -->
        <div class="author tab-list">
            <h2>作者</h2>
            <van-row align="center" @click="enterProfile(id)" justify="space-between">
                <van-col span="3"><van-image round width="1rem" height="1rem" :src="obj.avatar" /></van-col>
                <van-col span="13">
                    <van-row>
                        <van-col span="24">
                            {{ obj.name }}</van-col>
                    </van-row>
                </van-col>
                <van-col offset="1" span="5">
                    <van-button size="small" plain round icon="plus" type="primary">关注</van-button>
                </van-col>
                <van-col span="24">代表作
                    <span v-for="item in obj.classic">《{{ item }}》</span>
                </van-col>
            </van-row>
        </div>
        <!-- 目录 -->
        <div class="catalog-list tab-list">
            <h2>目录</h2>
            <van-row justify="space-between" class="total-sort">
                <van-col class="grey-font">{{ obj.statu == 1 ? '已' : '未' }}完结·共{{ obj.total }}节·</van-col>
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
        </div>
    </div>
    <MarkScore />
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
        margin: 20px 0;

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
    }

    .catalog-list {
        // height: 520px;
    }

    .grey-font {
        color: #616060;
        font-size: 12px;
    }
}
</style>
