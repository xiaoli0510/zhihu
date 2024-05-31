<script setup>
import { fetchCommentReply } from '@/api/index.js';
import { ref } from 'vue';
import CommentItem from '@/components/CommentItem.vue';
import CommentMore from '@/components/CommentMore.vue';
import { useRouter } from 'vue-router';
const props = defineProps({ 'id': String, });
const isCommentReply = ref(false);
const emit = defineEmits(['hideCommentPopup']);
const list = ref([]);
const subList = ref([]);
const total = ref(0);
fetchCommentReply({ id: props.id }).then(res => {
    total.value = res.data.body.subList.length;
    list.value = res.data.body.list;
    subList.value = res.data.body.subList;
    isCommentReply.value = true;
}).catch((err) => {
    console.log(err)
});

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

const router = useRouter();
const onClickCloseIcon = ()=>{
    router.go(-1);
}
</script>
<template>
    <van-popup closeable close-icon="clear" close-icon-position="top-left" @click-close-icon="onClickCloseIcon"
        v-model:show="isCommentReply" round position="bottom" :style="{ height: '94%' }">
        <div class="reply-inner">
            <div class="main-comment">
                <h3>评论回复</h3>
                <CommentItem @show-more="showMore" :item="list[0]" />
            </div>
            <div class="reply-content">
                <van-row justify="space-between">
                    <van-col span="5">回复 {{ total }}</van-col>
                </van-row>
                <CommentItem @show-more="showMore" v-for="item in subList" :item="item" />
            </div>
        </div>
        <div class="no-data" align="center">没有更多内容</div>
    </van-popup>
    <CommentMore :item="moreObj" v-if="isMore" :isMore="isMore" @hide-more="hideMore" />
</template>
<style scoped lang='scss'>
.reply-inner {
    background: #f5f4f4;

    .main-comment {
        background: #fff;
        padding: 2% 3% 4% 3%;
        h3 {
            line-height: 50px;
            text-align: center;
        }
    }

    .reply-content {
        background: #fff;
        padding: 2% 3% 4% 3%;

        font-size: 13px;
        margin-top: 14px;
    }

}
.no-data {
    color: #525151;
    padding: 20px 0;
    font-size: 14px;
}
</style>
