<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['id','list']);
const list = ref([]);
list.value= props.list;


const isModalSheet = ref(false);
const handleReport = (index) => {
    isModalSheet.value = true;
}

const actions = ref([
    { id:0,name: '和搜索词无关', icon: 'search' },
    { id:1,name: '内容过时', icon: 'clock-o' },
    { id:2,name: '内容不友善', icon: 'bulb-o' },
    { id:3,name: '内容质量差', icon: 'info-o' },
    { id:4,name: '举报', icon: 'question-o' },
]);
const router = useRouter();
const onSelect = (item) => {
    isModalSheet.value = false;
    item.id!==4?showToast('反馈成功'):router.push('/report');
};

const enterDetail=(id)=>{
    router.push({
        path:'/detail',
        query:{
            id
        }
    })
}

</script>
<template>
    <div class="result-item" v-for="(item, index) in list" :key="index" @click="enterDetail(item.id)">
        <h3>{{ item.title }}</h3>
        <div class="sentence">
            {{ item.sentence }}
        </div>
        <van-row justify="space-between" class="result-info">
            <van-col span="17">
                <span> {{ item.info.agree }}赞同</span><span>·</span>
                <span> {{ item.info.evaluate }}评价</span><span>·</span>
                <span>{{ item.info.time }}</span>
            </van-col>
            <van-col span="1">
                <van-icon name="cross" @click="handleReport(index)" />
            </van-col>
        </van-row>
    </div>

    <van-action-sheet v-model:show="isModalSheet" :actions="actions" @select="onSelect" />
</template>
<style scoped lang='scss'>
.result-item {
    background: #fff;
    padding: 10px;
    margin-top: 10px;
    width: 100%;

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
