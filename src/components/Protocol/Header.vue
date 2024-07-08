<script setup>
import BackIcon from '@/components/BackIcon.vue';
import BookShare from '@/components/BookShare/Index.vue';
import share from '@/assets/imgs/share.png';
import dot from '@/assets/imgs/dot.png';
import { inject, ref } from 'vue';
const props = defineProps({
    title:{
        type:String,
    }
})
const showPopover = ref(false);
const actions = [
    { text: '刷新' },
];
const reload = inject('reload');
const onSelect = (action) => {
    reload();
};
</script>
<template>
    <van-row align="center" justify="space-between" class="header-fixed">
        <van-col>
            <BackIcon iconName="cross"/>
            {{ props.title }}
        </van-col>
        <van-col>
            <BookShare :data="{ name: share, size: '20px' }" />
            <van-popover placement="left" v-model:show="showPopover" :actions="actions" @select="onSelect">
                <template #reference>
                    <van-icon :name="dot" class="refresh" />
                </template>
            </van-popover>
        </van-col>
    </van-row>
</template>
<style scoped lang='scss'>
.refresh {
    margin: 0 10px;
} 
</style>
