<script setup>
import { ref } from 'vue';
const isShow = ref(true);
</script>
<template>
    <!-- 圆角弹窗（底部） -->
    <van-popup v-model:show="isShow" round position="bottom" :style="{ height: '30%' }">
       欢迎参与讨论
    </van-popup>
</template>
<style scoped lang='scss'></style>
