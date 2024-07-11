<script setup>
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
                            <p>dage</p>
                            <p>1111</p>
                        </van-col>
                    </van-row>
                </van-col>
                <van-col>
                    <van-icon name="vip-card" size="50px" />
                </van-col>
            </van-row>
            <div class="privilege">
                <van-row justify="space-between">
                    <van-col>享优质专栏、会员电商等特权</van-col>
                    <van-col>全部会员权益<van-icon name="arrow" /></van-col>
                </van-row>
                <van-row>
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
        </van-tab>
        <van-tab title="超级盐选会员">内容 2</van-tab>
    </van-tabs>


</template>
<style scoped lang='scss'></style>
