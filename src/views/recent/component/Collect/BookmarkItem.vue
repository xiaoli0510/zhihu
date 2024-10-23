<template>
    <div class="content-item">
        <h4>{{ item.folderTitle }} <van-tag color="#faf7f7" text-color="#a09f9f" v-if="item.default">默认</van-tag></h4>
        <van-row justify="space-between" class="gray-font">
            <van-col>
                {{ item.childrenNum}}个内容.{{item.power === 1?'仅自己可见':'公开'}}
            </van-col>
            <van-col>
                <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect" placement="left-start">
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
const {item} = defineProps(['item']);

const showPopover = ref(false);
// 通过 actions 属性来定义菜单选项
const actions = [
    { text: '编辑收藏夹' },
];
const emits = defineEmits(['edit']);const onSelect = () => { 
    emits('edit',item);
}
</script>
<style scoped lang='scss'>
.content-item {
    padding: 10px 9px;

    .line {
        width: 100%;
        height: 1px;
        background: #a09f9f;
        margin-top: 4px;
    }
}
</style>
