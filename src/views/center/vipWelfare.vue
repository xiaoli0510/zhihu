<script setup>
import { ref } from 'vue';
import BackIcon from '@/components/BackIcon.vue'
const time = ref(10 * 60 * 60 * 1000);
const enterYanyangushi = () => {
    location.href = 'https://soia.zhihu.com/hybrid?open=1&package=yanyangushi&zh_url=https://www.zhihu.com/vip-promotion/get-coupon/welcome/D5K926?utm_medium=other_www.zhihu.com%252Fvip-promotion%252Fget-coupon&zh_hide_nav_bar=true&zh_hide_tab_bar=true&theme=light&package=yanyangushi&utm_app_name=Zhihu&fallback_url=https://story.zhihu.com/hybrid'
}
</script>
<template>
    <div class="vip-welfare">
        <BackIcon color="#fff" size="30px" />
        <div class="txt-header">
            <div class="user-name">Hi 大哥的女人</div>
            <div class="receive-tip">请查收你的专属会员福利</div>
        </div>
        <div class="card">
            <div class="card-content">
                <van-row justify="space-between" class="card-type" align="center">
                    <van-col span="3">
                        <van-icon name="invitation" color="#b49144" size="30" />
                    </van-col>
                    <van-col span="17">
                        <div class="vip-name">知乎盐选会员</div>
                        <div class="vip-explain">为你严选好内容</div>
                    </van-col>
                    <van-col span="4">
                        月卡
                    </van-col>
                </van-row>
                <van-divider :style="{ borderColor: '#92815d' }" />
                <van-row justify="center" class="card-price">
                    <van-col span="5">
                        <p class="cost-price">原价19元</p>
                        <p class="discount-price">优惠价</p>
                    </van-col>
                    <van-col span="8" class="price-num" offset="1">
                        ¥ 1
                    </van-col>
                </van-row>
            </div>

            <div class="card-mask">
                <van-button type="primary" block round color="rgb(196 92 7)" plain
                    @click="enterYanyangushi">打开盐言故事开启活动</van-button>
                <div class="count-down-wrap">
                    <span>距离活动倒计时还剩 </span>
                    <van-count-down :time="time">
                        <template #default="timeData">
                            <span class="block">{{ timeData.hours }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.minutes }}</span>
                            <span class="colon">:</span>
                            <span class="block">{{ timeData.seconds }}</span>
                        </template>
                    </van-count-down>
                </div>
            </div>
        </div>
        <van-divider :style="{ borderColor: '#92815d' }" />
        <div class="card-progress">
            <h2 class="title">进度详情</h2>
            <van-row justify="end">
                <van-col>
                    <span>刷新</span>
                    <van-icon name="replay" />
                </van-col>
            </van-row>
            <div class="progress-tip">好友登录浏览，才能助力成功哦</div>
            <van-empty description="暂无邀请记录" />
        </div>
    </div>
</template>
<style scoped lang='scss'>
.vip-welfare {
    padding: 10px 5px;
    background: #f7e2b5;
    height: 100%;

    .txt-header {
        width: 90%;
        margin: 1% auto 0;
        color: #92815d;

        .receive-tip {
            font-size: 24px;
            font-weight: 700;
            color: #b49144;
            line-height: 50px;
        }
    }

    .card {
        background: #e03030;
        width: 97%;
        margin: 71px auto 0;
        border-radius: 9px;
        padding: 9px;

        .card-content {
            position: relative;
            top: -60px;
            width: 100%;
            margin: 0 auto;
            background: linear-gradient(to bottom, #faf5ec, #faf1da);
            padding: 10px;
            border-radius: 9px 9px 0 0;

            .card-type {
                color: #b49144;

                .vip-name {
                    color: #b49144;
                    font-weight: 600;
                }

                .vip-explain {
                    color: #b49144;
                    font-size: 12px;
                }
            }

            .card-price {
                color: rgb(235, 40, 40);

                .cost-price {
                    color: #3a3939;
                    text-decoration: line-through;
                    font-size: 14px;
                }

                .discount-price {
                    border: 1px solid rgb(235, 40, 40);
                    font-weight: 700;
                    line-height: 24px;
                    border-radius: 2px;
                    text-align: center;
                }

                .price-num {
                    font-size: 40px;
                    font-weight: 600;
                }
            }

        }

        .card-mask {
            background: #e03030;
            width: 100%;
            color: #fff;
            font-size: 14px;
            text-align: center;
            padding: 20px 0;
            margin-top: -50px;

            .count-down-wrap {
                margin: 3% auto 4% auto;

                span {
                    vertical-align: middle;
                }
            }

            .colon {
                display: inline-block;
                margin: 0 4px;
                color: #fff;
            }

            .block {
                display: inline-block;
                width: 22px;
                color: #fff;
                font-size: 12px;
                text-align: center;
                background-color: #c45c07;
                border: 1px solid #fff;
                border-radius: 4px;
            }

            :deep(.van-count-down) {
                display: inline-block;
            }
        }
    }

    .card-progress {
        background: #fff;
        border-radius: 5px;
        padding: 9px;
        position: relative;
        width: 97%;
        margin: 30px auto 0;

        .title {
            position: absolute;
            left: 50%;
            transform: translate(-50%, 0);
            top: -4px;
            border-radius: 0 0 7px 7px;
            background: #f3e3c0;
            color: #85641e;
            line-height: 40px;
            padding: 0 20px;
            font-weight: 600;
        }

        .progress-tip {
            color: #b49144;
            border: 1px solid #b49144;
            padding: 0 11px;
            line-height: 24px;
            height: 24px;
            width: 80%;
            text-align: center;
            border-radius: 11px;
            margin: 20px auto 0;
        }
    }

}
</style>
