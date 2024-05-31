<script setup lang='ts'>
import { fetchResultList } from '@/api/result.js';
import { ref } from 'vue';
import ResultItem from '../ResultItem.vue'
import { showToast } from 'vant';
const props = defineProps(['type']);
// 获取搜索结果
const list = ref([]);
fetchResultList({ type: props.type }).then(res => {
    list.value = res.data.body.list;
}).catch(err => {
    console.log(err);
})

const ask = ()=>{
    showToast('等待完善中');
}
</script>
<template>
    <div v-for="(item,index) in list" :key="index">
        <ResultItem :item="item" />
    </div>
    <div class="ask-wrap" align="center">
        <van-icon name="smile-comment-o" size="80" />
        <div class="txt">没有满意结果？提问快速获得回答</div>
        <van-button plain type="primary" @click="ask">立即提问</van-button>
    </div>
</template>
<style scoped lang='scss'>
.suggest {
    background: #fff;
    line-height: 64px;
    padding: 0 10px;
    font-size: 15px;

    .elite-txt {
        font-weight: 700;
        margin-left: 10px;
    }

    .more-txt {
        color: #8f8c8c;
        margin-right: 5px;
        font-size: 13px;
    }
}
.ask-wrap{
    color:#4e4d4d;
    padding:70px 0 20px 0;
    .txt{
        line-height: 50px;
    }
}
</style>
