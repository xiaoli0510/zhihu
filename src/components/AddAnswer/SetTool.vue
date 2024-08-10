<script setup>
import { ref } from 'vue';
const checkedRelay = ref(true);
const checkedPush = ref(true);
</script>
<template>
    <div class="set-wrap">
        <van-cell-group inset>
            <van-cell title="收录到专栏" value="未收录" is-link />
            <van-cell value="未声明" is-link>
                <template #title>
                    <span class="custom-title">创作声明</span>
                    <van-icon name="question-o" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group inset>
            <van-cell title="禁止转载">
                <template #right-icon>
                    <van-switch v-model="checkedRelay" size="20px" />
                </template>
            </van-cell>
            <van-cell title="评论权限" value="任何人都可以评论" is-link />
            <van-cell title="推送给我的关注者">
                <template #right-icon>
                    <van-switch v-model="checkedPush" size="20px" />
                </template>
            </van-cell>
        </van-cell-group>
        <van-cell-group inset>
            <van-cell title="管理默认设置" icon="setting-o" is-link />
        </van-cell-group>
        <van-cell-group inset>
            <van-cell title="看看有哪些新功能" icon="question-o" is-link />
        </van-cell-group>
    </div>
</template>
<style scoped lang='scss'></style>
