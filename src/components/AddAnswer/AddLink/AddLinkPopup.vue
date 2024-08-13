<script setup>
import { nextTick, ref, watch } from 'vue';
const props = defineProps(['show']);
const emits = defineEmits(['toggle']);
const inputAddress = ref(null);

const showLinkPopup = ref(props.show);
watch(()=>props.show,(newVal,oldVal)=>{

    console.log(newVal,oldVal)
    showLinkPopup.value = newVal;
    nextTick(()=>{
        inputAddress.value?.focus();
    })
},{
    immediate:true
})
const link = ref({
    address: '',
    text: '',
})
// const showPopup = () => {
//     link.value = { address: '', text: '' };
//     showLinkPopup.value = true;
//     setTimeout(() => {
//         nextTick(() => {
//             console.log(inputAddress.value)
//             inputAddress.value?.focus();
//         })
//     }, 0);
// }

const confirm = () => {
    if (!link.value.address) {
        return showToast('请输入链接地址！');
    }
    emits('addLink', link.value);
}
const beforeClose = (action) => {
    if (action === 'confirm' && !link.value.address){
        return false;
    }else{
        emits('toggle',link.value);
        return true;
    }
}
</script>
<template>
    <!-- <van-icon name="link-o" size="30px" @click="showPopup"/> -->
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
