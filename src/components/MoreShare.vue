<script setup>
import { ref } from 'vue';
const props = defineProps(['isMoreShare']);
const show = ref(props.isMoreShare);
const options = [
    [
        { name: '蓝牙', icon: 'award' },
        { name: '信息', icon: 'comment-circle' },
        { name: '华为分享', icon: 'share' },
        { name: 'WLAN直连', icon: 'sort' },
        { name: '电子邮件', icon: 'printer' },],[
        { name: '花粉俱乐部', icon: 'point-gift' },
        { name: '保存到网盘', icon: 'completed' },
        { name: '备忘录', icon: 'completed' },
        { name: '高德地图', icon: 'location' },
        { name: '快传...小', icon: 'smile' },],[
        { name: '保存...空间', icon: 'smile' },
        { name: '保存到网盘', icon: 'smile' },
        { name: '转发到百度', icon: 'shop' },
        { name: '收藏到百度', icon: 'shop' },
        { name: '用百度打开', icon: 'shop' },],[
        { name: '支付宝', icon: 'alipay' }, 
        { name: '京东', icon: 'cart-circle' },
        { name: '今日头条', icon: 'fire' },
        { name: '发送给朋友', icon: 'wechat' },
        { name: '添加...收藏', icon: 'send-gift' },],[
        { name: '发送给好友', icon: 'send-gift' },
        { name: '发送...电脑', icon: 'expand' },
        { name: '保存...收藏', icon: 'goods-collect' },
        { name: '发送给同事', icon: 'stop-circle' },
        { name: '保存到微盘', icon: 'star' },],[
        { name: '语雀', icon: 'smile-comment' },
        { name: '知乎想法', icon: 'question' },
        { name: '知乎私信', icon: 'share' },
        { name: '发送...状态', icon: 'enlarge' },
        { name: '发送朋友圈', icon: 'wechat-moments' },
    ]
];
const emit = defineEmits(['hideMoreShare']);
const clickOverlay = ()=>{
    emit('hideMoreShare');
}

</script>
<template>
    <van-share-sheet v-model:show="show" title="分享到..." cancel-text="" :options="options" @click-overlay="clickOverlay"/>
</template>
<style scoped lang='scss'></style>
