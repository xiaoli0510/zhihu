<script setup>
import { ref } from 'vue';

const active = ref(0);
</script>
<template>
    <van-tabs v-model:active="active">
        <van-tab title="盐选会员">
            <van-row justify="space-between" align="center">
                <van-col>
                    <van-row>
                        <van-col>

                            <van-image radius="5px" width="20" height="20"
                                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                        </van-col>
                        <van-col>
                            <p class="name">dage</p>
                            <p class="vip-tip ">1111</p>
                        </van-col>
                    </van-row>
                </van-col>
                <van-col>
                    <van-icon name="vip-card" size="50px" />
                </van-col>
            </van-row>
            <div class="privilege">
                <van-row justify="space-around">
                    <van-col>享优质专栏、会员电商等特权</van-col>
                    <van-col>全部会员权益<van-icon name="arrow" /></van-col>
                </van-row>
                <van-row class="item-wrap">
                    <van-col>
                        <van-icon name="graphic" />
                        <p>优质专栏</p>
                    </van-col>
                    <van-col>
                        <van-icon name="column" />
                        <p>万本好书</p>
                    </van-col>
                    <van-col>
                        <van-icon name="video" />
                        <p>专业课程</p>
                    </van-col>
                    <van-col>
                        <van-icon name="comment-circle" />
                        <p>专属客服</p>
                    </van-col>
                </van-row>
            </div>
            <div class="type">
                <div class="type-item text-c">
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
        </van-tab>
        <van-tab title="超级盐选会员">内容 2</van-tab>
    </van-tabs>


</template>
<style scoped lang='scss'>
.name {
    color: #ddd;
    font-weight: 700;
}

.vip-tip {
    font-size: 12px;
    color: #ddd;
}

.privilege {
    color: #dddd;
    border-radius: 5px;
    background: #ccc;

    .item-wrap {
        border-radius: 5px;
        background:#fff;
        padding:20px 0;

        p {
            font-size: 12px;
        }
    }
}
.type{
    .type-item{
        border:2px solid #ddd;
        background:#fff;
        border-radius: 5px 10px 5px 5px;
        margin-right:2%;
        &.active{
            border:2px solid #ddd;

        }
        .origin-price{
            font-size:12px;
        }
        .tag{
            border-radius: 5px 0 10px 5px 0;
        }
        .footer-discount{
            background:red;
            border-radius: 0 0 5px 5px;
        }
    }
}
</style>
