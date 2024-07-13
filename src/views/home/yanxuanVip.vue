<script setup>
import { ref } from 'vue';
import PayWay from '@/components/PayWay/Index.vue'

const active = ref(0);

const checked = ref('1');
const change = (val) => {
    checked.value = val;
}
</script>
<template>
    <van-tabs v-model:active="active" class="vip-wrap">
        <van-tab title="盐选会员">
            <van-row justify="space-between" align="center" class="header">
                <van-col>
                    <van-row>
                        <van-col>
                            <van-image width="40" height="40" round
                                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                        </van-col>
                        <van-col>
                            <p><b>dage</b></p>
                            <p>1111</p>
                        </van-col>
                    </van-row>
                </van-col>
                <van-col>
                    <van-icon name="vip-card" size="100px" color="#dc891c" />
                </van-col>
            </van-row>
            <div class="privilege">
                <van-row justify="space-around">
                    <van-col>享优质专栏、会员电商等特权</van-col>
                    <van-col>全部会员权益<van-icon name="arrow" /></van-col>
                </van-row>
                <van-row class="item-wrap" justify="space-around" align="center">
                    <van-col align="center">
                        <van-icon name="graphic" size="30px" />
                        <p>优质专栏</p>
                    </van-col>
                    <van-col align="center">
                        <van-icon name="column" size="30px" />
                        <p>万本好书</p>
                    </van-col>
                    <van-col align="center">
                        <van-icon name="video" size="30px" />
                        <p>专业课程</p>
                    </van-col>
                    <van-col align="center">
                        <van-icon name="comment-circle" size="30px" />
                        <p>专属客服</p>
                    </van-col>
                </van-row>
            </div>
            <div class="inner">
                <div class="type">
                    <div class="type-item text-c active">
                        <p class="tag">超值推荐</p>
                        <p class="name">连续包月</p>
                        <p class="price">¥ 19</p>
                        <p class="origin-price">¥25</p>
                        <p class="gray-font">次月¥ 19 续费可随时取消</p>
                    </div>
                    <div class="type-item text-c">
                        <p class="tag">限时 5 折</p>
                        <p class="name">特惠年卡</p>
                        <p class="price">¥ 118</p>
                        <p class="origin-price">¥238</p>
                        <p class="gray-font">立减 ¥120</p>
                    </div>
                    <div class="type-item text-c">
                        <p class="name">连续包季</p>
                        <p class="price">¥ 53</p>
                        <p class="origin-price">¥68</p>
                        <p class="gray-font">次季 ¥53 续费可随时取消</p>
                    </div>
                    <div class="type-item text-c">
                        <p class="tag">赠网易云 VIP</p>
                        <p class="name">连续包年</p>
                        <p class="price">¥ 198</p>
                        <p class="origin-price">¥238</p>
                        <p class="gray-font">次年 ¥198 续费可随时取消</p>
                        <p class="footer-discount">买一赠一</p>
                    </div>
                    <div class="type-item text-c">
                        <p class="name">季卡</p>
                        <p class="price">¥ 68</p>
                        <p class="origin-price">¥22.7/月</p>
                    </div>
                    <div class="type-item text-c">
                        <p class="tag">赠网易云 VIP</p>
                        <p class="name">年卡</p>
                        <p class="price">¥ 238</p>
                        <p class="origin-price">¥19.9/月</p>
                        <p class="footer-discount">买一赠一</p>
                    </div>
                    <div class="type-item text-c">
                        <p class="name">月卡</p>
                        <p class="price">¥ 25</p>
                    </div>
                </div>
                <van-checkbox v-model="checked" class="agree">我已阅读并同意<span class="protocol">《连续订阅服务协议》</span>
                    与
                    <span class="protocol">《会员服务协议》</span>及
                    <span class="protocol">《知乎支付协议》</span>
                </van-checkbox>
                <div class="part">
                    <h3>支付方式</h3>
                    <PayWay checked="checked" @change="change">
                        <template #otherWay>
                            <van-cell clickable @click="changeChecked('4')">
                                <template #default>
                                    <van-row justify="flex-start" align="center">
                                        <van-col><van-icon name="invitation" size="30px"
                                                color="var(--color-blue-text)" /></van-col>
                                        <van-col offset="1">
                                            <div class="text-l pay-type">花呗</div>
                                        </van-col>
                                    </van-row>
                                </template>
                                <template #right-icon>
                                    <van-radio name="4" />
                                </template>
                            </van-cell>
                        </template>
                    </PayWay>
                </div>
                <van-divider class="vip-worth">价值100w+精选会员权益</van-divider>
                <!-- 更多套餐 -->
                <div class="part">
                    <h3>更多套餐</h3>
                    <div class="wrap d-flex">
                        <div class="item">
                            <div class="img-wrap"><van-image fit="contain"
                                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                            </div>
                            <van-row justify="space-between" align="center" class="txt">
                                <van-col>
                                    ¥ <b>1</b>
                                </van-col>
                                <van-col>
                                    立即开通 <van-icon name="play" size="20px" />
                                </van-col>
                            </van-row>
                        </div>
                    </div>
                </div>
                <!-- 提升技能好内容 -->
                <div class="part">
                    <van-row justify="space-between" align="center">
                        <van-col>
                            <h3>提升技能好内容</h3>
                        </van-col>
                        <van-col>
                           查看更多<van-icon name="play" size="20px" />
                        </van-col>
                    </van-row>
                    <div class="wrap d-flex">
                        <div class="item">
                            <div class="img-wrap"><van-image fit="contain"
                                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                            </div>
                            <van-row justify="space-between" align="center" class="txt">
                                <van-col>
                                    ¥ <b>1</b>
                                </van-col>
                                <van-col>
                                    立即开通 <van-icon name="play" size="20px" />
                                </van-col>
                            </van-row>
                        </div>
                        <div class="item">
                            <div class="img-wrap"><van-image fit="contain"
                                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                            </div>
                            <van-row justify="space-between" align="center" class="txt">
                                <van-col>
                                    ¥ <b>1</b>
                                </van-col>
                                <van-col>
                                    立即开通 <van-icon name="play" size="20px" />
                                </van-col>
                            </van-row>
                        </div>
                        <div class="item">
                            <div class="img-wrap"><van-image fit="contain"
                                    src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                            </div>
                            <van-row justify="space-between" align="center" class="txt">
                                <van-col>
                                    ¥ <b>1</b>
                                </van-col>
                                <van-col>
                                    立即开通 <van-icon name="play" size="20px" />
                                </van-col>
                            </van-row>
                        </div>
                    </div>
                </div>

            </div>
        </van-tab>
        <van-tab title="超级盐选会员">内容 2</van-tab>
    </van-tabs>


</template>
<style scoped lang='scss'>
.vip-wrap {
    color: #A76919;

    .header {
        background: #F7CF9C;
        width: 94%;
        margin: 0 auto;

        .vip-tip {
            font-size: 12px;
        }
    }

    .privilege {
        width: 94%;
        margin: 10px auto;
        border-radius: 5px;
        background: #FFDBAA;
        border: 1px solid #dd8e1f;
        padding: 10px 0 0 0;

        .item-wrap {
            border-radius: 11px 11px 5px 5px;
            background: #fff;
            margin-top: 10px;
            padding: 24px 0;


            p {
                font-size: 12px;
            }
        }
    }

    .inner {
        width: 90%;
        margin: 0 auto;

        .type {
            border: 1px solid red;
            margin: 20px auto;
            display: flex;
            overflow-y: auto;

            .type-item {
                min-width: 33% !important;
                background: #fff;
                border-radius: 10px 24px 10px 10px;
                margin-right: 2%;
                border: 2px solid #ccc;
                height: 170px;
                align-items: top;
                padding: 20px 10px;
                position: relative;
                margin-top: 10px;
                color: #000;

                &.active {
                    border: 2px solid #e4bb79;
                    color: #6a450e;

                    .price {
                        color: #6a450e;
                    }

                }

                .tag {
                    color: #6a450e;
                    font-size: 12px;
                    position: absolute;
                    left: 0;
                    top: -10px;
                    background: #f3c995;
                    line-height: 20px;
                    border-radius: 14px 0 14px 0;
                    z-index: 999;
                    padding: 0 5px;
                    font-weight: 700;
                }

                .price {
                    color: #000;
                    line-height: 30px;
                    font-weight: 700;
                }


                .origin-price {
                    font-size: 12px;
                    color: #6a450e;
                    line-height: 22px;
                }

                .tag {
                    border-radius: 5px 0 10px 5px 0;
                }

                .footer-discount {
                    background: #F96519;
                    position: absolute;
                    border-radius: 0 0 10px 10px;
                    width: 100%;
                    left: 0;
                    bottom: -2px;
                    color: #fff;
                    font-size: 12px;
                    line-height: 24px;
                }
            }
        }

        .agree {
            font-size: 12px;

            .protocol {
                color: #1989fa;
                font-weight: 700;
            }
        }

        .part {
            color: #000;

            h3 {
                font-weight: 700;
                line-height: 70px;
            }

            .wrap {
                white-space: nowrap;
                overflow-x: auto;
                border: 1px solid #000;

                .item {
                    min-width: 50%;
                    margin-right: 3%;
                    border-radius: 10px;
                    // box-shadow: 10px 0 0 #ddd;
                    border: 1px solid red;
                    background: #fff;

                    .img-wrap {
                        height: 70px;
                        border-radius: 10px 10px 0 0;
                        overflow: hidden
                    }

                    .txt {
                        line-height: 50px;
                        padding: 0 10px;
                    }
                }
            }
        }
    }

}
</style>
