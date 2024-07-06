<script setup>
import {ref} from 'vue';
const value1 = ref(0);
const option1 = [
    { text: '暂无可使用的优惠券', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
];
const checked = ref(true);
const checked1 = ref(1);
</script>
<template>
    <van-row align="center" justify="space-between" class="header-fixed" :class="{ 'white-bg': !isTop }">
        <van-col span="1">
            <BackIcon />
        </van-col>
        <van-col>订单支付</van-col>
    </van-row>
    <van-row>
        <van-col>
            <div>111</div>
            <div>111¥11</div>
        </van-col>
        <van-col>
            <van-image width="100" height="100" radius="5px"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        </van-col>
    </van-row>
    <van-divider />
    <van-row>
        <van-col>优惠券</van-col>
        <van-col>
            <van-dropdown-menu>
                <van-dropdown-item v-model="value1" :options="option1" />
            </van-dropdown-menu>
        </van-col>
    </van-row>
    <van-divider />
    <van-row>
        <van-col>
            <div>匿名参与</div>
            <div class="gray-font">以匿名身份参与互动，参与记录仅自己可见</div>
        </van-col>
        <van-col>
            <van-switch v-model="checked" />
        </van-col>
    </van-row>

    <div>选择支付方式</div>
    <van-radio-group v-model="checked1">
  <van-cell-group inset>
    <van-cell title="单选框 1" clickable @click="checked1 = '1'">
      <template #right-icon>
        <van-radio name="1" />
      </template>
    </van-cell>
    <van-cell title="单选框 2" clickable @click="checked1 = '2'">
      <template #right-icon>
        <van-radio name="2" />
      </template>
    </van-cell>
  </van-cell-group>
</van-radio-group>

</template>
<style scoped lang='scss'></style>
