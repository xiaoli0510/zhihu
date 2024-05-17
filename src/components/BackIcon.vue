<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter();
const {color,size} = defineProps(['color','size']);
const back = () => {
    router.go(-1);
};
</script>
<template>
    <van-icon name="arrow-left" @click="back" :color="color" :size="size"/>
</template>
<style scoped lang='scss'></style>
