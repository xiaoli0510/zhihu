<script setup>
import BackIcon from '@/components/BackIcon.vue'
import FollowIcon from '@/components/FollowIcon.vue'
import { provide, ref } from 'vue';
import SubjectDiscuss from './subject/Discuss.vue'
import BookShare from '@/components/BookShare/Index.vue';
import { fetchSubject } from '@/api/search.js'

const data = ref(null);
const res = await fetchSubject();
data.value = res.data.list;

const props = defineProps(['keyWord']);
const toggleFollow = (item) => {
    item.isFollow = !item.isFollow;
}
provide('toggleFollow', toggleFollow);

const activeName = ref(0);
const tabLabel = ref({
    0: '讨论',
    1: '想法',
    2: '待回答',
})

const showBrief = ref(false);
const briefText = ref(null);
const clickAction = (e) => {
    briefText.value.toggle(false);
    showBrief.value = true;
}
</script>
<template>
    <div class="subject-wrap">
        <div class="top">
            <van-row justify="space-between" align="center">
                <van-col>
                    <BackIcon />
                </van-col>
                <van-col span="6">
                    <FollowIcon :item="data" />
                    <BookShare :data="{ iconName: 'ellipsis', size: '20px' }" />
                </van-col>
            </van-row>
            <h3 class="title-word"><van-icon name="chat" color="#1989fa" />{{ props.keyWord }}</h3>
            <p class="gray-font detail">
                {{ data.browseCount }}亿浏览. {{ data.discussCount }}万讨论
            </p>
            <p class="brief">
                <van-text-ellipsis rows="1" :content="data.brief" expand-text="更多" collapse-text="收起" ref="briefText"
                    @clickAction="clickAction" />
            </p>
        </div>
        <div class="tab-wrap">
            <van-tabs v-model:active="activeName" shrink>
                <van-tab v-for="(item, index) in tabLabel" :title="item" :name="index">
                    <van-divider />
                    <SubjectDiscuss />
                </van-tab>
            </van-tabs>
        </div>
    </div>

    <!-- 简介弹框 -->
    <van-popup v-model:show="showBrief" closeable round close-icon="close" position="bottom"
        :style="{ height: '80%', padding: '2%' }">

        <h3>简介</h3>
        <van-text-ellipsis rows="4" :content="data.brief" expand-text="展开全部" collapse-text="收起" />
        <van-divider />

        <h3>更多信息</h3>
        <van-cell-group>
            <van-cell title="词目" :value="props.keyWord" />
            <van-cell title="拼音" :value="data.pinyin" />
            <van-cell title="英文拼音" :value="data.english" />
            <van-cell title="基本解释">
                <van-text-ellipsis rows="4" :content="data.explain" expand-text="展开全部" collapse-text="收起" />
            </van-cell>
        </van-cell-group>

        <div class="tip">
            <van-icon name="discount" color="#ee0a24" />
            数据由搜狗百科提供
        </div>


    </van-popup>
</template>
<style scoped lang='scss'>
.subject-wrap {
    background: #f7f7f7;

    .top {
        width: 95%;
        margin: 0 auto;
        line-height: 40px;

        .title-word {
            margin: 2% 0 1% 0;
        }

        .brief {
            font-size: 12px;
        }
    }

    .tab-wrap {
        border-radius: 10px 10px 0 0;
        background: #fff;
        padding-top: 10px;
        margin-top: 4%;
    }
}

h3 {
    line-height: 40px;
}

.tip {
    margin-top: 8%;
}
</style>
