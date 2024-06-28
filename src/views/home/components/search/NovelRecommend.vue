<script setup>
const props = defineProps(['item']);
const item = props.item;
</script>
<template>
    <van-row class="recommend-item">
        <van-col>
            <div class="cover">
                <van-image width="100" height="100" :src="item.cover" radius="9px" fit="cover" />
                <p class="tag">盐选专栏</p>
            </div>
        </van-col>
        <van-col span="16" offset="1" class="recommend-txt">
            <h2>{{ item.title }}</h2>
            <p class="feature">{{ item.feature }}</p>
        </van-col>
    </van-row>
</template>
<style scoped lang='scss'>
.recommend-item {
    margin: 10px 0;

    .cover {
        position: relative;

        .tag {
            position: absolute;
            right: 0;
            bottom: 3px;
            border-radius: 9px 0 3px 0;
            padding: 0 4px;
            font-size: 10px;
            color: #3d3d3d;
            background: #dfdede;
        }
    }

    .recommend-txt {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .feature {
            color: #636262;
        }
    }
}
</style>
