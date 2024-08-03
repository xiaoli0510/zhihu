<script setup>
import BackIcon from '@/components/BackIcon.vue'
import FollowIcon from '@/components/FollowIcon.vue'
import { provide, ref, markRaw, reactive } from 'vue';
import SubjectDiscuss from './subject/Discuss.vue'
import Opinion from '@/views/home/subject/Opinion.vue'
import WaitAnswer from '@/views/home/subject/WaitAnswer.vue'
import BookShare from '@/components/BookShare/Index.vue';
import { fetchAnswerDetail } from '@/api/search.js'
const data = ref(null);
const res = await fetchAnswerDetail();
data.value = res.data.list;

const props = defineProps(['keyWord']);
const toggleFollow = (item) => {
    item.isFollow = !item.isFollow;
}
provide('toggleFollow', toggleFollow);

const currentTab = ref(0);
const tabs = reactive([{
    com: markRaw(SubjectDiscuss),
    text: '默认'
}, {
    com: markRaw(Opinion),
    text: '最新'
}]);

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
                <van-col span="3">
                    <van-icon name="search" size="20px" />
                    <BookShare :data="{ iconName: 'ellipsis', size: '20px' }" />
                </van-col>
            </van-row>
            <h3 class="title-word">{{ data.title }}?</h3>
            <van-tag round plain type="primary" size="large" text-color="#666666" v-for="item in data.word"
                class="tag-word">{{ item }}</van-tag>
            <van-divider />
            <van-row justify="space-between">
                <van-col class="detail">
                    {{ data.browseCount }}
                    <span class="gray-font">关注.</span>
                    {{ data.discussCount }}
                    <span class="gray-font">评论.</span>
                    {{ data.discussCount }}
                    <span class="gray-font">浏览</span>
                </van-col>
                <van-col>
                    <van-tag round type="primary" size="large" color="rgb(221 236 249)" text-color="#1989fa"><van-icon name="add-o" />关注问题</van-tag>
                </van-col>
            </van-row>
        </div>
        <div class="tab-wrap">
            <van-tabs v-model:active="currentTab" shrink>
                <van-tab v-for="(item, index) in tabs" :title="item.text" :name="index">
                    <van-divider />
                    <component :is="tabs[currentTab].com" />
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

        .tag-word {
            margin: 0 1%;
        }

        .detail {
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
