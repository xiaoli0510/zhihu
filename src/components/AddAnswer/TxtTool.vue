<script setup>
import { ref } from 'vue';

const txtList = ref([{
    iconName: 'link-o',
    txt: '标题'
}, {
    iconName: 'video-o',
    txt: '粗体'
}, {
    iconName: 'notes-o',
    txt: '引用'
}, {
    iconName: 'bulb-o',
    txt: '分割线'
}, {
    iconName: 'comment-circle-o',
    txt: '有序列表'
}, {
    iconName: 'clock-o',
    txt: '无序列表'
}]);
const txtCom = ref(-1);
const changeTxtTool = (index) => {
    txtCom.value = index;
}
</script>
<template>
    <div class="txt-wrap">
        <div class="txt-com" v-for="(item, index) in txtList" :class="{ 'active': txtCom === index }" :key="index"
            @click="changeTxtTool(index)">
            <van-icon :name="item.iconName" /> {{ item.txt }}
        </div>
    </div>
</template>
<style scoped lang='scss'>
.txt-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .txt-com {
        background: #eeeeee;
        width: 44%;
        line-height: 50px;
        text-align: center;
        margin-top: 14px;
        border-radius: 5px;

        &.active {
            color: var(--van-primary-color);
        }
    }
}
</style>
