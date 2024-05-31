<script setup lang='ts'>
import personal from "@/assets/imgs/personal.jpg";
// const item = ref({
//     name: '宝贝',
//     follow: 12,
// })

const {item} = defineProps(['item']);
</script>
<template>
    <div class="user-item">
        <van-row justify="space-between" algin="center">
            <van-col span="9">
                <van-row>
                    <van-col span="7">
                        <van-image round width="1rem" :src="personal" />
                    </van-col>
                    <van-col span="14" offset="2">
                        <van-row>
                            <van-col span="24">
                                <div class="name">{{ item.name }}</div>
                            </van-col>
                        <van-col span="24">
                                <div class="follow">{{ item.follow }}人关注</div>
                            </van-col>
                        </van-row>
                    </van-col>
                </van-row>
            </van-col>
            <van-col span="5">
                <van-button round icon="plus" type="primary" size="small">
                    关注
                </van-button> 
            </van-col>
        </van-row>
    </div>
</template>
<style scoped lang='scss'>
.user-item {
    border-radius: 10px;
    background: #f5f3f3;
    padding: 14px;
    .name{
        font-size:16px;
        line-height: 22px;
    }

    .follow {
        font-size: 10px;
    }
}
</style>
