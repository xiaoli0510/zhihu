<script setup>
import BackIcon from '@/components/BackIcon.vue'
import SearchInput from './components/search/SearchInput.vue'
import { ref,provide, watch, inject } from 'vue';
import FilterIcon from '@/components/FilterIcon.vue'
import AllTab from './components/search/tab/AllTab.vue'
import RealTimeTab from './components/search/tab/RealTimeTab.vue'
import UserTab from '@/views/home/components/search/tab/UserTab.vue';
import NovelTab from '@/views/home/components/search/tab/NovelTab.vue';
import { useRoute } from 'vue-router';
import { showToast } from 'vant';
const props = defineProps(['keyWord']);
const reload = inject('reload');
watch(() => props.keyWord, (newVal, oldVal) => {
    newVal?reload():'';
})
provide('keyWord', props.keyWord)
const tabList = ref([
    { id: 0, label: '综合' },
    { id: 1, label: '实时' },
    { id: 2, label: '用户' },
    { id: 3, label: '小说' },
    { id: 4, label: '视频' },
    { id: 5, label: '盐选内容' },
    { id: 6, label: '话题' },
    { id: 7, label: '专栏' },
    { id: 8, label: '想法' },
    { id: 9, label: '我的' },
]);
const active = ref(3);
active.value=Number(useRoute().query.type);
const tabMap = {
    0: AllTab,
    1: RealTimeTab,
    2: UserTab,
    3: NovelTab,
}

//筛选弹框
const isFilter = ref(false);
const onSelect = (action) => showToast(action.text);

//筛选label
const filterObj = ref({
    type: [
        { id: 0, name: '不限类型' },
        { id: 1, name: '只看回答' },
        { id: 2, name: '只看文章' },
        { id: 3, name: '只看视频' }
    ],
    sort: [
        { id: 0, name: '综合排序' },
        { id: 1, name: '最多赞同' },
        { id: 2, name: '最新发布' },
    ],
    time: [
        { id: 0, name: '不限时间' },
        { id: 1, name: '一天内' },
        { id: 2, name: '一周内' },
        { id: 3, name: '一月内' },
        { id: 4, name: '三月内' },
        { id: 5, name: '半年内' },
        { id: 6, name: '一年内' },
    ]
});
const activeFilter = ref({
    type: 0,
    sort: 0,
    time: 0
});
const offsetArray = [39, 4];
const toggleFilter = () => {
    isFilter.value = !isFilter.value;
};
const handleFilter = (type, id) => {
    switch (type) {
        case 0:
            activeFilter.value.type = id;
            break;
        case 1:
            activeFilter.value.sort = id;
            break;
        case 2:
            activeFilter.value.time = id;
            break;
    }
}
</script>
<template>
    <van-sticky :offset-top="0">
        <!-- 搜索 -->
        <van-row align="center" class="result-search-top">
            <van-col span="1">
                <BackIcon />
            </van-col>
            <van-col span="23">
                <SearchInput :keyWord="props.keyWord" />
            </van-col>
        </van-row>
    </van-sticky>
    <div class="result-tab-wrap">
        <van-row>
            <van-col span="20">
                <van-tabs v-model:active="active">
                    <van-tab v-for="(item, index) in tabList" :key="index" :title="item.label" :name="item.id" :value="item.id">
                    </van-tab>
                </van-tabs>
            </van-col>
        </van-row>
        <div class="result-filter" @click="toggleFilter">
            <FilterIcon />
        </div>
    </div>
    <div class="result-list" :class="{'white-bg':active===2}">
        <component :is="tabMap[active]" :type="active"></component>
    </div>
    <!-- 过滤条件弹框 -->
    <van-popover :show="isFilter" @select="onSelect" placement="right" :offset=offsetArray>
        <div class="filter-inner">
            <div class="result-filter-wrap">
                <div class="filter-item" @click="handleFilter(0, item.id)"
                    :class="{ 'active': activeFilter.type === item.id }" v-for="(item, index) in filterObj.type"
                    :key="index">{{
                    item.name
                    }}
                </div>
            </div>
            <div class="result-filter-wrap">
                <div class="filter-item" @click="handleFilter(1, item.id)"
                    :class="{ 'active': activeFilter.sort === item.id }" v-for="(item, index) in filterObj.sort"
                    :key="index">{{
                    item.name
                    }}
                </div>
            </div>
            <div class="result-filter-wrap">
                <div class="filter-item" @click="handleFilter(2, item.id)"
                    :class="{ 'active': activeFilter.time === item.id }" v-for="(item, index) in filterObj.time"
                    :key="index">{{
                    item.name
                    }}
                </div>
            </div>
        </div>
    </van-popover>
</template>
<style scoped lang='scss'>
.result-search-top{
    background:#fff;
    height:50px;
    box-sizing: content-box;
}
.result-tab-wrap {
    height:44px;
    box-sizing: content-box;
    position: relative;
    box-sizing: content-box;

    .result-filter {
        position: absolute;
        right: 0;
        top: 0;
        transform: translate(0, 0);
        background: #fff;
        height:41px;
        width: 16.66%;
        line-height: 41px;
        text-align: center;
    }


    .filter-inner {
        width: 370px;
        padding: 10px 10px 0 10px;

        .result-filter-wrap {
            display: flex;
            margin-bottom: 10px;
            overflow-x: auto;

            .filter-item {
                color: #999595;
                font-size: 12px;
                line-height: 30px;
                padding: 0 4px;
                margin-right: 7px;
                white-space: nowrap;

                &.active {
                    background: #daeef8;
                    color: rgb(76, 142, 228);
                    border-radius: 7px;
                }
            }
        }
    }
}
.result-list {
    overflow: auto;
    padding-bottom: 60px;
    height: calc(100% - 94px);
    background:#faf8f8;
    box-sizing: border-box;
    &.white-bg{
        background:#fff;
    }

}

</style>
