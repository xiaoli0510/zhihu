<script setup lang='ts'>
import SearchInput from './components/search/SearchInput.vue'
import History from './components/search/History.vue'
import Guess from './components/search/Guess.vue'
import Hot from './components/search/Hot.vue'
import BackIcon from '@/components/BackIcon.vue'
</script>
<template>
    <div class="search-inner">
        <!-- 搜索 -->
        <van-row align="center">
            <van-col span="1">
                <BackIcon />
            </van-col>
            <van-col span="23">
                <SearchInput>
                    <template v-slot:txt>
                        搜索
                    </template>
                </SearchInput>
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

    .record-wrap {
        margin-top: 10px;
    }
}
</style>
