<script setup lang='ts'>
import personal from "@/assets/imgs/personal.jpg";

import Upvote from "@/components/upvote.vue";
import Collect from "@/components/collect.vue";
import Comment from "@/components/comment.vue";
const {item} = defineProps(["item"])
// {
//     name:'宝宝',
//     time:'2024-05-13 07:00',
//     title:'这是一句话标题',
//     sentence:'这是一段话',
//     upvote: 112,
//     collect: 112,
//     comment:12,
// }
</script>
<template>
    <div class="item">
        <div class="top">
            <van-image round width="1.5rem" height="1.5rem" :src="personal" />
            <div class="right">
                <div>{{ item.name }} <van-icon name="gem" /></div>
                <div class="time">{{ item.time }} 回答了问题</div>

            </div>
        </div>
        <div class="middle">
            <h3>{{ item.title }}</h3>
            <p class="sentence">{{ item.sentence }}</p>
            <div class="img-wrap">
                <img :src="item1.img" alt="" v-for="(item1,index1) in item.imgList" :key="index1">
            </div>
        </div>
        <div class="footer">
            <van-row>
                <van-col span="20">
                    <Upvote :item="item" />
                    <Collect :item="item" class="collect" />
                    <Comment :item="item" />
                </van-col>
                <van-col span="2" offset="2">
                    <van-icon name="ellipsis" />
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.item {
    background:#fff;
    margin-bottom:2%;
    padding:3% 2%;
    .top {
        display: flex;
        align-items: center;

        .right {
            margin-left: 2%;
            font-size: 15px;

            .time {
                color: #726d6d;
            }
        }
    }

    .middle {
        margin: 4% 0;

        .sentence {

            margin-top: 3%;
            color: #292828;

        }
    }

    .footer {
        .collect {
            margin: 0 7%;
        }
    }
}
</style>
