<script setup>
// book分享
import { ref } from 'vue';
import Panel from './Panel.vue'
import ShareIcon from './ShareIcon.vue'
import ReadSet from './ReadSet.vue'
import MoreShare from '@/components/BookShare/MoreShare.vue'
const props = defineProps(['data']);
//分享面板
const isShare = ref(false);
const showShare = () => {
    isShare.value = true;
}
const hideShare = () => {
    isShare.value = false;
}

const isReadset = ref(false);
//显示阅读设置弹框
const showReadSet = () => {
    isReadset.value = true;
    hideShare();
}
//关闭阅读设置弹框
const hideReadset = () => {
    isReadset.value = false;
}
//打开更多分享
const isMoreShare = ref(false);
const showMoreShare = () => {
    isMoreShare.value = true;
    hideShare();
}
// 关闭更多分享
const hideMoreShare = () => {
    isMoreShare.value = false;
}

</script>
<template>
    <Panel :data="props.data" :isShare="isShare" @hideShare="hideShare" v-if="isShare" @showReadSet="showReadSet"
        @showMoreShare="showMoreShare" />
    <ShareIcon @showShare="showShare" :data="props.data" />
    <!-- 更多分享 -->
    <MoreShare v-if="isMoreShare" :isMoreShare="isMoreShare" @hideMoreShare="hideMoreShare" />
    <!-- 阅读设置 -->
    <ReadSet @close="hideReadset" :isReadset="isReadset" v-if="isReadset"/>
</template>
<style scoped lang='scss'>
</style>
