<script setup>
import { inject, nextTick, ref, watch } from 'vue';
const props = defineProps(['show', 'item']);
const toggleLinkPopup = inject('toggleLinkPopup');
const sureAddLink = inject('sureAddLink');
const obj = Object.assign({
    address: '',
    text: '',
    isLink: true,
    isCard: false,
}, props.item.value || {});
const currentItem = ref(obj);
// const currentItem = Object.assign({
//     address: '',
//     text: '',
//     isLink: true,
//     isCard: false,
// }, props.item || {});
const inputAddress = ref(null);

const showLinkPopup = ref(props.show);
watch(() => props.show, (newVal) => {
    showLinkPopup.value = newVal;
    setTimeout(() => {
        nextTick(() => {
            inputAddress.value?.focus();
        })
    }, 0)
}, {
    immediate: true
})
const confirm = () => {
    if (!currentItem.value.address) {
        return showToast('请输入链接地址！');
    }
    sureAddLink(currentItem.value);
    //currentItem.value={};
}
const beforeClose = (action) => {
    if (action === 'confirm') {
        if (!currentItem.value.address) return false;
        toggleLinkPopup();
        currentItem.value = {
            address: '',
            text: '',
            isLink: true,
            isCard: false,
        };
    } else {
        toggleLinkPopup();
        return true;
    }
}

const cancelLink = () => {
    changeLink({ isLink: false });
    toggleLinkPopup();
}
</script>
<template>
    <van-dialog v-model:show="showLinkPopup" show-cancel-button style="padding:20px;" @confirm="confirm"
        :before-close="beforeClose">
        <h3>插入超链接</h3>
        <van-cell-group inset>
            <van-field v-model="currentItem.address" placeholder="插入链接地址(必填)" ref="inputAddress" autofocus />
            <van-field v-model="currentItem.text" placeholder="输入链接文本(可选)" />
        </van-cell-group>
        <div class="gray-font cancel-link" v-if="props.item?.address" @click="cancelLink">取消超链接</div>
    </van-dialog>
</template>
<style scoped lang='scss'>
.cancel-link {
    line-height: 30px;
    margin-top: 20px;
    width: 80%;
    margin: 0 auto;
}
</style>
