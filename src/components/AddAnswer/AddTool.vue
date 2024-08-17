<script setup>
import { inject, ref } from 'vue';
import { useRouter } from 'vue-router';
const toggleLinkPopup = inject('toggleLinkPopup')



const emits = defineEmits(['addLink', 'addVideo','changeLink']);
const router = useRouter();
const changeTool = (index) => {
    if (index === 2) {
        router.push('/quoteArticle');
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

const add = ()=>{
    toggleLinkPopup();
    emits('changeLink',{});
}


</script>
<template>
    <van-grid :gutter="10">
        <!-- <van-grid-item icon="link-o" text="添加链接" @click="changeTool(0)" /> -->
        <van-grid-item text="添加链接" @click="changeTool(0)">
            <template #icon>
                <van-icon name="link-o" size="30px" @click="add" />

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
