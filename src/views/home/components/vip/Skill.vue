<script setup>
const props = defineProps(['title']);

</script>
<template>
    <div class="part">
        <van-row justify="space-between" align="center">
            <van-col>
                <h3>{{ props.title }}</h3>
            </van-col>
            <van-col class="gray-font">
                查看更多<van-icon name="play" size="20px" color="gray" />
            </van-col>
        </van-row>
        <div class="wrap d-flex">
            <div class="item">
                <div class="img-wrap">
                    <van-image fit="contain" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    <div class="tag-vip">VIP</div>
                    <div class="tag-yanxuan">盐选专栏</div>
                </div>
                <van-row align="center" justify="flex-start" class="txt">
                    <van-col>
                       <span class="only">独家</span>
                       <span>值得呃呃呃，恶人热偶我让他人头了热他</span>
                    </van-col>
                </van-row>
            </div>
            <div class="item">
                <div class="img-wrap">
                    <van-image fit="contain" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    <div class="tag-vip">VIP</div>
                    <div class="tag-yanxuan">盐选专栏</div>
                </div>
                <van-row justify="space-between" align="center" class="txt">
                    <van-col>
                       <span class="only">独家</span>
                    </van-col>
                    <van-col>
                        值得呃呃呃，恶人热偶我让他人头了热他
                    </van-col>
                </van-row>
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
        min-width: 48%;
        margin-right: 3%;
        border-radius: 10px;
        background: #fff;

        .img-wrap {
            height: 90px;
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

        .txt {
            // padding: 0 10px;
            color:#000;
            white-space: normal;
            margin-top:4px;
            .only{
                font-size:12px;
                color: #f96519;
                border:1px solid #f96519;
                border-radius:2px 2px 7px 2px;
                margin-right:5px;
            }
        }
    }
}
</style>
