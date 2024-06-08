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
    { name: '反对', icon: 'info-o' },
    { name: '弹评', icon: 'guide-o' },
    { name: '加入浮窗', icon: 'completed-o' },
    { name: '阅读设置', icon: 'setting-o' },
    { name: '联系小管家', icon: 'notes-o' },
],];

const onSelect = (option, index) => {
    console.log(option, index)
    showToast('待完善中');
    switch (index) {
        case 0:
            if (option.icon === 'info-o') {
                options[1].icon = 'info';
                showToast('已反对');
            } else {
                options[1][0].icon = 'info-o';
                showToast('已已取消');
            }
            break;
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
        case 6:
            break;
        case 7:
            break;
        case 8:
            break;
        default:
            break;
    }
};

const emit = defineEmits(['hideShare']);
const clickOverlay = () => {
    emit('hideShare');
}
</script>
<template>
    <van-share-sheet v-model:show="showShare" title="分享到..." cancel-text="" :options="options" @select="onSelect"
        @click-overlay="clickOverlay" />
</template>
<style scoped lang='scss'></style>