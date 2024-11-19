<template>
    <van-row justify="space-between" @click="enterProfile(item.id)">
        <van-col span="4">
            <van-image width="35px" height="35px" round :src="item.imgBg" />
        </van-col>
        <van-col span="20">
            <van-row justify="center" align="center">
                <van-col span="18">
                    <h3>{{ item.title }}</h3>
                    <p v-if="item.guess === true">你可能感兴趣</p>
                    <p v-else>{{ item.tag }} 领域答主</p>
                    <p class="gray-font">{{ item.answer }}回答.{{ item.follow }}关注</p>
                </van-col>
                <van-col span="6">
                    <FollowIcon :item="item" />
                </van-col>
            </van-row>
            <van-divider />
        </van-col>
    </van-row>
</template>
<script setup>
import FollowIcon from '@/components/FollowIcon.vue';
import { useRouter } from 'vue-router';
const props = defineProps(['item']);
const router = useRouter();
const enterProfile = (id) => {
    router.push(`/profile/${id}`);
}
</script>
<style scoped lang='scss'></style>
