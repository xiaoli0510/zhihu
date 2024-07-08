<script setup lang='ts'>
import { useRouter } from 'vue-router';
const router = useRouter();
const props = defineProps({
    color:{
        type:String,
    },
    size:{
        type:String,
    },
    iconName:{
        type:String,
        default:'arrow-left',
    }
})
const back = () => {
    router.go(-1);
};
</script>
<template>
    <van-icon :name="props.iconName" @click="back" :color="props.color" :size="props.size"/>
</template>
<style scoped lang='scss'></style>
