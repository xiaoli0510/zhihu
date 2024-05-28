<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Feedback from './Feedback.vue'
const props = defineProps(['id','item']);
const item = ref(null);
item.value= props.item;
const isModalSheet = ref(false);


const handleReport = (index) => {
    isModalSheet.value = true;
}
const onSelect = () => {
    isModalSheet.value = false;
};

const router = useRouter();
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
    <div class="novel-item"  @click="enterDetail(item.id)">
        <div>
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
                    <van-icon name="cross" @click.stop="handleReport(item.id)" />
                </van-col>
            </van-row>
        </div>
    </div>
   <Feedback @select="onSelect" v-if="isModalSheet" :isModalSheet="isModalSheet"/>
</template>
<style scoped lang='scss'>
.novel-item {
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
