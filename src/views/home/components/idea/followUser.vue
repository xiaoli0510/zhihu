<script setup lang='ts'>
// 关注用户
import { ref } from 'vue';
import User from '@/views/home/components/idea/user.vue';
import personal from "@/assets/imgs/personal.jpg";
// const { item } = defineProps(["item"]);
const showMore = ref(false);

const actions = [
    { name: '分享', icon: 'share-o' },
    { name: '关注该作者：', icon: 'manager-o' },
    { name: '举报', icon: 'warning-o' },
];
const showPopupMore = () => {
    showMore.value = true;
};
const onSelect = (item) => {
    // 默认情况下点击选项时不会自动收起
    // 可以通过 close-on-click-action 属性开启自动收起
    showMore.value = false;
};
const item = ref({
    type: 1,//1回答了问题 2关注了用户 3发布了想法 4赞同了回答
    name: '宝宝',
    time: '2024-05-13 07:00',
    title: '这是一句话标题',
    sentence: '这是一段话'
})
</script>
<template>
    <div class="item">
        <div class="top">
            <van-image round width="1.5rem" height="1.5rem" :src="personal" />
            <div class="right">
                <div>{{ item.name }} <van-icon name="gem" /></div>
                <div class="time">{{ item.time }} 关注了用户</div>

            </div>
        </div>
        <div class="middle">
            <User />
        </div>
        <div class="footer">
            <van-row>
                <van-col span="20">
                </van-col>
                <van-col span="2" offset="2">
                    <van-icon name="ellipsis" @click="showPopupMore" />
                </van-col>
            </van-row>
        </div>
    </div>

    <!-- 右下角更多弹框 -->
    <van-action-sheet v-model:show="showMore" :actions="actions" @select="onSelect" />
</template>
<style scoped lang='scss'>
.item {
    background: #fff;
    margin-bottom: 2%;
    padding: 3% 2%;

    .top {
        display: flex;
        align-items: center;

        .right {
            margin-left: 2%;
            font-size: 15px;

            .time {
                color: #726d6d;
            }
        }
    }

    .middle {
        margin: 4% 0;
    }
}
</style>
