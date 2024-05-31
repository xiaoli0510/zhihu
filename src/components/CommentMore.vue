<script setup>
import { ref, watch } from 'vue';
import Clipboard from 'clipboard';
import { showToast } from 'vant';
import { useRouter } from 'vue-router';

// 显示更多
const props = defineProps(['item','isMore']);
const item = ref(props.item);
const isShow = ref(props.isMore);
watch(()=>props.isMore, (newValue) => {
    if(newValue){
        isShow.value=newValue;
    }
})

//复制
const copy = (text) => {
    let clipboard = new Clipboard('.copy', {
        text: function () {
            return text;
        }
    })
    clipboard.on('success', (e) => {
        showToast('已保存内容到剪贴板');
        emit('hideMore');
    })
}

//踩评论
const toggleComment = () => {
    if (item.value.isAgree) {
        item.value.agreeCount--;
        item.value.isAgree = false;
        showToast('已踩评论');
    } else {
        item.value.agreeCount++;
        item.value.isAgree = true;
        showToast('已取消踩');
    }
    emit('hideMore');
}

//举报
const router = useRouter();
const enterReport = () => {
    isShow.value = false;
    router.push('/report');
}

//屏蔽用户
const shield = () => {
    showConfirmDialog({
        title: '确认要屏蔽该用户？',
        message:
            '屏蔽后，对方将不能关注你、向你发私信、评论你的实名回答、使用【@】提及你、邀请你回答问题等，但仍然可以查看你的公开信息。',
    })
        .then(() => {
            showToast(`用户 ${item.value.name} 已经加入黑名单`);
        })
        .catch(() => {
        }).finally(() => {
            emit('hideMore');
        });
}

const emit = defineEmits(['hideMore']);
//点击遮罩层
const onClickOverlay = () => {
    isShow.value=false;
    emit('hideMore')
}
</script>
<template>
    <van-popup v-model:show="isShow" position="bottom" :style="{ height: '30%' }"  @click-overlay="onClickOverlay">
        <van-row justify="start" class="comment-more copy" @click="copy(item.sentence)">
            <van-col><van-icon name="records-o" color="rgb(31 30 30)" size="20px" /></van-col>
            <van-col offset="1">拷贝</van-col>
        </van-row>
        <van-row justify="start" class="comment-more" @click="toggleComment">
            <van-col><van-icon name="umbrella-circle" color="rgb(31 30 30)" size="20px" /></van-col>
            <van-col offset="1">{{ item.isAgree ? '踩评论' : '取消踩' }}</van-col>
        </van-row>
        <van-row justify="start" class="comment-more" @click="enterReport">
            <van-col><van-icon name="chat" color="rgb(31 30 30)" size="20px" /></van-col>
            <van-col offset="1">举报</van-col>
        </van-row>
        <van-row justify="start" class="comment-more" @click="shield">
            <van-col><van-icon name="delete" color="rgb(31 30 30)" size="20px" /></van-col>
            <van-col offset="1">屏蔽用户</van-col>
        </van-row>
    </van-popup>
</template>
<style scoped lang='scss'>

.comment-more {
    line-height: 40px;
    padding: 10px;
    font-size: 12px;
}
</style>
