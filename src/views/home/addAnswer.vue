<script setup>
import { useRoute } from 'vue-router';
import BackIcon from '@/components/BackIcon.vue'

const route = useRoute();
console.log(route.query.t)
</script>
<template>
    <van-row justify="space-around" style="padding:4px;" align="center">
        <van-col>
            <BackIcon>
                <template #iconTxt>
                    取消
                </template>
            </BackIcon>
        </van-col>
        <van-col>
            <div class="type-wrap">
                <span class="tab-type active">图文回答</span>
                <span class="tab-type">视频回答</span>
            </div>
        </van-col>
        <van-col>
            <span class="btn-submit">发布</span>
        </van-col>
    </van-row>
    <h3 class="title">{{ route.query.t }}?</h3>
    <van-divider />
    <div class="footer">
        
    </div>
</template>
<style scoped lang='scss'>
.type-wrap{
    background:#efecec;
    border-radius: 4px;
    padding:3px;
    .tab-type{
        color:#000;
        padding:0 5px;
        display:inline-block;
        &.active{
            border-radius: 2px;
            background:#fff;
        }
    }
}
.btn-submit {
    color: var(--van-primary-color);
}
.title{
    padding:0 4px;
}
</style>
