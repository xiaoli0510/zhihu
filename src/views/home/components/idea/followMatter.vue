<script setup lang='ts'>
// 关注问题
import { ref } from 'vue';
import personal from "@/assets/imgs/personal.jpg";
import Answer from '@/components/answer.vue';
import Invite from '@/components/invite.vue';
import Follow from '@/components/follow.vue';
import IconMore from '@/views/home/components/idea/iconMore.vue';
const { item } = defineProps(["item"]);
</script>
<template>
    <div class="item">
        <div class="top">
            <van-image round width="1.5rem" height="1.5rem" :src="personal" />
            <div class="right">
                <div>{{ item.name }} <van-icon name="gem" /></div>
                <div class="time">{{ item.time }} 关注了问题</div>

            </div>
        </div>
        <div class="middle">
            <h3>{{ item.title }}</h3>
        </div>
        <div class="footer">
            <van-row>
                <van-col span="20">
                    <Answer />
                    <Invite/>
                    <Follow/>
                </van-col>
                <van-col span="2" offset="2">
                    <IconMore :item="item"/>
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.item {
    background: #fff;
    margin-bottom: 2%;
    padding: 3% 2%;

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
    }
}
</style>
