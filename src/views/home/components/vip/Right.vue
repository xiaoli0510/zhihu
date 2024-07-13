<script setup>
</script>
<template>
    <div class="part">
        <van-row justify="space-between" align="center">
            <van-col>
                <h3>会员权益</h3>
            </van-col>
            <van-col class="gray-font">
                更多特权<van-icon name="play" size="20px" color="gray" />
            </van-col>
        </van-row>
        <div class="wrap d-flex">
            <div class="item">
                <van-icon name="graphic" size="40px" color="#f2bc72"/>
                <p class="name">优质专栏</p>
                <p class="detail"> 2</p>
            </div>
            <div class="item">
                <van-icon name="graphic" size="30px" />
                <p class="name">优质专栏</p>
                <p class="detail"> 2</p>
            </div>
            <div class="item">
                <van-icon name="graphic" size="30px" />
                <p class="name">优质专栏</p>
                <p class="detail"> 2</p>
            </div>
            <div class="item">
                <van-icon name="graphic" size="30px" />
                <p class="name">优质专栏</p>
                <p class="detail"> 2</p>
            </div>
        </div>
    </div>

</template>
<style scoped lang='scss'>
h3 {
    font-weight: 700;
    line-height: 70px;
}

.wrap {
    justify-content: space-around;

    .item {
        margin-right: 3%;
        border-radius: 10px;
        background: #FEF9F3;
        padding:14px 0 10px 0;
        text-align: center;

     .name{
        color:#A76919;
        margin-top:14px;
     }
     .detail{
        color:#E2CFB6;
        font-size:12px;
     }
    }
}
</style>
