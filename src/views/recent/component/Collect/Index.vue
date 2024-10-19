<template>
    <div class="collect-page">
        <van-row justify="space-between" align="center">
            <van-col>
                <van-tabs v-model:active="active">
                    <van-tab title="我收藏的"></van-tab>
                    <van-tab title="我关注的"></van-tab>
                </van-tabs>
            </van-col>
            <van-col @click="createBookmark">新建收藏夹</van-col>
        </van-row>
        <van-row justify="space-between" class="explain">
            <van-col>
                {{ list.length }}条内容
            </van-col>
            <van-col @click="onToggleOrderType">
                <template v-if="orderType === 0">
                    <van-icon name="peer-pay" />按收藏夹
                </template>
                <template v-if="orderType === 1">
                    <van-icon name="orders-o" />按内容
                </template>
            </van-col>
        </van-row>
        <CollectItem v-for="item in list" :key="item.id" :item="item" @share="onShare" v-show="orderType === 0" />
        <BookmarkItem/>
        <p class="tips gray-font">没有更多内容</p>
        <BookShare ref="bookShare" :data="{ item: bookShareData, hideIcon: true }" />

        <!-- 新建文件夹 弹框 -->
        <van-popup closeable close-icon="close" close-icon-position="top-left" v-model:show="showCreatePopup" round
            position="bottom" :style="{ height: '90%', padding: '20px 10px' }">
            <van-row>
                <van-col>
                </van-col>
                <van-col class="--color-blue-text">
                    创建
                </van-col>
            </van-row>
            <h3 class="text-c position-r">新建收藏夹
                <span class="position-a btn-submit">创建</span>
            </h3>
            <van-cell-group inset>
                <van-field v-model="bookmark.title" name="title" label="" placeholder="添加收藏夹标题"
                    :rules="[{ validator:validator.title, message: '请输入长度不超过20的标题' }]" />
                <van-field v-model="bookmark.depict" name="depict" label="" placeholder="添加收藏夹描述(可选)"
                    :rules="[{ validator:validator.depict, message: '请输入长度不超过300的描述' }]" />
                <van-field name="radio" label="">
                    <template #input>
                        <van-radio-group v-model="bookmark.power" direction="horizontal">
                            <van-radio :name="1">仅自己可见</van-radio>
                            <br />
                            <van-radio :name="2">公开</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <p v-show="bookmark.power === 2" class="gray-font power-tips">
                    公开的收藏夹在站内可以流通，其他人可以关注你的收藏夹。改收藏夹未来有关注者后，将无法设为私密。
                </p>
                <van-button plain round type="default" @click="setDefault" size="mini" class="btn-set-default">设为默认收藏夹</van-button>
            </van-cell-group>
        </van-popup>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import CollectItem from './CollectItem.vue'
import BookShare from '@/components/BookShare/Index.vue'
import BookmarkItem from './BookmarkItem.vue'
import { fetchCollectList } from '@/api/recent.js';
const list = ref([]);
fetchCollectList()
    .then(res => {
        list.value = res?.data?.list;
    })

const active = ref(0);
const bookShare = ref();
const bookShareData = ref({});
const onShare = (item) => {
    bookShareData.value = item;
    console.log('share')
    bookShare.value?.showShare();
}

const orderType = ref(0);//0按收藏夹 1按内容
const onToggleOrderType = () => {
    orderType.value === 0 ? orderType.value = 1 : orderType.value = 0;
}

const showPopover = ref(false);
// 通过 actions 属性来定义菜单选项
const actions = [
    { text: '编辑收藏夹' },
];
const onSelect = (action) => showToast(action.text);

const showCreatePopup = ref(true);

const bookmark = ref({
    title: '',
    depict: '',
    power: 1,
    default: true,//默认收藏夹的id
})

const validator = {
    title: (val) => val.length <= 20,
    depict: (val) => val.length <= 300,
}
const createBookmark = () => {
    showCreatePopup.value = ref(true);
}
const setDefault = () => {
    bookmark.default = true;
}



</script>
<style scoped lang='scss'>
.collect-page {
    background: #fff;
    font-size: 12px;

    .explain {
        background: #faf7f7;
        line-height: 40px;
    }

    .tips {
        line-height: 50px;
        text-align: center;
    }



    .power-tips {
        margin: 4px 0;
    }
    .btn-set-default{
        margin:4px 0;
    }
    .btn-submit{
        right:0;
        top:0;
        color:var(--color-blue-text);
    }
}
</style>
