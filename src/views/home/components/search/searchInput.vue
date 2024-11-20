<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const selfKeyWord = ref('');
selfKeyWord.value = route.params.keyWord
const onSearch = (val) => showToast(val);
const onClickButton = () => {
    if(selfKeyWord.value  ===  '') return;
    
};
</script>
<template>
    <van-search shape="round" v-model="selfKeyWord" show-action placeholder="搜索知乎内容" @search="onSearch">
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
