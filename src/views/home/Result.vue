<script setup lang='ts'>
import BackIcon from '@/components/BackIcon.vue'
import SearchInput from './components/search/SearchInput.vue'
const props = defineProps(['keyWord']);
console.log(props.keyWord)

    
</script>
<template>
     <!-- 搜索 -->
     <van-row align="center">
            <van-col span="1">
                <BackIcon />
            </van-col>
            <van-col span="23">
            <SearchInput :keyWord="props.keyWord"/>
            </van-col>
        </van-row>
</template>
<style scoped lang='scss'>
</style>
