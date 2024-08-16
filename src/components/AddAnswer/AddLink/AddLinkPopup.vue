<script setup>
import { inject, nextTick, ref, watch, watchEffect } from 'vue';
const props = defineProps(['show', 'item', 'index']);
const toggleLinkPopup = inject('toggleLinkPopup');
const sureAddLink = inject('sureAddLink');
const emits = defineEmits(['close', 'changeLink']);

const inputAddress = ref(null);
const showLinkPopup = ref(props.show);
const currentItem = ref({
    address: '',
    text: '',
    isLink: true,
    isCard: false,
});
watch(
    () => props.index, (newIndex, preIndex) => {
        //在更新和新增两者切换时，且当前是新增时，初始化currentItem
        newIndex !== preIndex && newIndex === -1 ? currentItem.value = {
            address: '',
            text: '',
            isLink: true,
            isCard: false,
        } : '';
    }, { immediate: true });

watchEffect(() => {
    props.item?.address ? currentItem.value = JSON.parse(JSON.stringify(props.item)) : '';
    showLinkPopup.value = props.show;
    showLinkPopup.value ? setTimeout(() => {
        nextTick(() => {
            inputAddress.value?.focus();
        })
    }, 0) : '';
})

const confirm = () => {
    if (!currentItem.value.address) {
        return showToast('请输入链接地址！');
    }
    props?.index === -1 ? sureAddLink(currentItem.value) : emits('changeLink', currentItem.value);
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
    emits('changeLink', { isLink: false });
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
