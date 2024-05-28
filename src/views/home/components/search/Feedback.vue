<script setup lang='ts'>
import { showToast } from 'vant';
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

const actions = ref([
    { id: 0, name: '和搜索词无关', icon: 'search' },
    { id: 1, name: '内容过时', icon: 'clock-o' },
    { id: 2, name: '内容不友善', icon: 'bulb-o' },
    { id: 3, name: '内容质量差', icon: 'info-o' },
    { id: 4, name: '举报', icon: 'question-o' },
]);
const emit = defineEmits(['select']);
const props = defineProps(['isModalSheet']);
const isModalSheetShow = ref(props.isModalSheet);
watch(isModalSheetShow, (newVal, oldVal) => {
    if (!newVal) {
        emit('select');
    }
})
const router = useRouter();
const onSelect = (item) => {
    item.id !== 4 ? showToast('反馈成功') : router.push('/report');
    emit('select', item);
};
</script>
<template>
    <van-action-sheet v-model:show="isModalSheetShow" :actions="actions" @select="onSelect" />
</template>
<style scoped lang='scss'></style>
