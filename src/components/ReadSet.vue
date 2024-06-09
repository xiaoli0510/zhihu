<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['readsetObj','isReadset']);

const show = ref(props.isReadset);
watch(()=>props.isReadset, newVal => {
    newVal && (show.value = newVal);
},{
    deep:true
});
const fontSize = ref(props.readsetObj.fontSize);
const light = ref(props.readsetObj.light);
const isShowOtherNote = ref(props.readsetObj.isShowOtherNote);

const emit = defineEmits(['onChangeReadset','hideReadset']);
//关闭
const close = () => {
    // show.value = false;
    emit('hideReadset');
}

const onChangeReadset = (value,type)=>{
    console.log(value,type)
 emit('onChangeReadset',type,value);
}

const onFontSizeChange =value=>{
    emit('onChangeReadset','fontSize',value);
}
const onLightChange = (value) => {
    emit('onChangeReadset','light',value);
}
const onIsShowChange = (value)=>{
    emit('onChangeReadset','isShowOtherNote',value);
}

</script>
<template>
    <!-- 自定义图标 -->
    <van-popup v-model:show="show" closeable close-icon="close" position="bottom"
        @click-close-icon="close"
        @click-overlay="close"
        :style="{ height: 'auto', padding: '13px' }">
        <h3 class="read-set-title">阅读设置</h3>
        <div class="read-set">
            <van-row justify="space-around" align="center">
                <van-col span="4">
                    字号
                </van-col>
                <van-col span="20">
                    <van-slider v-model="fontSize" :step="2" :min="12" :max="34" @change="onFontSizeChange">
                        <template #button>
                            <div class="custom-button"></div>
                        </template>
                    </van-slider>
                </van-col>
            </van-row>
            <van-divider :style="{ borderColor: 'rgb(154 146 146)', }" />
            <van-row justify="space-around" align="center">
                <van-col span="4">
                    亮度
                </van-col>
                <van-col span="20">
                    <van-slider v-model="light" @change="onLightChange" :min="10" :max="100">
                        <template #button>
                            <div class="custom-button"></div>
                        </template>
                    </van-slider>
                </van-col>
            </van-row>
            <van-divider :style="{ borderColor: 'rgb(154 146 146)', }" />
            <van-row justify="space-between" align="center">
                <van-col span="7">
                    展示他人笔记
                </van-col>
                <van-col span="3">
                    <van-switch v-model="isShowOtherNote" @change="onIsShowChange"/>
                </van-col>
            </van-row>
            <van-divider :style="{ borderColor: 'rgb(154 146 146)', }" />
        </div>
    </van-popup>
</template>
<style scoped lang='scss'>
.read-set {
    font-size: 12px;
    margin-top: 17px;

    .custom-button {
        width: 7px;
        height: 7px;
        border-radius: 50%;
        border: 1px solid #2b2b2b;
    }
}
</style>
