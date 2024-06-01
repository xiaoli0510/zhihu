<script setup>
import TypeInfo from './components/report/TypeInfo.vue';
import dot from "@/assets/imgs/dot.png";
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
const submitReport = () => {
}
const showPopover = ref(false)
// 通过 actions 属性来定义菜单选项
const actions = [
    { text: '刷新' },
];
const reload = inject('reload');
const onSelect = (action) => {
    reload();
};


const options = [
    { name: '微信', icon: 'wechat' },
    { name: '微博', icon: 'weibo' },
    { name: '复制链接', icon: 'link' },
    { name: '分享海报', icon: 'poster' },
    { name: '二维码', icon: 'qrcode' },
];
const showShare = ref(false);
const selectShare = (option) => {
    showToast(option.name);
    showShare.value = false;
};

const router = useRouter();
const back = () => {
    router.back();
};

</script>
<template>
    <div class="report-view">
        <div class="report-header">
            <van-row justify="space-between">
                <van-col span=5>
                    <van-icon name="cross" color="#504e4e" @click="back" />
                    <h3>举报</h3>
                </van-col>
                <van-col span=4>
                    <van-icon name="share" size=".6rem" color="#504e4e" @click="showShare = true" class="share-icon"/>
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
    <van-share-sheet v-model:show="showShare" title="分享" :options="options" @select="selectShare" />
</template>
<style scoped lang='scss'>
.report-view {
    padding: 10px 0;

    .report-header {
        background: #fff;
        padding: 0 10px 10px 10px;
        border-bottom: 1px solid #ccc;

        h3 {
            display: inline-block;
            color: #504e4e;
            font-weight: 700;
            margin-left: 7px;
        }
        .share-icon{
            margin-right:5px;
        }
    }

    .report-content {
        padding: 0 10px;
    }
}
</style>
