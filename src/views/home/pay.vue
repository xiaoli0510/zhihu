<script setup>
import { ref } from 'vue';
import PayWay from '../../components/PayWay/PayWay.vue'
import BackIcon from '@/components/BackIcon.vue'
import { useRouter } from 'vue-router';
import {fetchPay} from '@/api/search.js';
const data = ref(null);
const props = defineProps(['id']);
const res = await fetchPay({id:props.id});
data.value = res.data.list;
const isAnonymous = ref(true);//是否匿名参与

//知乎币充值弹框
const zhihuCurrency = [
    '25', '68', '198', '298', '348', '698'
]
const isRecharge = ref(false);//知乎币充值弹框是否显示
const zhihuChecked = ref(false);//知乎币充值的支付协议是否勾选
const showRecharge = () => {
    isRecharge.value = true;
}

//知乎币的支付方式弹框
const isZhihuType = ref(false);//知乎币的支付方式弹框是否显示
const zhihuPayWay = ref('1');//知乎币充值方式 1支付宝 3微信
//显示隐藏知乎币的支付方式弹框
const togglePopup = (value) => {
    isZhihuType.value = !isZhihuType.value;
    value?zhihuPayWay.value = value:'';
}

const router = useRouter();
const enterPayProtocol = ()=>{
    router.push('/pay/protocol');
}
const enterRechargeProtocol = ()=>{
    router.push('/recharge/protocol');
}
const selectRechargeNum = (value) => {
    if (zhihuChecked.value) {
        zhihuPayWay.value === '1' ? showToast('去支付宝支付') : showToast('去微信支付');
    } else {
        showToast('请阅读并同意《支付协议》');
    }
}

//订单支付
const orderPayWay = ref('1');//订单支付方式 1支付宝 2知乎币 3微信
const changeOrderPayWay = (value)=>{
    orderPayWay.value = value;
}
const surePay = ()=>{
    const params = {
        id:props.id,
        price:data.value.price,
        couponId:chosenCoupon.value!==-1?data.value.coupons[chosenCoupon.value].id:-1,
        isAnonymous:isAnonymous.value,
        way:orderPayWay.value,
    };
    switch(orderPayWay.value){
        case '1':
            showToast('去支付宝支付');
            break;
        case '2':
            showToast('去知乎币支付');
            break;
        case '3':
            showToast('去微信支付');
            break;
    }
}

//优惠券
const coupon = {
    id: 99,
    "available": 1,//0可用 1不可用
    condition: '无门槛\n最多优惠12元',
    reason: '',
    value: 150,
    name: '优惠券名称',
    startAt: 1489104000,
    endAt: 1514592000,
    valueDesc: "1",
    unitDesc: '元',
}
const showList = ref(false);
const chosenCoupon = ref(-1);
const onChange = (index) => {
    showList.value = false;
    chosenCoupon.value = index;
};
const onExchange = (code) => {
    data.value.coupons.push(coupon);
};
</script>
<template>
    <van-row align="center" justify="flex-start" class="header-fixed">
        <van-col span="1">
            <BackIcon />
        </van-col>
        <van-col offset="1">订单支付</van-col>
    </van-row>
    <div class="main">
        <div class="info section">
            <van-row justify="space-between" align="center">
                <van-col span="17">
                    <div>{{data.title}}</div>
                    <div>¥ {{data.price}}</div>
                </van-col>
                <van-col span="7">
                    <van-image width="100" height="100" radius="5px"
                        :src="data.cover" />
                </van-col>
            </van-row>
            <van-divider />
            <van-row justify="space-between">
                <van-col span="24">
                    <van-coupon-cell  class="coupons-wrap" :coupons="data.coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />
                </van-col>
            </van-row>
            <van-divider />
            <van-row justify="space-between" align="center">
                <van-col>
                    <div>匿名参与</div>
                    <div class="gray-font">以匿名身份参与互动，参与记录仅自己可见</div>
                </van-col>
                <van-col span="4">
                    <van-switch v-model="isAnonymous" />
                </van-col>
            </van-row>
        </div>
        <div class="way-tip">选择支付方式</div>
        <div class="way section">
            <PayWay :checked="orderPayWay" @change="changeOrderPayWay">
                <template #otherWay>
                    <van-cell clickable>
                        <template #default>
                            <van-row justify="flex-start" align="center">
                                <van-col><van-icon name="vip-card" size="30px" color="var(--color-blue-text)" /></van-col>
                                <van-col offset="1">
                                    <div class="text-l">知乎币</div>
                                    <div class="text-l tip">剩余{{data.zhihuCurreny}} {{data.zhihuCurreny<data.price?'（余额不足，请充值）':''}}</div>
                                </van-col>
                            </van-row>
                        </template>
                        <template #right-icon>
                            <van-button v-if="data.zhihuCurreny<data.price" type="primary" size="small" @click="showRecharge">充值</van-button>
                            <van-radio name="2" v-else @click="changeOrderPayWay('2')"/>
                        </template>
                    </van-cell>
                </template>
            </PayWay>
        </div>
    </div>
    <div class="footer">
        <p class="gray-font tip">支付即视为您同意 <span class="protocol-txt" @click="enterPayProtocol">支付协议</span></p>
        <van-row justify="space-between" align="center">
            <van-col class="price">
                ¥ {{ data.price }}
            </van-col>
            <van-col>
                <van-button type="primary" size="normal" color="#fb5b1b" @click="surePay">确认支付</van-button>
            </van-col>
        </van-row>
    </div>

    <!-- 充值知乎币弹框 -->
    <van-popup v-model:show="isRecharge" position="bottom" :style="{ height: 'auto',padding: '20px' }">
        <van-row justify="space-between">
            <van-col>
                <h2>充值须知</h2>
            </van-col>
            <van-col class="gray-font" @click="enterRechargeProtocol">
                <van-icon name="info-o" />充值知乎币
            </van-col>
        </van-row>
        <van-grid square :column-num="3">
            <van-grid-item v-for="value in zhihuCurrency" :key="value" @click="selectRechargeNum(value)">
                <template #default>
                    <div class="zhihu-currency">
                        <van-icon name="gold-coin-o" color="var(--color-blue-text)" /> {{ value }}
                    </div>
                    <div class="gray-font">¥ {{ value }}</div>
                </template>
            </van-grid-item>
        </van-grid>
        <van-row justify="space-between" align="center" @click="togglePopup()">
            <van-col>
                支付方式
            </van-col>
            <van-col v-if="zhihuPayWay==='1'">
                <van-icon name="alipay" size="24px" color="var(--color-blue-text)"/>
                支付宝支付
                <van-icon name="arrow" size="17px" />
            </van-col>
            <van-col v-if="zhihuPayWay==='3'">
                <van-icon name="wechat-pay" size="30" color="var(--color-blue-text)" />
                微信支付
                <van-icon name="arrow" size="17px" />
            </van-col>
        </van-row>
        <van-divider />
        <van-checkbox shape="square" v-model="zhihuChecked" class="gray-font">阅读并同意<span class="protocol-txt border-b"
                @click="enterPayProtocol">《支付协议》</span></van-checkbox>
        <p class="gray-font recharge-tip">
            温馨提示：所充值的金额仅限在知乎Android端使用，暂不支持文章赞赏与付费咨询业务
        </p>
    </van-popup>

    <!-- 充值知乎币的付款方式弹框 -->
    <van-popup v-model:show="isZhihuType" round :style="{ padding: '14px', width: '90%' }">
        <h2>请选择付款方式</h2>
        <PayWay @change="togglePopup" :checked="zhihuPayWay" />
    </van-popup>

    <!-- 优惠券列表 -->
    <van-popup v-model:show="showList" round position="bottom" style="height: 90%; padding-top: 4px;">
        <van-coupon-list :coupons="data.coupons" :chosen-coupon="chosenCoupon" :disabled-coupons="data.coupons.filter(item=>item.available===0)"
          @change="onChange" @exchange="onExchange" />
    </van-popup>
</template>
<style scoped lang='scss'> 
.main {
    background: #ebeaea;
    height: 100%;
    overflow: hidden;
    .way-tip{
        line-height:30px;
        padding-left:10px;
        font-size:12px;
    }
    .section {
        padding-left: 10px;
        background: #fff;
        margin-bottom: 20px;
        padding-bottom: 10px;

        &.info {
            padding-top: 20px;

            .coupons-wrap {
                font-size: 16px;
            }
        }

        &.way {
            padding-left: 0;
            margin-left: -24px;

            .tip {
                color: #fb5b1b;
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
    .tip{
        margin-bottom:20px;
    }

    .price {
        color: #fb5b1b;
    }

}

.zhihu-currency,
.protocol-txt {
    color: var(--color-blue-text);

    &.border-b {
        border-bottom: 1px solid var(--color-blue-text);
    }
}

.recharge-tip {
    line-height: 20px;
    margin: 20px 0;
}
</style>
