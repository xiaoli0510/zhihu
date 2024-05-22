<script setup lang='ts'>
import TypeInfo from './components/report/TypeInfo.vue';
import dot from "@/assets/imgs/dot.png";
import { inject, ref } from 'vue';
const submitReport = () => {
}
const showPopover = ref(false)
// 通过 actions 属性来定义菜单选项
const actions = [
    { text: '刷新' },
];
const reload = inject('reload');
const onSelect = (action) => {
    console.log(1)
    reload();
};
</script>
<template>
    <div class="report-view">
        <div class="report-header">
            <van-row justify="space-between">
                <van-col span=5>
                    <van-icon name="cross" color="#504e4e" />
                    <h3>举报</h3>
                </van-col>
                <van-col span=3>
                    <van-icon name="share" color="#504e4e" />
                    <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect" placement="left">
                        <template #reference>
                            <van-icon :name="dot" size=".4rem" color="#504e4e" />
                        </template>
                    </van-popover>
                </van-col>
            </van-row>
        </div>
        <div class="report-content">
            <TypeInfo @submit="submitReport" />
        </div>
    </div>
</template>
<style scoped lang='scss'>
.report-view {
    padding: 10px 0;

    .report-header {
        background: #fff;
        padding: 10px;
        border-bottom: 1px solid #ccc;

        h3 {
            display: inline-block;
            color: #504e4e;
            font-weight: 700;
            margin-left: 7px;
        }
    }
    .report-content{
        padding: 0 10px;
    }
}
</style>
