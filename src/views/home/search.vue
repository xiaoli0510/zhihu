<script setup lang='ts'>
import SearchInput from './components/search/searchInput.vue'
import History from './components/search/history.vue'
import Guess from './components/search/guess.vue'
import Hot from './components/search/hot.vue'
</script>
<template>
    <div class="search-inner">
        <!-- 搜索 -->
        <van-row align="center">
            <van-col span="1">
                <IconBack />
            </van-col>
            <van-col span="23">
                <SearchInput />
            </van-col>
        </van-row>

        <div class="record-wrap">
            <History />
        </div>
        <div class="record-wrap">
            <Guess />
        </div>
        <div class="record-wrap">
            <Hot />
        </div>
    </div>
</template>
<style scoped lang='scss'>
.search-inner {
    padding: 1% 2%;
    .record-wrap{
        margin-top:10px;
    }
}
</style>
