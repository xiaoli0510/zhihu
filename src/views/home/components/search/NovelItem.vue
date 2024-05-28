<script setup>
import { ref,inject } from 'vue';
import { useRouter } from 'vue-router';
import Feedback from './Feedback.vue'
const props = defineProps(['id', 'item']);
const item = ref(props.item);
const keyWord = inject('keyWord');

const isModalSheet = ref(false);
const handleReport = (id) => {
    isModalSheet.value = true;
}
const onSelect = () => {
    isModalSheet.value = false;
};

const router = useRouter();
const enterDetail = (id) => {
    router.push(`/novel/datail/${id}`)
}
const NOVELIYPE = {
    0: '全部',
    1: '言情',
    2: '现实情感',
    3: '爽文',
    4: '大女主',
    5: '家庭',
    6: '复仇',
    7: '恐怖',
    8: '追妻火葬场',
    9: '脑洞',
    10: '悬疑',
    11: '病娇',
    12: '娱乐圈',
    13: '沙雕文',
    14: '重生',
}
</script>
<template>
    <div class="novel-item" @click="enterDetail(item.id)">
        <div class="novel-item-inner">
            <h3>{{ item.title }}</h3>
            <div class="state">{{ NOVELIYPE[item.type] }}·{{item.feature}}·<span>{{item.statu===0?'已':'未'}}完结</span></div>
            <div class="sentence">
                {{ item.sentence }}
            </div>
            <van-row justify="space-between" class="result-info">
                <van-col span="17">
                    <span>盐选专栏</span><span>·</span>
                    <span v-if="item.info.agree>0"> {{ item.info.agree }}赞同</span><span>·</span>
                    <span v-if="item.info.evaluate>0"> {{ item.info.evaluate }}评价</span>
                </van-col>
                <van-col span="1">
                    <van-icon name="cross" @click.stop="handleReport(item.id)" />
                </van-col>
            </van-row>
        </div>
    </div>
    <Feedback @select="onSelect" :isModalSheet="isModalSheet" v-if="isModalSheet" />
</template>
<style scoped lang='scss'>
.novel-item {
    background: #fff;

    &:first-of-type {
        margin-top: 10px;
    }

    .novel-item-inner {
        padding: 10px;
        width: 97%;
        margin: 0 auto;
        border-bottom: 1px solid #e6e4e4;

        h3 {
            line-height: 40px;
            font-weight: 700;
        }

        .sentence,
        .result-info,
        .state {
            font-size: 12px;
            line-height: 22px;
        }

        .result-info,
        .state {
            font-size: 11px;
            color: #837f7f;

            span {
                margin-right: 3px;
            }
        }
    }
}
</style>
