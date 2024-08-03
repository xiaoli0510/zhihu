<script setup>
import { ref, watch } from 'vue';
import { fetchSubjectOpinion } from '@/api/search.js'
import IdeaItem from '../components/idea/IdeaItem.vue'

const list = ref([]);
fetchSubjectOpinion().then(res => {
    list.value = res?.data?.list;
}).catch(err => {
    console.log(err)
})

const sortType = ref(1);
const changeSort = (sort) => {
    console.log(sort);
    sortType.value = sort;
}

watch(sortType, (newVal) => {
    list.value.sort(item1 => {
        if (item1.type === newVal) {
            return -1;
        } else {
            return 1;
        }
    }
    );
}, {
    immediate: true
})


</script>
<template>
    <div class="subject-discuss-list">
        <van-row justify="space-between" class="gray-font sort">
            <van-col>
                全部内容
            </van-col>
            <van-col class="sort-wrap">
                <span :class="{ active: sortType === 1 }" @click="changeSort(1)">最热</span>
                <span>|</span>
                <span :class="{ active: sortType === 2 }" @click="changeSort(2)">最新</span>
            </van-col>
        </van-row>
        <van-row justify="space-between" class="item-wrap">
            <IdeaItem v-for="item in list" :item="item" :key="item.id" />
        </van-row> 
    </div>
</template>
<style scoped lang='scss'>
.subject-discuss-list {
    margin: 0 auto;
    background: #f7f7f7;

    .sort {
        padding: 0 2%;
        margin-top: 2%;
        line-height: 40px;
        background: #fff;

        .sort-wrap {
            span {
                margin: 0 2px;

                &.active {
                    color: #000;
                }
            }
        }
    }
}
</style>
