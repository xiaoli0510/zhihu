<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(['item']);
const router = useRouter();
const enterSearch = () => {
    router.push('/search');
} 
</script>
<template>
      <van-icon :name="props?.item?.iconName||'search'" :size="props?.item?.iconSize||'20px'" @click="enterSearch"/>
</template>
<style scoped lang='scss'>
</style>
