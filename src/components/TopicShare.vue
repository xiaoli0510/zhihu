<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['isShare']);

const showShare = ref(props.isShare);
watch(() => props.isShare, (val, val1) => {
    console.log('watch', val, val1)
    console.log(val)
    showShare.value = val;
}, {
    deep: true
});
const options = [[
    { name: '微信好友', icon: 'wechat' },
    { name: 'QQ', icon: 'qq' },
    { name: '复制链接', icon: 'link' },
    { name: '朋友圈', icon: 'wechat-moments' },
    { name: '分享到想法', icon: 'cluster' },
    { name: '生成长图', icon: 'photo' },
    { name: '知乎私信', icon: 'share' },
    { name: 'QQ空间', icon: 'star' },
    { name: '更多', icon: 'weapp-nav' },
],
[
    { name: '喜欢111', icon: 'like-o' },
    { name: '反对', icon: 'warn-o' },
    { name: '帮上热门', icon: 'good-job-o' },
    { name: '邀请回答', icon: 'add-o' },
    { name: '赞赏答主', icon: 'point-gift-o' },
],];

const onSelect = (option) => {
    showToast(option.name);
    showShare.value = false;
};

const emit = defineEmits(['hideShare']);
const clickOverlay = () => {
    // showShare.value=false;
    emit('hideShare');
}
</script>
<template>
    <van-share-sheet v-model:show="showShare" title="立即分享给好友" cancel-text="" :options="options" @select="onSelect"
        @click-overlay="clickOverlay"/>

</template>
<style scoped lang='scss'></style>