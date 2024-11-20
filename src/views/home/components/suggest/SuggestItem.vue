<template>
    <div v-for="item in list" class="suggest-item">
        <h3>{{ item.title }}</h3>
        <div>
            <van-image width="20px" height="20px" :src="item.avatar" round />
            <span>{{ item.author }}</span>
            <span class="gray-font">
                <van-icon name="gem-o" /> {{ item.tag }}话题下的优秀答主
            </span>
        </div>
        <van-text-ellipsis :content="item.sentence" rows="2" />
        <van-row justify="space-between" class="gray-font">
            <van-col span="22">
                <span>{{ item.upvote }} 赞同.</span>
                <span>{{ item.collect }} 收藏.</span>
            </van-col>
            <van-col span="2">
                <van-icon name="cross" @click="showDislike"/>
            </van-col>
        </van-row>
        <van-divider />
    </div>

    <!-- 圆角弹窗（底部） -->
    <van-popup v-model:show="isShowDislikeModal" round position="bottom" :style="{ height: 'auto', padding: '10px' }">
        <div v-for="(item, key) in DISLIKETYPE" :key="key" class="dislike-item">
            <van-row justify="space-between">
                <van-col span="22">
                    <van-icon :name="item.icon" />
                    <span>{{ item.name }}</span>
                </van-col>
                <van-col span="2" v-show="item.more">
                    <van-icon name="arrow" size="14px" @click="enterMore(Number(key))" />
                </van-col>
            </van-row>
            <van-divider />
        </div>
    </van-popup>

</template>
<script setup>
import { ref } from 'vue';
import { fetchGuess } from '@/api/index.js';
import { useRouter } from 'vue-router';
const list = ref([]);
fetchGuess().then(res => {
    list.value = res.data.body.list;
}).catch(err => {
    console.log(err);
})

const DISLIKETYPE = {
    0: { name: '不喜欢该作者', icon: 'warning-o' },
    1: { name: '不再推荐作者:xx', icon: 'user-circle-o' },
    2: { name: '设置屏蔽关键词', icon: 'qr-invalid', more: true },
    3: { name: '太多重复或相似内容', icon: 'comment-o' },
    4: { name: '内容极端或引战', icon: 'warn-o' },
    5: { name: '内容质量差', icon: 'brush-o' },
    6: { name: '举报', icon: 'bulb-o', more: true },
};
const isShowDislikeModal = ref(false);
const showDislike = () => {
    isShowDislikeModal.value = true;
}
const router = useRouter();
const enterMore = (key) => {
    if (key === 6) {
        router.push('/report');
    } else if (key === 2) { 
        router.push('/addShield');
    }
}
</script>
<style scoped lang='scss'>
.suggest-item {
    font-size: 14px;
    padding: 10px;
}

.dislike-item {
    font-size: 12px;
}
</style>
