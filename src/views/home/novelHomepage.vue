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

</script>
<template>
    <!-- <van-row align="center" justify="space-between" class="header-fixed">
        <van-col span="4">
            <BackIcon />
        </van-col>
        <van-col span="9">
            <BookIcon @showAddBookMessage="showAddBookMessage" />
            <van-icon name="cash-back-record" color="red" size="20px" class="money" @click="enterVipWelfare" />
            <ShareIcon @showShare="showShare" />
        </van-col>
    </van-row>

    <van-row justify="space-around" class="brief" @click="enterNovelHomepage">
        <van-col span="7">
            <van-image width="100" height="100" radius="5px" :src="cover" />
        </van-col>
        <van-col class="txt" span="17" justify="space-around" align="bottom">
            <h3>{{ title }}</h3>
            <van-row justify="space-between">
                <van-col class="grey-font" span="24">11 人正在看 | 共 33篇</van-col>
                <van-col span="24">
                    <span>会员免费</span>
                    <span class="origin-price">¥12.2</span>
                </van-col>
            </van-row>
        </van-col>
    </van-row>
    <van-row class="comment-box">
        <van-col>
            8.5 <van-icon name="star-o" color="#ffd21e" size="14px" />
        </van-col>
        <van-col>12人已评.</van-col>
        <van-col>我要评价</van-col>
    </van-row>
    <van-row justify="space-between" class="total-sort">
        <van-col class="grey-font">共{{ total }}节·{{ state == 1 ? '已' : '未' }}完结</van-col>
        <van-col class="grey-font"><van-icon name="exchange" @click="toggleSort" />{{ sortType === 0 ? '正序' : '倒序 '
            }}</van-col>
    </van-row>
    <div class="catalog-list">
        <CatalogItem :list="list" />
    </div> -->
</template>
<style scoped lang='scss'>
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

.brief {
    margin: 10px 0;

    .txt {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
}

.total-sort {
    margin: 20px 0;
}

.catalog-list {
    overflow: auto;
    height: 520px;
}

.grey-font {
    color: #3d3d3d;
    font-size: 12px;
}
</style>
