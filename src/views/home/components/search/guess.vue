<script setup lang='ts'>
import { ref } from 'vue';
const list = ref([
    "你是1",
    "你是2",
    "你是3",
    "你是4",
    "你是5",
    "你是6",
]);
const showEye=ref(false);
const toggleEye = ()=>{
    showEye.value=!showEye.value;
}

</script>
<template>
    <van-row class="guess-top" justify="space-between">
        <van-col span="7">
            <span class="type">猜你想搜</span>
        </van-col>
        <van-col span="3">
            <van-icon name="replay" color="#ddd" class="refresh"/>
            <van-icon name="closed-eye" color="#ddd" v-show="!showEye" @click="toggleEye"/>
            <van-icon name="eye-o" color="#ddd" v-show="showEye" @click="toggleEye"/>
        </van-col>
    </van-row>
    <div class="guess-content">
        <div class="name" v-for="(item,index) in list" :key="index">
            <span class="">{{ item}}</span>
            <van-tag color="rgb(238 242 248)" text-color="#1989fa">新</van-tag>
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
