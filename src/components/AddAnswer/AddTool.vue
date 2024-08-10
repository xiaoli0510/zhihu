<script setup>
import { nextTick, ref } from 'vue';

const addList = ref([{
    iconName: 'link-o',
    txt: '添加链接'
}, {
    iconName: 'video-o',
    txt: '添加视频'
}, {
    iconName: 'notes-o',
    txt: '引用文章'
}, {
    iconName: 'bulb-o',
    txt: '添加附件'
}, {
    iconName: 'comment-circle-o',
    txt: '提到'
}, {
    iconName: 'clock-o',
    txt: '历史版本'
}]);
const showLinkPopup = ref(false);
const link = ref({
    address: '',
    text: '',
})
const emits = defineEmits(['addLink']);
const confirm = () => {
    if (!link.value.address) {
        return showToast('请输入链接地址！');
    }
    emits('addLink', link.value);
}
const beforeClose = (action) => {
    if (action === 'confirm' && !link.value.address) return false;
    return true;
}

const inputAddress = ref(null);
const changeTool = (index) => {
    if (index === 0) {
        link.value = { address: '', text: '' };
        showLinkPopup.value = true;
        setTimeout(() => {
            nextTick(() => {
                console.log(inputAddress.value)
                inputAddress.value?.focus();
            })
        }, 0);
    }
}

const videoList = ref([]);
const afterRead = (file) => {
    console.log(file)
    videoList.value.push({
        url: file.objectUrl
    })
};
</script>
<template>
    <van-grid :gutter="10">
        <van-grid-item v-for="(item, index) in addList" :key="index" :icon="item.iconName" :text="item.txt"
            @click="changeTool(index)" />
    </van-grid>

    <van-uploader :after-read="afterRead" v-model="videoList" multiple accept="video/*" />



    <van-dialog v-model:show="showLinkPopup" show-cancel-button style="padding:20px;" @confirm="confirm"
        :before-close="beforeClose">
        <h3>插入超链接</h3>
        <van-cell-group inset>
            <van-field v-model="link.address" placeholder="插入链接地址(必填)" ref="inputAddress" />
            <van-field v-model="link.text" placeholder="输入链接文本(可选)" />
        </van-cell-group>
    </van-dialog>
</template>
<style scoped lang='scss'></style>
