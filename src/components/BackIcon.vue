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
    <span @click="back">
        <slot name="iconTxt">
            <van-icon :name="props.iconName" :color="props.color" :size="props.size"/>
        </slot>
    </span>
</template>
<style scoped lang='scss'></style>
