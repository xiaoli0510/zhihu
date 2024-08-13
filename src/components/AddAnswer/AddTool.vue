<script setup>
import { ref } from 'vue';
import AddLinkPopup from './AddLink/AddLinkPopup.vue'


const emits = defineEmits(['addLink', 'addVideo']);
const addLinkPopup = ref(null);
const changeTool = (index) => {
    if (index === 0) {
        // console.log(addLink?.value);
        // addLink?.value?.showPopup();
    }
}
const afterRead = (file) => {
    console.log(file)
    emits('addVideo', {
        url: file.objectUrl
    })
};

//添加超链接弹框
const showLink = ref(false);
const toggleLinkPopup = (link) => {
    console.log(link);
    showLink.value = !showLink.value;
}
</script>
<template>
    <van-grid :gutter="10">
        <!-- <van-grid-item icon="link-o" text="添加链接" @click="changeTool(0)" /> -->
        <van-grid-item text="添加链接" @click="changeTool(0)">
            <template #icon>
                <van-icon name="link-o" size="30px" @click="toggleLinkPopup" />

                <AddLinkPopup v-if="showLink" :show="showLink" @toggle="toggleLinkPopup"/>
                <!-- <van-icon name="link-o" size="30px"/> -->
            </template>
        </van-grid-item>
        <van-grid-item text="添加视频" @click="changeTool(1)">
            <template #icon>
                <van-uploader :after-read="afterRead" multiple accept="video/*">
                    <van-icon name="video-o" size="35px" />
                </van-uploader>
            </template>
        </van-grid-item>
        <van-grid-item icon="notes-o" text="引用文章" @click="changeTool(2)" />
        <van-grid-item icon="bulb-o" text="添加附件" @click="changeTool(3)" />
        <van-grid-item icon="comment-circle-o" text="提到" @click="changeTool(4)" />
        <van-grid-item icon="clock-o" text="历史版本" @click="changeTool(5)" />
    </van-grid>

</template>
<style scoped lang='scss'></style>
