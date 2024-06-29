<script setup>
import cover from '@/assets/imgs/personal.jpg';
import { inject } from 'vue';
const id = inject('id');
const enterBookshelf = () => {
    showToast(`待完善${id}`);
}
</script>
<template>
    <van-row justify="space-between" align="center">
        <van-col span="2">
            <van-image :src="cover" width="30px" height="30px" radius="5px"/>
        </van-col>
        <van-col span="16">
            <h3>加入书架成功</h3>
            <div>请到会员 Tab-我的书架查看</div>
        </van-col>
        <van-col span="6">
            <van-button type="primary" size="mini" round @click="enterBookshelf">查看书架</van-button>
        </van-col>
    </van-row>
</template>
<style scoped lang='scss'>
</style>
