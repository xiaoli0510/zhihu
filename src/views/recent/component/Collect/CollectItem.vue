<template>
    <div class="collect-item">
        <h2><van-text-ellipsis :content="item.title" @click="enterDetail(item)" /></h2>
        <van-image round width="20px" height="20px" :src="item.avatar" @click="enterProfile(item)" />
        <span class="gray-font" @click="enterProfile(item)">{{ item.author }}</span>
        <van-row justify="space-between" @click="enterDetail(item)">
            <van-col span="18">
                <van-text-ellipsis :content="item.detail" rows="2" />
                <p class="gray-font">
                    <span v-if="item.favour > 0">{{ item.favour }}赞同.</span>
                    <span v-if="item.comment > 0">{{ item.comment }}评论</span>
                </p>
            </van-col>
            <van-col span="5" offset="1">
                <van-image width="90px" height="60px" :src="item.cover" radius="5px" />
            </van-col>
        </van-row>
        <van-row justify="space-between">
            <van-col class="gray-font">收藏于
                <span @click="enterCollect">{{ item.collectType === 1 ? '我的收藏' : '我关注的' }}</span>
            </van-col>
            <van-col>
                <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect(item,$event)" placement="top-end">
                    <template #reference>
                        <van-icon name="ellipsis" />
                    </template>
                </van-popover>
            </van-col>
        </van-row>
        <div class="line"></div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const  props  = defineProps(['item', 'index']);
const item = props.item;
const curIndex = props.index;
const router = useRouter();
const enterDetail = (item) => {
    const { type, id } = item;
    type === 1 ? router.push(`/detail?id=${id}`) : router.push(`/noveldetail?id=${id}`);
}

const enterProfile = (item) => {
    router.push(`/profile/${item.id}`)
}

const showPopover = ref(false);

const emit = defineEmits(['share','move']);
// 通过 actions 属性来定义菜单选项
const actions = [
    { text: '取消收藏',index:0 },
    { text: '移动到其他收藏夹',index:1 },
    { text: '分享',index:2 },
];
const onSelect = (item, action) => {
    const { id } = item;
    const { index } = action;
    switch (index) {
        case 0:
            emit('move', curIndex);
            break;
        case 1:

            break;
        case 2:
            emit('share', item);
            break;
    }
};

const enterCollect = () => {
    router.push('/collect');
}
</script>
<style scoped lang='scss'>
.collect-item {
    line-height: 20px;
    padding: 7px 9px;
    margin-bottom: 10px;

    .line {
        width: 100%;
        height: 1px;
        background: #a09f9f;
    }
}
</style>
