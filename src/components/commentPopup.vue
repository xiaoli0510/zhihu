<script setup>
import { store } from '@/store/index.js'
import { fetchCommentList } from '@/api/index.js';
import { ref, watch } from 'vue';
import CommentItem from './CommentItem.vue'
import CommentMore from './CommentMore.vue'
const list = ref([]);
const filterList = ref([]);
const total = ref(0);
const id = store.commentId;
fetchCommentList({id}).then(res => {
    total.value = res.data.body.total;
    list.value = res.data.body.list;
    filterList.value = res.data.body.list;
    console.log(filterList.value)
}).catch((err) => {
    console.log(err)
});

const sortType = ref(0);
watch(sortType, (newVal) => {
    switch (newVal) {
        case 0:
            filterList.value = list.value;
            break;
        case 1:
        case 2:
            filterList.value = list.value.filter(item => {
                return item.sort === newVal;
            })
            break;
    }
})
const changeSort = (type) => {
    sortType.value = type;
}

// 显示更多
const isMore = ref(false);
const moreObj = ref(null);
const showMore = (item) => {
    isMore.value = true;
    moreObj.value = item;
}
//关闭更够
const hideMore= () => {
    isMore.value = false;
}
</script>
<template>
    <van-popup v-model:show="store.isComment" closeable close-icon="close" position="bottom" :style="{ height: '94%' }">
        <div class="comment-inner">
            <h3>全部评价</h3>
            <div class="comment-content">
                <van-row justify="space-between">
                    <van-col span="5">评论 {{ total }}</van-col>
                    <van-col span="9" class="sort">
                        <van-row justify="space-between">
                            <van-col span="8" :class="{ 'active': sortType === 0 }" class="tab" align="center"
                                @click="changeSort(0)">默认</van-col>
                            <van-col span="8" :class="{ 'active': sortType === 1 }" class="tab" align="center"
                                @click="changeSort(1)">热度</van-col>
                            <van-col span="8" :class="{ 'active': sortType === 2 }" class="tab" align="center"
                                @click="changeSort(2)">最新</van-col>
                        </van-row>
                    </van-col>
                </van-row>
                <CommentItem @show-more="showMore" @hide-more="hideMore" v-for="item in filterList" :item="item" />
            </div>
        </div>
    </van-popup>
    <CommentMore :item="moreObj" v-if="isMore" :isMore="isMore"/>
</template>
<style scoped lang='scss'>
.comment-inner {
    padding: 0 3%;

    h3 {
        line-height: 50px;
        text-align: center;
    }

    .comment-content {
        font-size: 13px;

        .sort {
            background: #eeeeee;
            line-height: 22px;
            border-radius: 20px;
            color: #696868;
            padding: 2px 1px;

            .tab {
                &.active {
                    background: #fffdfd;
                    color: #000;
                    border-radius: 10px;
                }

            }
        }
    }

}

</style>
