<script setup lang='ts'>
import { ref } from 'vue';
const showMore = ref(false);
const { item } = defineProps(['item']);
const actions = [
    { name: '分享', icon: 'share-o' },
    { name: '关注该作者：', icon: 'manager-o' },
    { name: '举报', icon: 'warning-o' },
];
const showPopupMore = () => {
    showMore.value = true;
};
const onSelect = (item) => {
    showMore.value = false;
};
</script>
<template>
    <van-icon name="ellipsis" @click="showPopupMore" />
    <!-- 右下角更多弹框 -->
    <van-action-sheet v-model:show="showMore" :actions="actions" @select="onSelect" />
</template>
<style scoped lang='scss'></style>
