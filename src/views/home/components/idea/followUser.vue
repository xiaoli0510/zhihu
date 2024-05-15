<script setup lang='ts'>
// 关注用户
import { ref } from 'vue';
import User from '@/views/home/components/idea/user.vue';
import IconMore from '@/views/home/components/idea/iconMore.vue';
import personal from "@/assets/imgs/personal.jpg";
const { item } = defineProps(["item"]);
</script>
<template>
    <div class="item">
        <div class="top">
            <van-image round width="1.5rem" height="1.5rem" :src="personal" />
            <div class="right">
                <div>{{ item.name }} <van-icon name="gem" /></div>
                <div class="time">{{ item.time }} 关注了用户</div>
            </div>
        </div>
        <div class="middle">
            <User :item="item" />
        </div>
        <div class="footer">
            <van-row justify="end">
                <van-col span="2" offset="2">
                    <IconMore :item="item" />
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
                font-size: 12px;
            }
        }
    }

    .middle {
        margin: 4% 0;
    }
}
</style>
