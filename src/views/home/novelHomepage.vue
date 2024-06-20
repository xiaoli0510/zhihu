<script setup>
import { ref, watch } from 'vue';
// import CatalogItem from './CatalogItem.vue'
// import BookIcon from './BookIcon.vue'
import { fetchCatalogList } from '@/api/search.js';
import { useRouter } from 'vue-router';

const res = await fetchCatalogList();
const { id, title, total, state, cover } = res.data;
const list = ref(res.data.list);
const router = useRouter();
const enterNovelHomepage = () => {
    router.push(`/novel/homepage/${id}`)
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

const text =
    '那一天我二十一岁，在我一生的黄金时代。我有好多奢望。我想爱，想吃，还想在一瞬间变成天上半明半暗的云。后来我才知道，生活就是个缓慢受锤的过程，人一天天老下去，奢望也一天天消失，最后变得像挨了锤的牛一样。可是我过二十一岁生日时没有预见到这一点。我觉得自己会永远生猛下去，什么也锤不了我。';
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
                    <van-image width="100" height="100" radius="9px" :src="cover" class="img-cover" />
                </van-col>
                <van-col class="txt" span="16" offset="1" justify="space-around" align="bottom">
                    <h3>{{ title }}</h3>
                    <van-row justify="space-between">
                        <van-col class="grey-font" span="24">11 人正在看 | 共 33篇</van-col>
                        <van-col span="24">
                            <span class="charge">会员免费</span>
                            <span class="origin-price grey-font">¥12.2</span>
                        </van-col>
                    </van-row>
                </van-col>
            </van-row>
            <van-row class="comment-box">
                <van-col class="score">
                    <span>8.5</span> <van-icon name="star-o" color="#f5500f" size="14px" />
                </van-col>
                <van-col class="grey-font">12人已评.</van-col>
                <van-col class="comment-go">我要评价</van-col>
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
            <h3>简介</h3>
            <van-text-ellipsis rows="2" :content="text" expand-text="详情" collapse-text="收起" />
            <span class="tag">现实情感<van-icon name="arrow" /></span>
            <span class="tag">现实情感<van-icon name="arrow" /></span>
            <span class="tag">现实情感<van-icon name="arrow" /></span>
        </div>
        <!-- 目录 -->
        <van-row justify="space-between" class="total-sort">
            <van-col class="grey-font">共{{ total }}节·{{ state == 1 ? '已' : '未' }}完结</van-col>
            <van-col class="grey-font"><van-icon name="exchange" @click="toggleSort" />{{ sortType === 0 ? '正序' : '倒序 '
                }}</van-col>
        </van-row>
        <div class="catalog-list tab-list">
            <CatalogItem :list="list" />
        </div>
    </div>
</template>
<style scoped lang='scss'>
.novel-home {
    background: #f0efef;
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

            .score,
            .comment-go {
                color: #f5500f;
                font-size: 12px;
            }
        }
    }

    .total-sort {
        margin: 20px 0;
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
    }

    .catalog-list {
        height: 520px;
    }

    .grey-font {
        color: #616060;
        font-size: 12px;
    }
}
</style>
