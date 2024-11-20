<template>
    <van-row justify="space-between" align="center">
        <van-col span="21">
            <van-tabs v-model:active="active">
                <van-tab v-for="(item, key) in TABTYPE" :title="item" :key="key">
                    <!-- 内容 {{ key }} -->
                </van-tab>
            </van-tabs>
        </van-col>
        <van-col span="2"><van-icon name="list-switch" /></van-col>
    </van-row>
    <div class="search-wrap">
        <van-row justify="space-between" align="center">
            <van-col span="21" @click="enterSearch">
                <span>{{ keyWordList[keyWordIndex].name }}</span>
            </van-col>
            <van-col class="search-txt" @click="enterResult">| 搜索</van-col>
        </van-row>
    </div>
    <SuggestItem />
</template>
<script setup>
import { ref } from 'vue';
import SuggestItem from './SuggestItem.vue'
import { useRouter } from 'vue-router';
import { fetchKeyWordHot } from '@/api/index.js';
const keyWord = ref('');
const keyWordIndex = ref(0);
let keyWordList = [];
fetchKeyWordHot().then(res => {
    keyWordList = res.data.body.list;
}).catch(err => {
    console.log(err);
})
const play = setInterval(function () {
    if (keyWordIndex.value < keyWordList.length - 1) {
        keyWordIndex.value += 1;
    }
}, 2000);

const router = useRouter();
const enterSearch = () => {
    router.push('/search');
}
const enterResult = () => {
    router.push(`/result/${keyWord.value}`);
}
const TABTYPE = {
    0: '全站',
    1: 'AI学习',
    2: '直播',
    3: '科学',
    4: '心理',
    5: '影视',
    6: '娱乐',
    7: '校园',
    8: '时尚',
    9: '数码',
    10: '体育',
    11: '游戏',
    12: '亲子',
    13: '财经',
    14: '法律',
    15: '职场',
    16: '宠物',
    17: '旅行',
    18: '动漫',
    19: '高赞',
    20: '知识',
    21: '脑洞',
    22: '汽车',
    23: '家居',
    24: '深圳',
    25: '考研',
    26: '美食',
    27: '故事',
    28: '电竞',
    29: '健康',
}
const active = ref(0);

</script>
<style scoped lang='scss'>
.search-wrap {
    width: 95%;
    margin: 10px auto;
    line-height: 30px;
    border-radius: 20px;
    padding: 0 10px;
    border: 1px solid var(--color-blue-text);

    .search-txt {
        color: var(--color-blue-text);
    }
}
</style>
