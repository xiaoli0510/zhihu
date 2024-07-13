<script setup>

</script>
<template>
    <!-- 更多套餐 -->
    <div class="part">
        <h3>更多套餐</h3>
        <div class="wrap d-flex">
            <div class="item">
                <div class="img-wrap"><van-image fit="contain"
                        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                </div>
                <van-row justify="space-between" align="center" class="txt">
                    <van-col>8
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
</template>
<style scoped lang='scss'>
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
</style>
