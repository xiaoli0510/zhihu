<script setup>
import { provide } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['item']);
const item = props.item;
const router = useRouter();
const enterProfile = (id) => {
    router.push(`/profile/${id}`)
}

const toggleFollow = (item)=>{
  item.isFollow = !item.isFollow;
}
provide('toggleFollow',toggleFollow);
</script>
<template>
    <van-row class="user-item" justify="space-around"
        @click="enterProfile(item.id)">
        <van-col class="left" span="6">
            <van-image width="80" height="80" :src="item.avatar" round />
        </van-col>
        <van-col class="right" span="18">
            <van-row justify="space-around" align="center">
                <van-col span="18">
                    <h3>{{ item.title }}</h3>
                    <van-text-ellipsis class="sentence" :content="item.sentence" />
                </van-col>
                <van-col span="6">
                    <FollowIcon :item="item"/>
                </van-col>
            </van-row>
            <div class="info">{{ item.beFollow }}人关注 {{ item.product }}个创造</div>
            <div>
                <span class="info-tag" plain size="medium" color="#6d6a6a" type="primary" v-if="item.support">{{
                    item.support }}赞同</span>
                <span class="info-tag" plain size="medium" color="#6d6a6a" type="primary" v-if="item.time">{{ item.time
                    }}天内有更新</span>
                <span class="info-tag" plain size="medium" color="#6d6a6a" type="primary" v-if="item.answer">{{
                    item.answer }}个回答</span>
            </div>
        </van-col>
    </van-row>
</template>
<style scoped lang='scss'>
.user-item {
    padding: 14px 0;
    width: 94%;
    margin: 0 auto;
    border-bottom: 1px solid #e6e4e4;

    .sentence {
        font-size: 12px;
    }

    .info {
        font-size: 12px;
        color: #6d6a6a;
        line-height: 24px;
    }

    .info-tag {
        font-size: 10px;
        color: #6d6a6a;
        border: 1px solid #6d6a6a;
        padding: 4px;
        border-radius: 5px;
        margin-right: 4px;
    }
}
</style>
