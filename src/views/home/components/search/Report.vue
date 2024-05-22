<script setup>
import { ref } from 'vue';
import TypeInfo from '../report/TypeInfo.vue'
const checkedWord = ref('');

const isStep1 = ref(true);
const isStep2 = ref(false);
const list = ref([]);
const props = defineProps(['list', 'isReport']);
list.value = props.list;
const isReport = props.isReport;
const onSubmitStep1 = (values) => {
    isStep1.value = false;
    isStep2.value = true;
};
const emit = defineEmits(['hide']);
const onClickCloseIcon = () => {
    emit('hide');
}

//提交举报
const submitReport = () => {
    isStep1.value = false;
    isStep2.value = false;
    onClickCloseIcon();
}

</script>
<template>
    <!-- 举报弹框 -->
    <van-popup class="report-popup" v-model:show="isReport" round closeable close-icon="close" position="bottom"
        @click-close-icon="onClickCloseIcon" :style="{ height: '90%' }">
        <h3>举报</h3>

        <van-form @submit="onSubmitStep1" v-show="isStep1">
            <div class="txt-tips">
                <span class="tip-icon">*</span>哪些搜索词属于不适内容
            </div>
            <van-radio-group v-model="checkedWord">
                <van-cell-group inset>
                    <van-cell :title="item.word" clickable v-for="(item, index) in list" :key="index">
                        <template #right-icon>
                            <van-radio :name="item.id" />
                        </template>
                    </van-cell>
                </van-cell-group>
            </van-radio-group>

            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit" :disabled="!checkedWord">
                    提交
                </van-button>
            </div>
        </van-form>
        <TypeInfo v-if="isStep2" @submit="submitReport" />
    </van-popup>
</template>
<style scoped lang='scss'>
.report-popup {
    padding: 10px 10px 0 10px;

    .txt-tips {
        font-size: 12px;
        color: #838282;
        width: 84%;
        margin: 0 auto;
        line-height: 40px;

        .tip-icon {
            margin-right: 4px;
        }
    }
}
</style>
