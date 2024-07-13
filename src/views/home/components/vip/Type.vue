<script setup>
// const item = ref({
//     tag:'超值推荐',
//     name:'连续包月',
//     price:19,
//     originPrice:22,
//     explain:'次月¥ 19 续费可随时取消',
//     discount:''
// })

</script>
<template>
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
</template>
<style scoped lang='scss'>
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
            border-radius: 10px 0 10px 0;
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
</style>
