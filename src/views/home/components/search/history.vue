<script setup lang='ts'>
import { ref } from 'vue';
const list = ref([
    "你是1",
    "你是2",
    "你是3",
    "你是4",
    "你是5",
    "你是6",
])

</script>
<template>
    <van-row class="record-top" justify="space-between">
        <van-col span="7">
            <span class="type">历史搜索</span><van-icon name="arrow-down" />
        </van-col>
        <van-col span="1">
            <van-icon name="delete-o" color="#ddd"/>
        </van-col>
    </van-row>
    <div class="record-content">
        <div class="name" v-for="(item,index) in list" :key="index">{{ item}}</div>
    </div>

</template>
<style scoped lang='scss'>
.record-top{
    font-size:14px;
    font-weight: 700;
    line-height: 30px;
    .type{
        border-left:4px solid #1989fa;
        padding:0 4px;
    }
}
.record-content{
    display:flex;
    flex-wrap: wrap;
    .name{
        width:50%;
        line-height: 34px;
        font-size:12px;
    }
    
}
</style>
