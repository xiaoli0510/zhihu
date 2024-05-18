<script setup lang='ts'>
import SearchInput from './components/search/SearchInput.vue'
import History from './components/search/History.vue'
import Guess from './components/search/Guess.vue'
import Hot from './components/search/Hot.vue'
import BackIcon from '@/components/BackIcon.vue'
import Report from './components/search/Report.vue'
import { onMounted, ref } from 'vue';
import { fetchGuessList } from '@/api/search';
import ReportIcon from '@/components/ReportIcon.vue'
const guessList = ref([]);
const initData = async () => {
    const res = await fetchGuessList();
    guessList.value = res.data.list;
    console.log(guessList.value)
};

const isReport =ref(false);

onMounted(async ()=>{
    await initData();
})


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
            <Guess :list="guessList" />
        </div>
        <div class="record-wrap">
            <Hot />
        </div>

        <div class="footer-report">
            <ReportIcon @click="isReport=true"/>
        </div>
    </div>
    <Report :list="guessList" :show="isReport"/>

</template>
<style scoped lang='scss'>
.search-inner {
    padding: 1% 2%;

    .record-wrap {
        margin-top: 10px;
    }
    .footer-report{
        text-align: center;
    }
}
</style>
