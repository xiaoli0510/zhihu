<script setup lang='ts'>
import { ref } from 'vue';

const list = ref([
    {
        title: '这是标题',
        sentence: '这是一句话',
        info: {
            agree: 459,
            evaluate: 110,
            time: '05-18'
        }
    },
    {
        title: '这是标题',
        sentence: '这是一句话',
        info: {
            agree: 459,
            evaluate: 110,
            time: '05-18'
        }
    }
]);

const handleDelete = (index)=>{
    list.value.splice(index,1);
}
</script>
<template>
    <div class="result-item" v-for="(item, index) in list" :key="index">
        <h3>{{ item.title }}</h3>
        <div class="sentence">
            {{ item.sentence }}
        </div>
        <van-row justify="space-between" class="result-info">
            <van-col span="17">
                <span> {{ item.info.agree }}赞同</span>
                <span> {{ item.info.evaluate }}评价</span>
                <span>{{ item.info.time }}</span>
            </van-col>
            <van-col span="1">
                <van-icon name="cross" @click="handleDelete(index)"/>
            </van-col>
        </van-row>
    </div>
</template>
<style scoped lang='scss'>
.result-item {
    background: #fff;
    padding: 10px;
    margin-top: 10px;
    width:100%;

    h3 {
        line-height: 40px;
        font-weight: 700;
    }

    .sentence,
    .result-info {
        font-size: 12px;
        line-height: 20px;
    }

    .result-info {
        color: #837f7f;

        span {
            margin-right: 3px;
        }
    }
}
</style>
