<script setup>
</script>
<template>
    <div class="part">
        <van-row justify="space-between" align="center">
            <van-col>
                <h3>杂志及出版精选读物</h3>
            </van-col>
            <van-col class="gray-font">
                查看更多<van-icon name="play" size="20px" color="gray" />
            </van-col>
        </van-row>
        <div class="wrap d-flex">
            <div class="item">
                <div class="img-wrap">
                    <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    <div class="tag-vip">VIP</div>
                    <div class="tag-yanxuan">电子书</div>
                </div>
                <p> 值得呃呃呃，恶人热偶我让他人头了热他值得呃呃呃，恶人热偶我让他人头了热他</p>
            </div>
            <div class="item">
                <div class="img-wrap">
                    <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    <div class="tag-vip">VIP</div>
                    <div class="tag-yanxuan">电子书</div>
                </div>
            </div>
            <div class="item">
                <div class="img-wrap">
                    <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    <div class="tag-vip">VIP</div>
                    <div class="tag-yanxuan">电子书</div>
                </div>
            </div>
            <div class="item">
                <div class="img-wrap">
                    <van-image src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    <div class="tag-vip">VIP</div>
                    <div class="tag-yanxuan">电子书</div>
                </div>
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
    white-space: nowrap;
    overflow-x: auto;

    .item {
        min-width: 30%;
        margin-right: 3%;
        border-radius: 10px;
        background: #fff;
        white-space: normal;

        .img-wrap {
            border-radius: 10px 10px 0 0;
            overflow: hidden;
            position: relative;
            .tag-vip,.tag-yanxuan{
                display:inline-block;
                position: absolute;
                padding:3px 7px;
                border-radius: 10px 0 10px 0;
                font-size:12px;
            }
            .tag-vip{
                left:0;
                top:0;
                color: #6a450e;
                background: #f3c995;
            }
            .tag-yanxuan{
                right:0;
                bottom:0;
                color: #000;
                background: #fff;
            }
        }
    }
}
</style>
