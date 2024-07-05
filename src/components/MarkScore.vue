<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['isMarkScore', 'data']);
const isShow = ref(props.isMarkScore);
const obj = ref(props.data);
watch(() => props.isMarkScore, (newVal) => {
    isShow.value = newVal;
}, {
    immediate: true
})
const emit = defineEmits(['close']);
const close = () => {
    emit('close');
}
const SCORE_TXT = {
    1: '极不满意',
    2: '不满意',
    3: '一般',
    4: '比较满意',
    5: '非常满意',
}
const isGegerateImg = ref(false);
const fileList = ref([]);
const submit = () => {
    if (obj.value.isVip) {
        Object.assign(obj, { fileList: fileList.value }, { isGegerateImg: isGegerateImg.value });
        emit('close');
    } else {
        showToast({
            message: '付费阅读内容仅会员可评论',
            position: 'bottom',
            zIndex:3001,
        })
    }
}
</script>
<template>
    <van-popup z-index="3000" v-model:show="isShow" :close-on-click-overlay="false" round closeable close-icon="close" position="bottom" @click-close-icon="close"
        :style="{ height: '97%', padding: '10px' }">
        <p class="comment-power">付费阅读内容仅会员可评论</p>
        <van-uploader v-model="fileList" :max-count="1"><span></span></van-uploader>
        <div class="mark-wrap">
            <h3>{{ obj.title }}</h3>
            <p class="score-tip">这是我知乎评价的第一个内容</p>
            <van-rate :size="35" icon="star" color="#f5500f" void-color=" rgb(230 187 170)" v-model="obj.score"
                allow-half />
            <p v-show="obj.score > 0" class="score-txt">{{ SCORE_TXT[Math.ceil(obj.score)] }}</p>
        </div>
        <div class="footer">
            <van-row class="emote-wrap" justify="end">
                <van-col span="2">
                    <van-uploader v-if="fileList.length === 0" :max-count="1" v-model="fileList">
                        <van-icon name="invitation" size="20px" />
                    </van-uploader>
                    <van-icon name="invitation" size="20px" v-if="fileList.length > 0" />
                </van-col>
            </van-row>
            <van-row class="submit-wrap" align="center">
                <van-col span="20">
                    <van-checkbox v-model="isGegerateImg">
                        生成大图海报
                    </van-checkbox>
                </van-col>
                <van-col span="3" offset="1">
                    <van-button plain type="primary"
                        :disabled="((obj.score !== '') || fileList.length > 0) ? false : true" size="small"
                        @click="submit">发布</van-button>
                </van-col>
            </van-row>
        </div>
    </van-popup>
</template>
<style scoped lang='scss'>
.comment-power {
    line-height: 40px;
    color: #b8b6b6;
}

.mark-wrap {
    background: #f7f7f7;
    border-radius: 9px;
    width: 94%;
    padding: 10px 0 20px 0;
    margin: 30px auto 40px;
    text-align: center;
    line-height: 30px;

    .score-tip {
        color: #686666;
        font-size: 12px;
    }

    .score-txt {
        font-size: 10px;
        color: #f5500f;
    }
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;

    .line {
        margin: 0 4px;
        height: 24px;
        display: inline-block;
        vertical-align: middle;
    }

    .submit-wrap {
        background: #eeeeee;
        padding: 5px;
        height: 50px;
    }

    .emote-wrap {
        padding: 7px;
        background: #fff;
        height: 40px;
    }
}
</style>
