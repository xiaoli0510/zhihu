<template>
    <div class="interest-item" v-for="(item, index) in props.list" :key="item.id">
        <van-row justify="start" align="center">
            <van-col>
                <van-image width="20" height="20" fit="cover" round :src="personal" />
            </van-col>
            <van-col>
                <span class="gray-font">由 {{ item.author }} 创建</span>
            </van-col>
        </van-row>
        <van-row justify="space-between">
            <van-col>
                <h3>{{ item.title }}</h3>
            </van-col>
            <van-col>
                <FollowIcon :item="item" />
            </van-col>
        </van-row>
        <van-text-ellipsis :content="item.detail" />
        <van-row justify="space-between">
            <van-col span="22">
                <div class="gray-font">{{ item.contentNum }}个内容.{{ item.beFollowNum }}人关注</div>
            </van-col>
            <van-col span="2">
                <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect(index, $event)">
                    <template #reference>
                        <van-icon name="ellipsis" color="#ddd" size="20px" />
                    </template>
                </van-popover>
            </van-col>
        </van-row>
    </div>
    <!-- 图标位置 -->
    <van-popup v-model:show="isShow" closeable close-icon-position="top-left" position="bottom"
        :style="{ height: '90%', padding: '10px' }">
        <TypeInfo @submit="submit" />
    </van-popup>
    <Panel :is-share="isShare" :data="curItem" @hideShare="hideShare" />
</template>
<script setup>
import Panel from '@/components/BookShare/Panel.vue';
import TypeInfo from '@/views/home/components/report/TypeInfo.vue';
import personal from '@/assets/imgs/personal.jpg';
import FollowIcon from '@/components/FollowIcon.vue';
import { ref } from 'vue';
const props = defineProps(['list']);

const showPopover = ref(false);

// 通过 actions 属性来定义菜单选项
const actions = [
    { id: 0, text: '举报', icon: 'warning' },
    { id: 1, text: '分享', icon: 'share' },
];
const curItem = ref({});
const isShow = ref(false);//是否显示举报弹框
const isShare = ref(false);//是否显示分享弹框
const onSelect = (index, action) => {
    curItem.value = props.list[index];
    action.id === 0 && (isShow.value = true);
    action.id === 1 && (isShare.value = true);
}
const submit = () => {
    isShow.value = false;
}
const hideShare = () => {
    isShare.value = false;
}
</script>
<style scoped lang='scss'>
.interest-item {
    padding: 10px;
    border-bottom: 1px solid #ddd;
}
</style>
