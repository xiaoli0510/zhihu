<template>
    <div class="collect-item">
        <h2><van-text-ellipsis :content="item.title" @click="enterDetail(item)" /></h2>
        <van-image round width="20px" height="20px" :src="item.avatar" @click="enterProfile(item)" />
        <span class="gray-font" @click="enterProfile(item)">{{ item.author }}</span>
        <van-row justify="space-between" @click="enterDetail(item)">
            <van-col span="18">
                <van-text-ellipsis :content="item.detail" rows="2" />
                <p class="gray-font">
                    <span v-if="item.favour > 0">{{ item.favour }}赞同.</span>
                    <span v-if="item.comment > 0">{{ item.comment }}评论</span>
                </p>
            </van-col>
            <van-col span="5" offset="1">
                <van-image width="90px" height="60px" :src="item.cover" radius="5px" />
            </van-col>
        </van-row>
        <van-row justify="space-between">
            <van-col class="gray-font">收藏于
                <span @click="enterCollect">{{ item.collectType === 1 ? '我的收藏' : '我关注的' }}</span>
            </van-col>
            <van-col>
                <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect(item, $event)"
                    placement="top-end">
                    <template #reference>
                        <van-icon name="ellipsis" />
                    </template>
                </van-popover>
            </van-col>
        </van-row>
        <div class="line"></div>

    </div>

    <!-- 移动到其他收藏夹 弹框-->
    <van-popup v-model:show="isShowMove" round position="bottom" :style="{ height: '60%', padding: '10px' }">
        <van-row justify="space-between">
            <van-col>
                <h2>选择收藏夹</h2>
            </van-col>
            <van-col @click="showBookmark">
                <van-icon name="add" />
                新建收藏夹
            </van-col>
        </van-row>
        <div v-for="(item,index) in props.bookmarkList" :key="item.id">
            <van-row justify="space-between" class="bookmark-item" align="center">
                <van-col>
                    <p>{{ item.folderTitle }}</p>
                    <p class="gray-font">{{ item.childrenNum }}个内容.{{ item.power === 1 ? '仅自己可见' : '公开' }}</p>
                </van-col>
                <van-col style="border:1px solid red;">
                    <van-checkbox v-model="checked[index]" shape="square" />
                </van-col>
            </van-row>
            <div class="line"></div>
        </div>

        <p class="tips gray-font text-c">没有更多内容</p>
        <footer class="text-c btn-submit" @click="submitUpdate">
           完成
        </footer>
    </van-popup>

</template>
<script setup>
import { inject, ref,watch } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['item', 'index', 'bookmarkList','parentId']);
const item = props.item;
const router = useRouter();
const emit = defineEmits(['share', 'move','update']);

const enterDetail = (item) => {
    const { type, id } = item;
    type === 1 ? router.push(`/detail?id=${id}`) : router.push(`/noveldetail?id=${id}`);
}

const enterProfile = (item) => {
    router.push(`/profile/${item.id}`)
}

const showPopover = ref(false);

const actions = [
    { text: '取消收藏', index: 0 },
    { text: '移动到其他收藏夹', index: 1 },
    { text: '分享', index: 2 },
];
const isShowMove = ref(false);
const curItem = ref(null);
const onSelect = (item,action) => {
    curItem.value = item;
    const { index } = action;
    switch (index) {
        case 0:
            checked.value = new Array(props.bookmarkList.length).fill(false);
            emit('update', {checked:checked.value,curItem:curItem.value});
            break;
        case 1:
            let parentIndex = -1;
            checked.value = new Array(props.bookmarkList.length).fill(false);
            props.bookmarkList.forEach((item, index) => {
                props.parentId.forEach(id => {
                    if (item.id === id) {
                        parentIndex = index;
                        checked.value[parentIndex] = true;
                    }
                })
            })
            isShowMove.value = true;
            break;
        case 2:
            emit('share', item);
            break;
    }
};

const enterCollect = () => {
    router.push('/collect');
}

const checked = ref([]);
watch(()=>props.bookmarkList,()=>{
    checked.value = new Array(props.bookmarkList.length).fill(false);
},{
    immediate:true,
    deep:true,
})

const submitUpdate = () => {
   emit('update',{checked:checked.value,curItem:curItem.value});
   isShowMove.value = false;
}

const showBookmark = inject('showBookmark')
</script>
<style scoped lang='scss'>
.collect-item {
    line-height: 20px;
    padding: 7px 9px;
    margin-bottom: 10px;

}
.bookmark-item {
        line-height: 30px;
        padding:7px 9px;
    }
.btn-submit {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    line-height: 50px;
    font-weight: 700;
}
.line {
        width: 100%;
        height: 1px;
        background: #a09f9f;
        margin-top: 4px;
    }
    .tips {
        line-height: 50px;
        text-align: center;
    }
    .square{
        display:inline-block;
        width:20px;
        height:20px;
        border:1px solid #ccc;
        border-radius: 50%;
    }
</style>
