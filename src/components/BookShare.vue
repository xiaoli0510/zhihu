<script setup>
import { ref, watch } from 'vue';
import Clipboard from 'clipboard';
import { useRouter } from 'vue-router';
import { useTodoStore } from '@/stores/todo.js';
const todo = useTodoStore();
const props = defineProps(['isShare', 'url', 'item']);
const item = props.item;
const isInList = todo.isInList(item.id);
const emit = defineEmits(['hideShare', 'showReadSet', 'showMoreShare']);
const showShare = ref(props.isShare);
const options = ref([[
    { name: '微信好友', icon: 'wechat', className: 'wechat' },
    { name: 'QQ', icon: 'qq', className: 'qq' },
    { name: '复制链接', icon: 'link', className: 'copy' },
    { name: '朋友圈', icon: 'wechat-moments', className: 'wechatMoments' },
    { name: '分享到想法', icon: 'cluster', className: 'add' },
    { name: '生成长图', icon: 'photo', className: 'photo' },
    { name: '知乎私信', icon: 'share', className: 'private' },
    { name: 'QQ空间', icon: 'star', className: 'qqzone' },
    { name: '更多', icon: 'weapp-nav', className: 'more' },
],
[
    { name: '反对', icon: 'info-o', className: 'oppose' },
    { name: '弹评', icon: 'guide-o', className: 'comment' },
    { name: '加入浮窗', icon: 'completed-o', className: 'floatWindow' },
    { name: '阅读设置', icon: 'setting-o', className: 'readSet' },
    { name: '联系小管家', icon: 'notes-o', className: 'contact' },
],]);
isInList ? options.value[1][2].name = '移出浮窗' : '';
watch(() => props.id, (newVal) => {
    showShare.value = newVal;
});

const router = useRouter();
const onSelect = (option) => {
    const className = option.className;
    switch (className) {
        case 'wechat':
        case 'qq':
        case 'wechatMoments':
        case 'qqzone':
            showToast('待完善中');
            emit('hideShare');
            break;
        case 'copy':
            let clipboard = new Clipboard('.copy', {
                text: function () {
                    return window.location.href;
                }
            })
            clipboard.on('success', (e) => {
                showToast('已复制到剪贴板');
            })
            break;
        case 'add':
            router.push('/add');
            break;
        case 'photo':
            showToast('生成长图');
            break;
        case 'private':
            router.push('/private');
            break;
        case 'more':
            emit('showMoreShare');
            break;
        case 'oppose':
            if (option.icon === 'info-o') {
                options.value[1][0].icon = 'info';
                showToast('已反对');
            } else if (option.icon === 'info') {
                options.value[1][0].icon = 'info-o';
                showToast('已取消');
            }
            break;
        case 'comment':
            router.push('/bullet');
            break;
        case 'floatWindow':
            if (option.name === '加入浮窗') {
                todo.add(item);
                options.value[1][2].name = '移出浮窗';
                router.go(-1);
            } else {
                todo.delete(item.id);
                options.value[1][2].name = '加入浮窗';
                showToast('已移出浮窗');
            }
            break;
        case 'readSet':
            emit('showReadSet');
            break;
        case 'contact':
            router.push('/contact');
            break;
    }
};

const clickOverlay = () => {
    emit('hideShare');
}

</script>
<template>
    <van-share-sheet v-model:show="showShare" title="分享到..." cancel-text="" :options="options" @select="onSelect"
        @click-overlay="clickOverlay">
        <span class="copy"></span>
    </van-share-sheet>
</template>
<style scoped lang='scss'></style>