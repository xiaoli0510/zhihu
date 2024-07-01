<script setup>
import { useRoute, useRouter } from 'vue-router';

const props = defineProps(['data']);
const router =useRouter();
const route = useRoute();
const enterNovelHome= ()=>{
    const path = `/novel/home/${props.data.id}`;
    route.path!==path?router.push(path):'';
}
</script>
<template>
    <van-row @click="enterNovelHome">
        <van-col>
            <van-image width="17" height="20" radius="4px" :src="props.data.cover" />
        </van-col>
        <van-col>
            <van-text-ellipsis :content="props.data.title" />
        </van-col>
    </van-row>
</template>
<style scoped lang='scss'></style>
