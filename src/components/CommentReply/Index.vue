<script setup>
import CommentIcon from './CommentIcon.vue'
import CommentPopup from './CommentPopup.vue'
import CommentMore from './CommentMore.vue'
import Discuss from './Discuss.vue'
import Reply from './Reply.vue'
import { provide, ref } from 'vue'
const props = defineProps(['item','id']);
// 显示关闭讨论
const isDiscuss = ref(false);
const discussParams = ref({
    fileList: [],
    discussValue: '',
    isSyncIdea: false
});
const toggleDiscuss = (item) => {
    isDiscuss.value = !isDiscuss.value;
    !isDiscuss.value?discussParams.value = item:'';
}
provide('toggleDiscuss',toggleDiscuss);

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
provide('submitDiscuss',submitDiscuss)

//显示关闭回复弹框
const isReply = ref(false);
const replyId = ref(0);
const toggleReply = (id) => {
    isReply.value = !isReply.value;
    replyId.value = id?id:0;
}
provide('toggleReply', toggleReply);

//显示关闭评论弹框
const isCommentPopup = ref(false);
const togglePopup = ()=>{
    console.log('CommentReply')
    isCommentPopup.value=!isCommentPopup.value;
}

// 显示关闭更多
const isMore = ref(false);
const moreObj = ref(null);
const toggleMore = (item) => {
    isMore.value = !isMore.value;
    moreObj.value = item?item:null;
}
provide('toggleMore',toggleMore);

</script>
<template>
    <slot>
        <CommentIcon :item="props.item" @togglePopup="togglePopup" />
    </slot>
    <CommentPopup :isCommentPopup="isCommentPopup" @ ="togglePopup" v-if="isCommentPopup" />
    <CommentMore :item="moreObj" v-if="isMore" :isMore="isMore" />
    <!-- 讨论 -->
    <Discuss @submit-discuss="submitDiscuss" v-if="isDiscuss" :data={isDiscuss,discussParams} />
    <Reply :isReply="isReply" :id="props.id" v-if="isReply" />

</template>
<style scoped lang='scss'></style>