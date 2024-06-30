<script setup>
import BookIcon from './BookIcon.vue'
import AddBookMessage from './AddBookMessage.vue'
import { ref, watch } from 'vue'
const props = defineProps(['isHas','isClick']);
const isMsg = ref(false);
watch(props, (newVal, oldVal) => {
    //首次渲染时不提示
    if (oldVal === undefined) {
        return;
    }
    //修改url的id时，未点击按钮时不提示
    if(!newVal.isClick){
        return;
    }
    if (newVal.isHas) {
        isMsg.value = true;
    } else {
        isMsg.value = false;
        showToast('已移出书架');
    }
})
</script>
<template>
    <BookIcon :isHas="props.isHas" />
    <van-toast v-model:show="isMsg" style="padding: 10px" word-break="'break-word'">
        <template #message>
            <AddBookMessage />
        </template>
    </van-toast>
</template>
<style scoped lang='scss'></style>
