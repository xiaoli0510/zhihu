<template>
    <!-- 新建/编辑文件夹 弹框 -->
    <van-popup class="bookmark-popup" @click-overlay="onClickClose" @click-close-icon="onClickClose" closeable
        close-icon="close" close-icon-position="top-left" v-model:show="isShow" round position="bottom"
        :style="{ height: '90%', padding: '20px 10px' }">
        <h3 class="text-c position-r">
            新建收藏夹
            <span class="position-a btn-submit" @click="submitBookmark">{{ props.type === 'add' ? '创建' : '完成'
                }}</span>
        </h3>
        <van-cell-group inset>
            <van-field v-model="bookmarkItemRef.folderTitle" name="folderTitle" label="" placeholder="添加收藏夹标题" :rules="[
                {
                    validator: validator.folderTitle,
                    message: '请输入长度不超过20的标题',
                },
            ]" />
            <van-field v-model="bookmarkItemRef.depict" name="depict" label="" placeholder="添加收藏夹描述(可选)" :rules="[
                {
                    validator: validator.depict,
                    message: '请输入长度不超过300的描述',
                },
            ]" />
            <van-field name="radio" label="">
                <template #input>
                    <van-radio-group v-model="bookmarkItemRef.power" direction="horizontal">
                        <van-radio :name="1">仅自己可见</van-radio>
                        <br />
                        <van-radio :name="2">公开</van-radio>
                    </van-radio-group>
                </template>
            </van-field>
            <p v-show="bookmarkItemRef.power === 2" class="gray-font power-tips">
                公开的收藏夹在站内可以流通，其他人可以关注你的收藏夹。改收藏夹未来有关注者后，将无法设为私密。
            </p>
            <van-button plain round type="default" @click="setDefault" size="mini"
                class="btn-set-default">设为默认收藏夹</van-button>
        </van-cell-group>
    </van-popup>
</template>
<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['data', 'type', 'nextId', 'show'])
const isShow = ref(false)
const bookmarkItemRef = ref({
    id: -1,
    folderTitle: '',
    depict: '',
    power: 1,
    default: false, //默认收藏夹
    childrenNum: 0,
})
watch([() => props.show, () => props.nextId], ([showVal, nextIdVal]) => {
    isShow.value = showVal;
    nextIdVal += 1;
    bookmarkItemRef.value.id = nextIdVal;
}, {
    deep: true,
    immediate: true
})
bookmarkItemRef.value = { ...bookmarkItemRef.value, ...props.data };

const validator = {
    folderTitle: (val) => val.length <= 20,
    depict: (val) => val.length <= 300,
}

const setDefault = () => {
    bookmarkItemRef.value.default = true
}

const emits = defineEmits(['update', 'close'])
const onClickClose = () => {
    emits('close')
}
//submit 新建/编辑收藏夹
const submitBookmark = () => {
    emits('update', bookmarkItemRef.value)
}
</script>
<style scoped lang='scss'>
.bookmark-popup {

    .power-tips {
        margin: 4px 0;
    }

    .btn-set-default {
        margin: 4px 0;
    }

    .btn-submit {
        right: 0;
        top: 0;
        color: var(--color-blue-text);
    }
}
</style>
