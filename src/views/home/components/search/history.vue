<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
const list = ref([
    "你是1",
    "你是2",
    "你是3",
    "你是4",
    "你是5",
    "你是6",
    "你是1",
    "你是2",
    "你是3",
    "你是4",
    "你是5",
    "你是6",
]);
const filterList = ref([]);
filterList.value = list.value.slice(0, 6);

//折叠展开历史搜索
const moreRef = ref(false);
const toggleMore = () => {
    moreRef.value = !moreRef.value;
    if (moreRef.value) {
        filterList.value = list.value;
    } else {
        filterList.value = list.value.slice(0, 6);
    }
}

const deleteRef = ref(false);
const toggleDelete = () => {
    deleteRef.value = !deleteRef.value;
    if (deleteRef.value === true) {
        filterList.value = list.value;
    } else {
        filterList.value = list.value.slice(0, 6);
    }
}

//删除
const handleDelete = (index) => {
    list.value.splice(index, 1);
}

//全部删除
const showDeleteAllModal = () => {
    showConfirmDialog({
        message:
            '确认删除搜索历史吗？',
    })
        .then(() => {
            list.value = [];
        })
        .catch(() => {
        });
}

watch(list, () => {
    filterList.value = list.value;
})

const router = useRouter();
const enterResult = (item) => {
    if (deleteRef.value === true) {
        return false;
    }
    router.push(`/result/${item}`);
}

</script>
<template>
    <van-row class="record-top" justify="space-between" v-show="list.length > 0">
        <van-col span="7" @click="toggleMore">
            <span class="type">历史搜索</span>
            <van-icon name="arrow-down" v-show="!moreRef" />
            <van-icon name="arrow-up" v-show="moreRef" />
        </van-col>
        <van-col span="1" @click="toggleDelete" v-show="!deleteRef">
            <van-icon name="delete-o" color="rgb(136 130 130)" />
        </van-col>
        <van-col span="6" class="right" v-show="deleteRef">
            <van-row justify="space-between">
                <van-col span="14" @click="showDeleteAllModal">全部删除</van-col>
                <van-col span="7" @click="toggleDelete">完成</van-col>
            </van-row>
        </van-col>
    </van-row>
    <div class="record-content">
        <div class="name" v-for="(item, index) in filterList" :key="index" @click="enterResult(item)">
            <span>{{ item }}</span>
            <van-icon v-show="deleteRef" name="cross" color="rgb(136 130 130)" @click="handleDelete(index)" />
        </div>
    </div>
</template>
<style scoped lang='scss'>
.record-top {
    font-size: 14px;
    font-weight: 700;
    line-height: 30px;

    .type {
        border-left: 4px solid #1989fa;
        padding: 0 4px;
    }

    .right {
        color: #999696;
        font-size: 12px;
    }
}

.record-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .name {
        width: 49%;
        display: flex;
        justify-content: space-between;
        padding: 7px 0;
        font-size: 12px;
    }

}
</style>
