<script setup lang='ts'>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['list']);
const showEye=ref(false);
const toggleEye = ()=>{
    showEye.value=!showEye.value;
}

const router = useRouter();
const enterResult = (item) => {
    router.push(`/result/${item.word}`);
}

const refresh = ()=>{
    
}
</script>
<template>
    <van-row class="guess-top" justify="space-between">
        <van-col span="7">
            <span class="type">猜你想搜</span>
        </van-col>
        <van-col span="3">
            <van-icon name="replay" color="rgb(136 130 130)" class="refresh" @click="refresh"/>
            <van-icon name="closed-eye" color="rgb(136 130 130)" v-show="!showEye" @click="toggleEye"/>
            <van-icon name="eye-o" color="rgb(136 130 130)" v-show="showEye" @click="toggleEye"/>
        </van-col>
    </van-row>
    <div class="guess-content" v-show="!showEye">
        <div class="name" v-for="(item,index) in props.list" :key="index" @click="enterResult(item)">
            <span>{{ item.word}}</span>
            <van-tag color="rgb(238 242 248)" text-color="#1989fa" v-if="item.type===1">新</van-tag>
            <van-tag color="rgb(245 238 238)" v-if="item.type===2"
                        text-color="rgb(207, 40, 40)">热</van-tag>
        </div>
    </div>

</template>
<style scoped lang='scss'>
.guess-top{
    font-size:14px;
    font-weight: 700;
    line-height: 30px;
    .type{
        border-left:4px solid #1989fa;
        padding:0 4px;
    }
    .refresh{
        margin-right:7px;
    }
}
.guess-content{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between; 
    .name{
        width:49%;
        display:flex;
        justify-content: space-between;
        padding: 7px 4px;
        font-size:12px;
    }
    
}
</style>
