<script setup>
import { ref } from 'vue';
import PayWay from '../../components/PayWay/Index.vue'
const value1 = ref(0);
const option1 = [];
// const option1 = [
//     { text: '01', value: 0 },
//     { text: '新款商品', value: 1 },
//     { text: '活动商品', value: 2 },
// ];
const checked = ref(false);

const zhihuCurrency = [
    '25', '68', '198', '298', '348', '698'
]
const isRecharge = ref(false);
const zhihuChecked = ref([1]);
const showRecharge = () => {
    isRecharge.value = true;
}

const isZhihuType = ref(false);
const togglePopup = () => {
    isZhihuType.value = !isZhihuType.value;
}
</script>
<template>
    <van-row align="center" justify="flex-start">
        <van-col span="1">
            <BackIcon />
        </van-col>
        <van-col offset="1">订单支付</van-col>
    </van-row>
    <div class="main">
        <div class="info section">
            <van-row justify="space-between" align="center">
                <van-col span="17">
                    <div>111</div>
                    <div>111¥11</div>
                </van-col>
                <van-col span="7">
                    <van-image width="100" height="100" radius="5px"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                </van-col>
            </van-row>
            <van-divider />
            <van-row justify="space-between">
                <van-col>优惠券</van-col>
                <van-col span="9" class="gray-font" v-if="option1.length == 0">暂无可使用的优惠券<van-icon
                        name="arrow" /></van-col>
                <van-col v-else span="7">
                    <van-dropdown-menu>
                        <van-dropdown-item v-model="value1" :options="option1" />
                    </van-dropdown-menu>
                </van-col>
            </van-row>
            <van-divider />
            <van-row justify="space-between" align="center">
                <van-col>
                    <div>匿名参与</div>
                    <div class="gray-font">以匿名身份参与互动，参与记录仅自己可见</div>
                </van-col>
                <van-col span="4">
                    <van-switch v-model="checked" />
                </van-col>
            </van-row>
        </div>
        <div>选择支付方式</div>
        <div class="way section">
            <PayWay>
                <template #zhihu>
                    <van-cell clickable>
                        <template #default>
                            <van-row justify="flex-start" align="center">
                                <van-col><van-icon name="vip-card" size="30px" color="rgb(25, 137, 250)" /></van-col>
                                <van-col offset="1">
                                    <div class="text-l">知乎币</div>
                                    <div class="text-l tip">剩余0（余额不足，请充值）</div>
                                </van-col>
                            </van-row>
                        </template>
                        <template #right-icon>
                            <van-button type="primary" size="small" @click="showRecharge">充值</van-button>
                        </template>
                    </van-cell>
                </template>
            </PayWay>
        </div>
    </div>
    <div class="footer">
        <p class="gray-font">支付即视为您同意 <a href="#">支付协议</a></p>
        <van-row justify="space-between" align="center">
            <van-col class="price">
                ¥ 19.9
            </van-col>
            <van-col>
                <van-button type="primary" size="normal" color="rgb(232 160 26)">确认支付</van-button>
            </van-col>
        </van-row>
    </div>

    <!-- 充值知乎币弹框 -->
    <van-popup v-model:show="isRecharge" position="bottom" :style="{ height: 'auto',padding: '20px' }">
        <van-row justify="space-between">
            <van-col>
                <h2>充值须知</h2>
            </van-col>
            <van-col class="gray-font">
                <van-icon name="info-o" />充值知乎币
            </van-col>
        </van-row>
        <van-grid square :column-num="3">
            <van-grid-item v-for="value in zhihuCurrency" :key="value" icon="photo-o" text="文字">
                <template #default>
                    <div class="zhihu-currency">
                        <van-icon name="gold-coin-o" color="rgb(25, 137, 250)" /> {{ value }}
                    </div>
                    <div class="gray-font">¥ {{ value }}</div>
                </template>
            </van-grid-item>
        </van-grid>
        <van-row justify="space-between" align="center" @click="togglePopup">
            <van-col>
                支付方式
            </van-col>
            <van-col>
                <van-icon name="alipay" size="24px" color="rgb(25, 137, 250)" />
                支付宝支付
                <van-icon name="arrow" size="17px" />
            </van-col>
        </van-row>
        <van-divider />
        <van-checkbox-group v-model="zhihuChecked" shape="square">
            <van-checkbox name="1" class="gray-font">阅读并同意<a href="#">《支付协议》</a></van-checkbox>
        </van-checkbox-group>
        <p class="gray-font recharge-tip">
            温馨提示：所充值的金额仅限在知乎Android端使用，暂不支持文章赞赏与付费咨询业务
        </p>
    </van-popup>

    <!-- 充值知乎币的付款方式弹框 -->
    <van-popup v-model:show="isZhihuType" round :style="{ padding: '14px', width: '90%' }">
        <h2>请选择付款方式</h2>
        <PayWay @change="togglePopup"/>

    </van-popup>
</template>
<style scoped lang='scss'>
.gray-font {
    color: #a09f9f;
    font-size: 12px;
}
.text-l {
        text-align: left;
    }
.main {
    background: #ebeaea;
    height: 100%;
    overflow: hidden;

 

    .section {
        padding-left: 10px;
        background: #fff;
        margin-bottom: 20px;
        border: 1px solid red;
        padding-bottom: 10px;

        &.info {
            padding-top: 20px;
        }

        &.way {
            padding-left: 0;
            margin-left: -24px;

            .tip {
                color: rgb(232 160 26);
            }

        }
    }
}

.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background: #fff;
    padding: 10px;

    .price {
        color: rgb(232 160 26);
    }
}

.zhihu-currency {
    color: rgb(25, 137, 250);
}
.recharge-tip{
    line-height: 20px;
    margin:20px 0;
}
</style>
