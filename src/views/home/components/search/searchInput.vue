<script setup lang='ts'>
import { ref } from 'vue';
const value2 = ref('');
const onSearch = (val) => showToast(val);
const onClickButton = () => showToast(value.value);

</script>
<template>
    <van-search shape="round" v-model="value2" show-action placeholder="搜索知乎内容" @search="onSearch">
        <template #action>
            <div @click="onClickButton" class="btn-search">搜索</div>
        </template>
    </van-search>
</template>
<style scoped lang='scss'>
.btn-search {
    color: #1989fa;
    font-size: 14px;
    font-weight: 700;
}
</style>
