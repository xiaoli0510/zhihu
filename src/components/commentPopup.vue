<script setup>
import { fetchCommentList } from '@/api/index.js';
import { ref, watch } from 'vue';
import CommentItem from './CommentItem.vue'
import CommentMore from './CommentMore.vue'
import Discuss from './Discuss.vue'
const props = defineProps({ 'isCommentPopup': Boolean, 'id': Number, 'a':String});
const isCommentPopupRef = ref(props.isCommentPopup);
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
fetchCommentList({ id }).then(res => {
    total.value = res.data.body.list.length;
    list.value = res.data.body.list;
    filterList.value = res.data.body.list;
}).catch((err) => {
    console.log(err)
});

// 按默认 热度 最新过滤数据
const sortType = ref(0);
watch([()=>props.isCommentPopup,sortType],([isCommentPopupVal,sortTypeVal]) => {
    isCommentPopupVal?isCommentPopupRef.value=isCommentPopupVal:'';
        switch (sortTypeVal) {
        case 0:
            filterList.value = list.value;
            break;
        case 1:
        case 2:
            filterList.value = list.value.filter(item => {
                return item.sort === sortTypeVal;
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
const hideMore = () => {
    isMore.value = false;
}

//讨论
const isDiscuss = ref(false);
const showDiscuss = (item) => {
    item = item||{};
    isDiscuss.value = true;
}

const discussParams = ref({
    fileList: [],
    discussValue: '',
    isSyncIdea: false
});
const hideDiscuss = (obj) => {
    discussParams.value = obj;
    isDiscuss.value = false;
}

const submitDiscuss = () => {
    discussParams.value = {
        fileList: [],
        discussValue: '',
        isSyncIdea: false
    };
    showToast('发布成功！');
    isDiscuss.value = false;
}
</script>
<template>
    <van-popup v-model:show="isCommentPopupRef" @click-overlay="onClickOverlay" @click-close-icon="onClickCloseIcon"
        round closeable close-icon="close" position="bottom" :style="{ height: '94%' }">
        <div class="comment-inner">
            <h3>全部评论</h3>
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
                <CommentItem @show-more="showMore" v-for="item in filterList" :item="item" @show-discuss="showDiscuss"/>
            </div>
            <div class="discuss-footer">
                <van-row align="center">
                    <van-col span="19" class="discuss-btn" >
                        <van-text-ellipsis class="discuss-txt" @click="showDiscuss"
                            :content="discussParams.discussValue === '' || !discussParams.discussValue ? '欢迎参与讨论' : discussParams.discussValue" />
                    </van-col>
                    <van-col span="3" offset="1">
                        <van-button plain type="primary" :disabled="discussParams.discussValue === '' ? true : false" size="small"
                            @click="submitDiscuss">发布</van-button>
                    </van-col>
                </van-row>
            </div>
        </div>
    </van-popup>
    <CommentMore :item="moreObj" v-if="isMore" :isMore="isMore" @hide-more="hideMore" />
    <Discuss @hide-discuss="hideDiscuss" @submit-discuss="submitDiscuss" v-if="isDiscuss" :data={isDiscuss,discussParams} />
</template>
<style scoped lang='scss'>
.comment-inner {
    padding: 0 10px 50px 10px;

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

    .discuss-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: #fff;
        padding: 7px 10px;
        height: 30px;
        box-sizing: content-box;
        border-top: 1px solid #ccc;

        .discuss-btn {
            font-size: 12px;
            text-align: left;
            background: #eeeeee;
            border-radius: 20px;
            padding: 0 13px;
            height: 30px;
            color: #464545;
            display: inline-block;

            .discuss-txt {
                line-height: 30px;
            }
        }
    }

}
</style>
