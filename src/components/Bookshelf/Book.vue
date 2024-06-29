<script setup>
import BookIcon from './BookIcon.vue'
import AddBookMessage from './AddBookMessage.vue'
import { ref } from 'vue'

const isAddBookMessage = ref(false);

const showMsg = ()=>{

}
    
</script>
<template>
    <BookIcon />
    
    <van-toast v-model:show="isAddBookMessage" style="padding: 10px" word-break="'break-word'">
        <template #message>
            <AddBookMessage />
        </template>
    </van-toast>
</template>
<style scoped lang='scss'>
</style>
