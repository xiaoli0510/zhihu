<script setup>
import { ref } from 'vue';
import PayWay from '@/components/PayWay/Index.vue'
import VipType from './components/vip/Type.vue'
import Meal from './components/vip/Meal.vue'
import Skill from './components/vip/Skill.vue'
import Read from './components/vip/Read.vue'
import Right from './components/vip/Right.vue'
import Question from './components/vip/Question.vue'
import TopRight from './components/vip/TopRight.vue'

const active = ref(0);

const checked = ref('1');
const changeChecked = (val) => {
    checked.value = val;
}

const skillTitle = ref('提升技能好内容');
const skillTitle1 = ref('轻松有趣故事会');
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
            <TopRights />
            </div>
            <div class="inner">
                <VipType />
                <van-checkbox v-model="checked" class="agree">我已阅读并同意<span class="protocol">《连续订阅服务协议》</span>
                    与
                    <span class="protocol">《会员服务协议》</span>及
                    <span class="protocol">《知乎支付协议》</span>
                </van-checkbox>
                <div class="part">
                    <h3>支付方式</h3>
                    <PayWay checked="checked" @change="changeChecked">
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
                <Meal />
                <!-- 提升技能好内容 -->
               <Skill :title="skillTitle"/>
               <Skill :title="skillTitle1"/>
               <Read />
               <Right />
               <Question />
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


        .agree {
            font-size: 12px;

            .protocol {
                color: #1989fa;
                font-weight: 700;
            }
        }

        .part {
            color: #000;

         
        }
    }

}
</style>
