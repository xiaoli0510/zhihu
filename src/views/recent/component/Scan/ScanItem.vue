<template>
    <div class="scan-item" @click="enterDetail(item)">
        <div>
            <van-icon name="label" color="#1989fa" />
            <span>
                {{ item.title }}
            </span>
        </div>
        <div class="van-multi-ellipsis--l2">
            <span class="author">{{ item.author }}</span>
            {{ item.text }}
        </div>
        <div class="gray-font">
            <van-row justify="space-around">
                <van-col span="22">
                     <span>{{ item.favour }}</span>赞同.
            <span>{{ item.comment }}</span>评论.
            <van-tag color="#faf7f7" text-color="#a09f9f">已读{{ item.finishPercent < 100 ? item.finishPercent + '%' : '完'
                    }}</van-tag>
                </van-col>
                <van-col span="2">
        <BookShare :data="{item,iconName:'ellipsis'}"/>
                </van-col>
            </van-row>
        </div>
    </div>

</template>
<script setup>
import BookShare from '@/components/BookShare/Index.vue'
import { useRouter } from 'vue-router';
const {item} = defineProps(['item'])
const router = useRouter();
const enterDetail = (item) => {
    const {type,id} = item;
    type===1?router.push(`/detail?id=${id}`):router.push(`/noveldetail?id=${id}`);
}
</script>
<style scoped lang='scss'>
.scan-item {
    background:#fff;
    margin-bottom:10px;
    padding:7px 9px;
    line-height: 20px;
    .author{
        font-weight: 700;
        
    }
}
</style>
