<script setup>
import { useRoute } from 'vue-router';
import BackIcon from '@/components/BackIcon.vue'
import { provide, ref } from 'vue';
import { throttle } from 'lodash';
import { useHistoryStore } from '@/stores/history.js';
import TxtTool from '@/components/AddAnswer/TxtTool.vue'
import AddTool from '@/components/AddAnswer/AddTool.vue'
import SetTool from '@/components/AddAnswer/SetTool.vue'
import LinkItem from '@/components/AddAnswer/AddLink/LinkItem.vue'
import AddLinkPopup from '@/components/AddAnswer/AddLink/AddLinkPopup.vue'

const route = useRoute();
const tip = ref('');
const txtValue = ref('');
const historyStore = useHistoryStore();
const updateTxt = throttle(function () {
    tip.value = '草稿保存中';
    tip.value = '草稿已报存';
    historyStore.add(txtValue.value);
    setTimeout(function () {
        tip.value = txtValue.value.length;
    }, 200);
}, 1000);
const undoTxt = () => {
    historyStore.undo();
    txtValue.value = historyStore.peek();
}
const redoTxt = () => {
    historyStore.redo();
    txtValue.value = historyStore.peek();
}

const fileList = ref([]);
const afterRead = (file) => {
    fileList.value.push({
        url: file.objectUrl,
        isImage: true
    })
};

const tool = ref('');
const toggleTool = (value) => {
    tool.value = value;
}

const linkArr = ref([]);
const addLink = (obj) => {
    linkArr.value.push(obj);
}

const videoList = ref([]);
const addVideo = (obj) => {
    videoList.value.push(obj);
}

//添加链接弹框
const showLink = ref(false);
const link = ref({
    address: '',
    text: '',
    isLink: true,
    isCard: false,
});
const linkList = ref([]);

//当前链接弹框对应的是哪一个linkItem
const curIndex = ref(-1);
//新增链接
const sureAddLink = (obj) => {
    const item = Object.assign({}, obj);
    linkList.value.push(item);
}
//改变链接
const changeLink = (obj, index) => {
    curIndex.value = index;
    index>-1?Object.assign(linkList.value[index], obj ? obj : {}):'';
    link.value = index > -1 ? linkList.value[index] : {
        address: '',
        text: '',
        isLink: true,
        isCard: false,
    }
}
    // 删除链接
    const closeLink = (index) => {
        linkList.value.splice(index, 1);
    }

    //切换链接弹框的显示隐藏 
    const toggleLinkPopup = () => {
        showLink.value = !showLink.value;
        if (!showLink.value) curIndex.value = -1;
    }
    provide('toggleLinkPopup', toggleLinkPopup);
    provide('sureAddLink', sureAddLink);

</script>
<template>
    <van-row justify="space-around" style="padding:4px;" align="center">
        <van-col>
            <BackIcon>
                <template #iconTxt>
                    取消
                </template>
            </BackIcon>
        </van-col>
        <van-col>
            <div class="type-wrap">
                <span class="tab-type active">图文回答</span>
                <span class="tab-type">视频回答</span>
            </div>
        </van-col>
        <van-col>
            <span class="btn-submit">发布</span>
        </van-col>
    </van-row>
    <h3 class="title">{{ route.query.t }}?</h3>
    <van-divider />

    <van-cell-group inset>
        <van-field v-model="txtValue" rows="1" @update:model-value="updateTxt" autosize type="textarea"
            placeholder="输入图文回答内容" />
        <van-uploader v-model="fileList" multiple :max-count="2" disabled :show-upload="false">
        </van-uploader>
        <van-uploader v-model="videoList" multiple :max-count="2" disabled :show-upload="false">
        </van-uploader>
        <LinkItem :item="item" @close="closeLink" v-for="(item, index) in linkList" :key="index"
            @changeLink="changeLink($event, index)" :index="index" />
    </van-cell-group>
    <div class="footer">
        <van-row justify="end">
            <van-col>{{ tip }}</van-col>
        </van-row>
        <van-divider />
        <van-row justify="space-around">
            <van-col @click="toggleTool('txt')">A</van-col>
            <van-col>
                <van-uploader :after-read="afterRead">
                    <van-icon name="photo-o" />
                </van-uploader>
            </van-col>
            <van-col><van-icon name="add-o" @click="toggleTool('add')" /></van-col>
            <van-col><van-icon name="revoke" @click="undoTxt"
                    :color="historyStore.canUndo ? '#000' : '#ccc'" /></van-col>
            <van-col><van-icon name="replay" @click="redoTxt"
                    :color="historyStore.canRedo ? '#000' : '#ccc'" /></van-col>
            <van-col><van-icon name="setting-o" @click="toggleTool('set')" /></van-col>
        </van-row>:
        <van-divider />
        <TxtTool v-if="tool === 'txt'" />
        <AddTool v-if="tool === 'add'" @addLink="addLink" @addVideo="addVideo" @changeLink="changeLink($event, curIndex)"/>
        <SetTool v-if="tool === 'set'" />
    </div>
    <AddLinkPopup :show="showLink" :item="link" :index="curIndex" @changeLink="changeLink($event, curIndex)" />
    <!-- <AddLinkPopup  :show="showLink" v-if="showLink" :item="link" :index="curIndex"  @changeLink="changeLink($event,curIndex)"/> -->
</template>
<style scoped lang='scss'>
.type-wrap {
    background: #efecec;
    border-radius: 4px;
    padding: 3px;

    .tab-type {
        color: #000;
        padding: 0 5px;
        display: inline-block;

        &.active {
            border-radius: 2px;
            background: #fff;
        }
    }
}

.btn-submit {
    color: var(--van-primary-color);
}

.title {
    padding: 0 4px;
    line-height: 50px;
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    padding: 12px;
}
</style>
