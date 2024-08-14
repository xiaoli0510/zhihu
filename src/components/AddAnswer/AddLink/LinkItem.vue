<script setup>
import { inject, ref, watch } from 'vue';
const toggleLinkPopup = inject('toggleLinkPopup');
const props = defineProps(['item']);
const actions = [
    { id: 0, icon: 'edit' },
    { id: 1, icon: 'link-o' },
    { id: 2, text: '切换为卡片', },
];
const showPopover = ref(false);
const isCard = ref(false);
watch(() => isCard.value, (newVal) => {
    if (newVal) {
        actions[2].text = '切换为链接';
    } else {
        actions[2].text = '切换为卡片';
    }
});
const emits = defineEmits(['close']);
const closePopup = () => {
    showPopover.value = false;
    emits('close');
}

const isLink = ref(true);
const onSelect = (action) => {
    console.log(action);
    const id = action.id;
    switch (id) {
        case 0:
            toggleLinkPopup(props.item);
            break;
        case 1:
            isLink.value = !isLink.value;
            break;
        case 2:
            isCard.value = !isCard.value;
            break;
    }
}

const togglePopover = (value) => {
    isCard.value = value;
    showPopover.value = !showPopover.value;
}
</script>
<template>
    <van-popover @select="onSelect" placement="top-start" theme="dark" v-model:show="showPopover" :actions="actions"
        actions-direction="horizontal">
    </van-popover>
    <template v-if="props.item && props.item.address">
        <span v-if="!isLink">
            {{ props.item.text }}
        </span>
        <template v-else>
            <span @click="togglePopover(false)" v-if="!isCard">
                {{ props.item.text }}
            </span>
            <div class="link-card" v-if="isCard" :class="{ 'active': isCard }" @click="togglePopover(true)">
                <div>{{ props.item.text }}</div>
                <div class="gray-font"><van-icon name="link-o" color="#ddd" size="17px" />{{ props.item.address }}</div>
                <van-icon name="close" class="icon-close" @click.stop="closePopup" />
            </div>
        </template>
    </template>

</template>
<style scoped lang='scss'>
.link-card {
    background: #eeeeee;
    border-radius: 10px;
    position: relative;
    padding: 20px 10px;

    &.active {
        border: 3px solid var(--van-primary-color);
    }

    .icon-close {
        position: absolute;
        right: 10px;
        top: 10px;
    }
}
</style>
