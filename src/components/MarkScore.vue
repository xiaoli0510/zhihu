<script setup>
import { ref } from 'vue';

const isShow = ref(true);
const obj = ref({
    author: 'zz',
    score:3,
});
const SCORE_TXT = {
    1: '极不满意',
    2: '不满意',
    3: '一般',
    4: '比较满意',
    5: '非常满意',
}

const toggleScore = (index) => {
    obj.value.score = index +1;
}


</script>
<template>
    <van-popup v-model:show="isShow" round closeable close-icon="close" position="bottom"
        :style="{ height: '95%', padding: '10px' }">
        <p>付费阅读内容仅会员可评论</p>
        <div class="mark-wrap">
            <h3>明I</h3>
            <p class="score-tip">这是我知乎评价的第一个内容</p>
            <van-icon name="star" :color="index<=obj.score-1?'#f5500f':'rgb(230 187 170)'" size="20px" v-for="(i, index) in 5"
                @click="toggleScore(index)" />
            <!-- <van-icon name="star" :color="obj.score<=activeIndex?'#f5500f':rgb(230 187 170)" size="20px" v-for="(i, index) in 5"
                @click="toggleScore(index)" /> -->
            <!-- <van-icon name="star" color="#f5500f" size="14px" v-for="i in 5" /> -->
            <p v-show="obj.score > 0" class="score-txt">{{ SCORE_TXT[obj.score] }}</p>
        </div>
    </van-popup>
</template>
<style scoped lang='scss'>
.mark-wrap {
    background: #f7f7f7;
    border-radius: 9px;
    width: 94%;
    padding: 10px 0 40px 0;
    margin: 30px auto 40px;
    text-align: center;
    line-height: 30px;

    .score-tip {
        color: #686666;
        font-size: 12px;
    }
    .score-txt{
        font-size:10px;
        color:#f5500f;
    }
}
</style>
