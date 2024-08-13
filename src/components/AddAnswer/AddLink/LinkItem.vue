<script setup>
import { ref } from 'vue';

const item = ref({
    address: '1',
    text: '2',
})

const actions = ref([
    { id: 0, icon: 'edit' },
    { id: 1, icon: 'link-o' },
    { id: 2, text: '切换为卡片', },
]);
const showPopover = ref(false);
const isCard = ref(false);
const closePopup = () => {
    showPopover.value = false;
    item.value = {
        address: '',
        text: '',
    }
}

const onSelect = (action) => {
    console.log(action);
    const id = action.id;
    switch (id) {
        case 0:
            break;
        case 1:
            break;
        case 2:
            isCard.value = !isCard.value;
            actions.value[2].text === '切换为卡片' ? '切换为链接' : '切换为卡片';
            break;
    }
}
</script>
<template>

    <van-popover @select="onSelect" placement="top-start" theme="dark" v-model:show="showPopover" :actions="actions"
        actions-direction="horizontal">
    </van-popover>
    <span >
        {{ item.text }}
    </span>

    <div class="link-card" :class="{ 'active': showPopover && isCard }">
        <div>{{ item.text }}</div>
        <div class="gray-font"><van-icon name="link-o" color="#ddd" size="17px" />{{ item.address }}</div>
        <van-icon name="close" class="icon-close" @click="closePopup" />
    </div>


</template>
<style scoped lang='scss'>
.link-card {
    background: #eeeeee;
    border-radius: 10px;
    position: relative;
    padding: 20px 10px;
    border: 1px solid red;

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
