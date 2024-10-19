<template>
    <div class="collect-page">
        <van-row justify="space-between" align="center">
            <van-col>
                <van-tabs v-model:active="active">
                    <van-tab title="我收藏的"></van-tab>
                    <van-tab title="我关注的"></van-tab>
                </van-tabs>
            </van-col>
            <van-col @click="showBookmark">新建收藏夹</van-col>
        </van-row>
        <van-row justify="space-between" class="explain">
            <van-col>
                <span v-show="orderType === 0">{{ collectList.length }}条内容</span>
                <span v-show="orderType === 1">{{ bookmarkList.length }}个文件夹</span>
            </van-col>
            <van-col @click="onToggleOrderType">
                <span v-show="orderType === 0">
                    <van-icon name="peer-pay" />按收藏夹
                </span>
                <span v-show="orderType === 1">
                    <van-icon name="orders-o" />按内容
                </span>
            </van-col>
        </van-row>
        <template v-for="(item1,index1) in bookmarkList" :key="item1.id">
            
            <CollectItem  @share="onShare" 
                v-for="(item,index) in item1.subList" :key="item.id" :item="item" :index="index" :parent="{id:item1.id,index:index1}"
             :bookmarkList="bookmarkList" @update="updateBookmark"/>
        </template>

        <BookmarkItem v-show="orderType === 1" v-for="item in bookmarkList" :key="item.id" :item="item"/>
        <p class="tips gray-font">没有更多内容</p>
        <BookShare ref="bookShare" :data="{ item: bookShareData, hideIcon: true }" />

        <!-- 新建文件夹 弹框 -->
        <van-popup closeable close-icon="close" close-icon-position="top-left" v-model:show="isShowCreate" round
            position="bottom" :style="{ height: '90%', padding: '20px 10px' }">
            <h3 class="text-c position-r">新建收藏夹
                <span class="position-a btn-submit" @click="createBookmark">创建</span>
            </h3>
            <van-cell-group inset>
                <van-field v-model="bookmark.folderTitle" name="folderTitle" label="" placeholder="添加收藏夹标题"
                    :rules="[{ validator: validator.folderTitle, message: '请输入长度不超过20的标题' }]" />
                <van-field v-model="bookmark.depict" name="depict" label="" placeholder="添加收藏夹描述(可选)"
                    :rules="[{ validator: validator.depict, message: '请输入长度不超过300的描述' }]" />
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
                <van-button plain round type="default" @click="setDefault" size="mini"
                    class="btn-set-default">设为默认收藏夹</van-button>
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
//收藏夹列表
const bookmarkList = ref([]);
//收藏内容列表
const collectList = ref([]);
fetchCollectList()
    .then(res => {
        bookmarkList.value = res?.data?.list;
        res?.data?.list.forEach(item => {
            collectList.value = item?.subList?.length>0?collectList.value.concat(item.subList):'';
        });
    })

const active = ref(0);
const bookShare = ref();
const bookShareData = ref({});
const onShare = (item) => {
    bookShareData.value = item;
    console.log('share')
    bookShare.value?.showShare();
}

const orderType = ref(0);//0按内容 1按收藏夹
const onToggleOrderType = () => {
    orderType.value === 0 ? orderType.value = 1 : orderType.value = 0;
}

const isShowCreate = ref(false);
const bookmark = ref({
    folderTitle: '',
    depict: '',
    power: 1,
    default: true,//默认收藏夹的id
})

const validator = {
    folderTitle: (val) => val.length <= 20,
    depict: (val) => val.length <= 300,
}
//显示新建收藏夹弹框
const showBookmark = () => {
    isShowCreate.value = true;
}
const setDefault = () => {
    bookmark.default = true;
}
//submit 新建收藏夹
const createBookmark = () => {
    bookmarkList.value.push(bookmark.value);
    isShowCreate.value = false;
}
const updateBookmark = (parentIndex,sonIndex,checked) => {
    checked.forEach(item=>{
       
    })
    // bookmarkList.value[parentIndex].push(item)
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
