<script setup>
import { ref, watch } from 'vue';
const props = defineProps(['checked']);
const emit = defineEmits(['change'])
const checked = ref(props.checked);
watch(()=>props.checked,(val)=>{
    checked.value = val;
})
const changeChecked = (value) => {
    emit('change',value)
}
</script>
<template>
    <van-radio-group v-model="checked" shape="dot">
        <van-cell-group inset>
            <van-cell clickable @click="changeChecked('1')">
                <template #default>
                    <van-row justify="flex-start" align="center">
                        <van-col><van-icon name="alipay" size="30px" color="var(--color-blue-text)" /></van-col>
                        <van-col offset="1">
                            <div class="text-l pay-type">支付宝<van-tag color="rgb(251, 91, 27)" text-color="#fff">推荐</van-tag></div>
                            <div class="text-l">亿万用户的选择，更快更安全</div>
                        </van-col>
                    </van-row>
                </template>
                <template #right-icon>
                    <van-radio name="1" />
                </template>
            </van-cell>
            <slot name="otherWay">
            </slot>
            <van-cell clickable @click="changeChecked('3')">
                <template #default>
                    <van-row justify="flex-start" align="center">
                        <van-col><van-icon name="wechat-pay" size="30" color="var(--color-blue-text)" /></van-col>
                        <van-col offset="1">
                            <div class="text-l pay-type">微信支付</div>
                        </van-col>
                    </van-row>
                </template>
                <template #right-icon>
                    <van-radio name="3" />
                </template>
            </van-cell>
        </van-cell-group>
    </van-radio-group>
</template>
<style scoped lang='scss'>
.text-l {
    text-align: left;
}
.pay-type{
    color:#000;
}
</style>
