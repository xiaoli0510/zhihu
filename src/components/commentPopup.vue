<script setup>
import { fetchCommentList } from '@/api/index.js';
import { ref, watch } from 'vue';
import CommentItem from './CommentItem.vue'
import CommentMore from './CommentMore.vue'
const props = defineProps({'isCommentPopup':Boolean,'id':Number,});
const isCommentPopupRef =ref(props.isCommentPopup);
watch(()=>props.isCommentPopup, (newVal) => {
    if(newVal){
        isCommentPopupRef.value = newVal;
    }
})
const emit = defineEmits(['hideCommentPopup']);
const onClickCloseIcon = () => {
    emit('hideCommentPopup');
}
const onClickOverlay = () => {
    emit('hideCommentPopup');
}
const list = ref([]);
const filterList = ref([]);
const total = ref(0);
const id = props.id;
fetchCommentList({id}).then(res => {
    total.value = res.data.body.list.length;
    list.value = res.data.body.list;
    filterList.value = res.data.body.list;
}).catch((err) => {
    console.log(err)
});

// 按默认 热度 最新过滤数据
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
//关闭更多
const hideMore= () => {
    isMore.value = false;
}
</script>
<template>
    <van-popup v-model:show="isCommentPopupRef" @click-overlay="onClickOverlay" @click-close-icon="onClickCloseIcon"
        round closeable close-icon="close" position="bottom" :style="{ height: '94%' }">
        <div class="reply-inner">
            <h3>全部评论</h3>
            <div class="reply-content">
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
                <CommentItem @show-more="showMore" v-for="item in filterList" :item="item"/>
            </div>
        </div>
    </van-popup>
    <CommentMore :item="moreObj" v-if="isMore" :isMore="isMore" @hide-more="hideMore" />
</template>
<style scoped lang='scss'>
.reply-inner {
    padding: 0 3%;

    h3 {
        line-height: 50px;
        text-align: center;
    }

    .reply-content {
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
