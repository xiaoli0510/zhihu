<script setup lang='ts'>
import { inject, ref } from 'vue';
const keyWord = ref('');
const onSearch = (val) => showToast(val);
const onClickButton = () => showToast(value.value);
const props = defineProps(['keyWord'])
const injectKeyWord = inject('keyWord','');
keyWord.value=props.keyWord || injectKeyWord;
</script>
<template>
    <van-search shape="round" v-model="keyWord" show-action placeholder="搜索知乎内容" @search="onSearch">
        <template #action>
            <div @click="onClickButton" class="btn-search">
                <slot name="txt"></slot>
            </div>
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
