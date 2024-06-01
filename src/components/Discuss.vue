<script setup>
import { ref, watch } from 'vue';

const props = defineProps(['isDiscuss','discussValue']);
const discussTxt = ref(props.discussValue);
const isShow = ref(props.isDiscuss);
watch(props,(newVal)=>{
    newVal.isDiscuss?isShow.value = newVal.isDiscuss:'';
    discussTxt.value=newVal.discussValue;
})
const emit = defineEmits(['hideDiscuss']);
const onClickOverlay = ()=>{
    emit('hideDiscuss',discussTxt);
}

const isSpread = ref(false);
const discussTextarea = ref();
const toggleSpread = ()=>{
    isSpread.value = !isSpread.value;
    discussTextarea.value.focus();
}

const isSyncIdea = ref(false);

const smile = ref();
const addEmote = (id)=>{
   


}

</script>
<template>
    <!-- 圆角弹窗（底部） -->
    <van-popup v-model:show="isShow" round position="bottom"
        :style="{padding:'10px 0 110px 0', height: isSpread?'94%':''}" @click-overlay="onClickOverlay">
        <van-row>
            <van-col span="21">
                <!-- <van-cell-group inset> -->
                <!-- <van-field
                            ref="discussTextarea"
                            autofocus
                            v-model="discussTxt"
                            rows="1"
                            autosize
                            label=""
                            type="textarea"
                            placeholder="欢迎参与讨论"
                        /> -->

                <!-- </van-cell-group> -->
            </van-col>
            <van-col span="2">
                <van-icon name="arrow-up" size="20px" v-show="!isSpread" @click="toggleSpread" />
                <van-icon name="arrow-down" size="20px" v-show="isSpread" @click="toggleSpread" />
            </van-col>
        </van-row>
        <div class="footer">
            <van-row class="emote-wrap">
                <van-col span="22">
                    <van-icon name="smile-o" size="20px" />
                    <span class="line">|</span>
                    <van-icon name="smile-o" color="red" size="20px" @click="addEmote(1)" ref="smile" />
                    <van-icon name="smile-o" color="red" size="20px" @click="addEmote(1)" />
                    <van-icon name="smile-o" color="red" size="20px" @click="addEmote(1)" />
                </van-col>
                <van-col span="2">
                    <van-icon name="invitation" size="20px" />
                </van-col>
            </van-row>
            <van-row class="submit-wrap" align="center">
                <van-col span="20">
                    <van-checkbox v-model="isSyncIdea">
                        同时发布到想法
                    </van-checkbox>
                </van-col>
                <van-col span="3" offset="1">
                    <van-button plain type="primary" disabled size="small">发布</van-button>
                </van-col>
            </van-row>
        </div>
    </van-popup>
</template>
<style scoped lang='scss'>
    .footer{
        position: fixed;
        left:0;
        bottom:0;
        width:100%;
       
        .line{
            margin:0 4px;
            height: 24px;
            display:inline-block;
            vertical-align: middle;
        }
        .submit-wrap{
            background:#eeeeee;
            padding:5px;
            height:50px;
        }
        .emote-wrap{
            padding:7px;
            background:#fff;
            height:40px;
        }
    }
    .text-area{
        width:100%;
        height:300px;
        border:1px solid red;
    }
</style>
