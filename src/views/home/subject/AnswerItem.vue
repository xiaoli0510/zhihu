<script setup>
import { useRouter } from 'vue-router';
const props = defineProps(['item']);
const router = useRouter();
const enterDetail = ()=>{
    router.push('/waitAnswerDetail');
}
</script>
<template>
    <div class="wait-item" @click="enterDetail">
        <van-row justify="start" align="center">
            <van-col align="center">
                <van-image round width="22px" height="22px" :src="props.item.avatar" />
            </van-col>
            <van-col offset="1" align="center">
                <span class="name">{{ props.item.author }}</span>
                <span class="gray-font"> 的提问</span>
            </van-col>
        </van-row>
        <h3>{{ props.item.title }}?</h3>
        <van-row justify="space-between" class="footer">
            <van-col span="17">
                <span>{{ props.item.answer }}回答.</span>
                <span>{{ props.item.beFollow }}关注</span>
            </van-col>
        </van-row>
    </div>
</template>
<style scoped lang='scss'>
.wait-item {
    padding: 3%;
    background: #fff;
    margin-top: 3%;
    &:nth-child(1){
        margin-top:0;
    }

    .name {
        font-size: 10px;
    }

    .sentence {
        color: #666666;
        font-size: 12px;
        margin: 10px 0;
    }

    .footer {
        color: #666666;
        font-size: 12px;
    }
}
</style>
