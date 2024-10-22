<template>
    <div class="collect-page-top">
        <van-row justify="space-between">
            <van-col>
                <BackIcon />
            </van-col>
            <van-col>
                <BookShare :data="{ iconName: 'ellipsis' }" ref="bookShare" />
            </van-col>
        </van-row>
        <van-row>
            <van-col>我的收藏</van-col>
            <van-col><van-icon name="bag" /></van-col>
        </van-row>
    </div>
    <div class="collect-page-main">
        <p class="explain">{{ list.length }}个内容</p>
        <CollectItem v-for="(item, index) in list" :key="item.id" :item="item" @share="onShare" @move="onMove"
             />
    </div>
</template>
<script setup>
import BookShare from '@/components/BookShare/Index.vue'
import BackIcon from '@/components/BackIcon.vue'
import CollectItem from './component/Collect/CollectItem.vue'
import { ref } from 'vue';
import { fetchCollectList } from '@/api/recent.js';
const list = ref([]);
fetchCollectList()
    .then(res => {
        list.value = res?.data?.list;
    })

const bookShare = ref();
const onShare = ()=> {
    bookShare.value?.showShare();
}

const onMove = (index) => {
    list.value.splice(index,1);
}

</script>
<style scoped lang='scss'>
.collect-page-top {
    background: rgba(0, 0, 0, .3);
    height: 100px;
    padding: 7px 9px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: #fff;
}

.collect-page-main {
    .explain {
        padding: 7px 9px;
    }
}
</style>
