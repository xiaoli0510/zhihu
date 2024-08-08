<script setup>
import AnswerIcon from '@/components/AnswerIcon.vue'
import InviteIcon from '@/components/InviteIcon.vue'
import FollowIcon from '@/components/FollowIcon.vue'
const props = defineProps(['data']);
</script>
<template>
    <AnswerIcon/>
    <InviteIcon>
        <template v-slot:txt>邀请回答</template>
    </InviteIcon>
    <FollowIcon :item="props.data">
        <template v-slot:txt>关注问题</template>
    </FollowIcon>
</template>
<style scoped lang='scss'></style>
