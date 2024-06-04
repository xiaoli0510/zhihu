<script setup>
import { fetchResultList } from '@/api/result.js';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import ResultItem from '../ResultItem.vue'
import CommonSearch from '../CommonSearch.vue'
import { showToast } from 'vant';
const props = defineProps(['type']);
const type = props.type;
// 获取搜索结果
const list = ref((await fetchResultList({type})).data.body.list)

const router = useRouter();
const enterDetail = (id) => {
    router.push({
        path: '/detail',
        query: {
            id
        }
    })
}

const active = ref(0);
const handleMore = () => {
    active.value = 1;
};

const ask = ()=>{
    showToast('等待完善中');
}
</script>
<template>
    <van-row justify="space-between" class="suggest">
        <van-col span="4" @click="enterDetail(list[0].id)">
            <van-icon name="fire" color="#ee0a24" />
            <span class="elite-txt">精华</span>
        </van-col>
        <van-col span="4" @click="handleMore">
            <span class="more-txt">更多</span>
            <van-icon name="arrow" color="#8f8c8c" />
        </van-col>
    </van-row>
    <div v-for="(item, index) in list" :key="index">
        <ResultItem :item="item" />
        <CommonSearch v-if="index === 3" />
        <CommonSearch v-if="index === 7" />
        <CommonSearch v-if="index === 11" />
    </div>
    
    <div class="question-bottom">
        <van-button round size="large" type="primary" @click="ask">向知友提问</van-button>
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
.question-bottom{
    background:#fff;
    padding:5px 10px;
    position: fixed;
    bottom:0;
    left:0;
    right:0;

}
</style>
