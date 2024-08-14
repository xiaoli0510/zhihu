<script setup>
import { inject, ref, watch } from 'vue';
const toggleLinkPopup = inject('toggleLinkPopup');
const props = defineProps({
    item: {
        type: Object
    }
});
const actions = [
    { id: 0, icon: 'edit' },
    { id: 1, icon: 'link-o' },
    { id: 2, text: '切换为卡片', },
];
const showPopover = ref(false);
watch(() => props.item.isCard.value, (newVal) => {
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

const onSelect = (action) => {
    console.log(action);
    const id = action.id;
    switch (id) {
        case 0:
            toggleLinkPopup(props.item);
            break;
        case 1:
            toggleLinkPopup(props.item, { isLink: false });
            break;
        case 2:
            toggleLinkPopup(props.item, { isCard: props.item.isCard.value?false:true });
            break;
    }
}

const togglePopover = (value) => {
    //props.item.isCard.value = value;
    showPopover.value = !showPopover.value;
}
</script>
<template>
    <van-popover @select="onSelect" placement="top-start" theme="dark" v-model:show="showPopover" :actions="actions"
        actions-direction="horizontal">
    </van-popover>
    <template v-if="props.item && props.item.address">
        <span v-if="!props.item.isLink">
            {{ props.item.text }}
        </span>
        <template v-else>
            <span @click="togglePopover(false)" v-if="!props.item.isCard">
                {{ props.item.text }}
            </span>
            <div class="link-card" v-if="props.item.isCard" :class="{ 'active': props.item.isCard }"
                @click="togglePopover(true)">
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
