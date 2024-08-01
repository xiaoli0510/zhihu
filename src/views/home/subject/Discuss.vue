<script setup>
import { ref, watch } from 'vue';
import DiscussItem from './DiscussItem.vue'
import { fetchSubjectDiscuss } from '@/api/search.js'

const list = ref([]);
fetchSubjectDiscuss().then(res => {
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
},{
    immediate:true
})


</script>
<template>
    <div class="subject-discuss-list">
        <van-row justify="space-between" class="gray-font sort">
            <van-col>
                全部内容
            </van-col>
            <van-col class="sort-wrap">
                <span :class="{ active: sortType === 1 }" @click="changeSort(1)">精华</span>
                <span>|</span>
                <span :class="{ active: sortType === 2 }" @click="changeSort(2)">最热</span>
                <span>|</span>
                <span :class="{ active: sortType === 3 }" @click="changeSort(3)">最新</span>
            </van-col>
        </van-row>
        <DiscussItem v-for="item in list" :key="item.id" :item="item" />
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
