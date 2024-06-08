<script setup>
import { ref,watch } from 'vue';
const props = defineProps(['isShare']);

const showShare = ref(props.isShare);
watch(() => props.isShare, (val,val1) => {
    console.log('watch',val,val1)
    console.log(val)
    showShare.value = val;
},{
    deep:true
});
const options = [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
];

const onSelect = (option) => {
    showToast(option.name);
    showShare.value = false;
};

const emit = defineEmits(['hideShare']);
const clickOverlay = ()=>{
    // showShare.value=false;
    emit('hideShare');
}
</script>
<template>
    <van-share-sheet v-model:show="showShare" title="立即分享给好友" :options="options" @select="onSelect" @click-overlay="clickOverlay"/>

</template>
<style scoped lang='scss'></style>