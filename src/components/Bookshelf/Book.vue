<script setup>
import BookIcon from './BookIcon.vue'
import AddBookMessage from './AddBookMessage.vue'
import { ref, watch } from 'vue'
const props = defineProps(['isHas']);
const isMsg = ref(false);
watch(() => props.isHas, (newVal, oldVal) => {
    if (oldVal === undefined) {
        return;
    }
    if (newVal) {
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
