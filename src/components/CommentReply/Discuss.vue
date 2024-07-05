<script setup>
import { ref, watch,inject} from 'vue';
import Vue3EmojiPicker from 'vue3-emoji-picker'
import 'vue3-emoji-picker/css'

const props = defineProps(['data']);
const txt = ref(props.data.obj.txt);
const isShow = ref(props.data.isDiscuss);
watch(([()=>props.data.isDiscuss,()=>props.data.obj]),([isDiscuss,obj])=>{
    isDiscuss?isShow.value = isDiscuss:'';
    txt.value=obj?.txt;
    fileList.value=obj?.fileList;
    isSyncIdea.value=obj?.isSyncIdea;
},{
    deep:true
})
const toggleDiscuss = inject('toggleDiscuss'); 
const onClickOverlay = ()=>{
    const params = {
        txt:txt.value,
        isSyncIdea:isSyncIdea.value,
        fileList
    }
    toggleDiscuss(params);
}

const isSpread = ref(false);
const discussTextarea = ref();
const toggleSpread = ()=>{
    isSpread.value = !isSpread.value;
    discussTextarea?.value?.focus();
}

const isSyncIdea = ref(props.data.obj.isSyncIdea);
const disabledGroups = ref["animals_nature",
  "food_drink",
  "activities",
  "travel_places",
  "objects",
  "symbols",
  "flags"];

const onChangeText = (text)=>{
  txt.value = text
}
const submitDiscussFn = inject('submitDiscuss');

const submitDiscuss = ()=>{
    const params = {
        txt:txt.value,
        isSyncIdea:isSyncIdea.value,
        fileList
    }
    submitDiscussFn(params);
}

const fileList = ref(props.data.obj.fileList);
</script>
<template>
    <!-- 圆角弹窗（底部） -->
    <van-popup v-model:show="isShow" round position="bottom"
        :style="{padding:'10px 10px 80px 10px', height: isSpread?'94%':''}" @click-overlay="onClickOverlay">
        <van-row>
            <van-col span="21">
                <div class="emoji-wrap">
                <Vue3EmojiPicker :disable-skin-tones="true" picker-type="textarea"
        :native="true" :hide-group-names="true" @update:text="onChangeText" 
        :disabled-groups=disabledGroups :hide-search="true" :hide-group-icons="true"/></div>
        <van-uploader v-model="fileList" :max-count="1"><span></span></van-uploader>

            </van-col>
            <van-col span="2">
                <van-icon name="arrow-up" size="20px" v-show="!isSpread" @click="toggleSpread" />
                <van-icon name="arrow-down" size="20px" v-show="isSpread" @click="toggleSpread" />
            </van-col>
        </van-row>
        <div class="footer">
            <van-row class="emote-wrap">
                <van-col span="22">
                </van-col>
                <van-col span="2">
                    <van-uploader v-if="fileList.length===0" :max-count="1" v-model="fileList">
                    <van-icon name="invitation" size="20px" />
                </van-uploader>
                <van-icon name="invitation" size="20px" v-if="fileList.length>0"/>
                </van-col>
            </van-row>
            <van-row class="submit-wrap" align="center">
                <van-col span="20">
                    <van-checkbox v-model="isSyncIdea">
                        同时发布到想法
                    </van-checkbox>
                </van-col>
                <van-col span="3" offset="1">
                    <van-button plain type="primary" :disabled="(txt!==''&&txt)||fileList.length>0?false:true" size="small" @click="submitDiscuss">发布</van-button>
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
    :deep(.v3-input-emoji-picker .v3-input-picker-root .v3-emoji-picker-textarea) {
        border: none;
        min-height: auto;
        padding-right: 40px;
    }
</style>
