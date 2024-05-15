<script setup lang='ts'>
import FollowUser from '@/views/home/components/idea/followUser.vue';
import FollowMatter from '@/views/home/components/idea/followMatter.vue';
import Invent from '@/views/home/components/idea/invent.vue';
const { list } = defineProps(['list']);

</script>
<template>
    <div class="trend-item" v-for="(item, index) in list" :key="index">
        <FollowUser v-if="item.type === 3" :item="item"/>
        <FollowMatter  v-if="item.type === 5" :item="item"/>
        <Invent  v-if="item.type === 4" :item="item"/>
    </div>
</template>
<style scoped lang='scss'></style>
