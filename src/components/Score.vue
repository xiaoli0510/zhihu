<script setup>
const props = defineProps(['score']);
const score = props.score; 
</script>
<template>
    <span class="score">{{ score }}</span>
    <van-icon name="star" color="#f5500f" size="14px" v-for="i in Math.ceil(parseFloat(score / 2))" />
</template>
<style scoped lang='scss'>
.score {
    color: #f5500f;
    font-size: 12px;
}
</style>
