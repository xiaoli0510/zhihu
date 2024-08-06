<script setup>
import BackIcon from '@/components/BackIcon.vue'
import { ref, watch } from 'vue';
import WaitAnswerItem from './subject/WaitAnswerItem.vue'
import BookShare from '@/components/BookShare/Index.vue';
import { fetchAnswerDetail } from '@/api/search.js'
import SearchIcon from '@/components/SearchIcon.vue'
const data = ref(null);
const res = await fetchAnswerDetail();
data.value = res.data.list;

const sortType = ref(1);
const changeSort = (sort) => {
    sortType.value = sort;
}

watch(sortType, (newVal) => {
    data.value.subList.sort(item1 => {
        if (item1.type === newVal) {
            return -1;
        } else {
            return 1;
        }
    }
    );
}, {
    immediate: true
})
</script>
<template>
    <div class="subject-wrap">
        <div class="top">
            <van-row justify="space-between" align="center">
                <van-col>
                    <BackIcon />
                </van-col>
                <van-col span="3">
                    <SearchIcon />
                    <BookShare :data="{ iconName: 'ellipsis', size: '20px' }" />
                </van-col>
            </van-row>
            <h3 class="title-word">{{ data.title }}?</h3>
            <van-tag round plain type="primary" size="large" text-color="#666666" v-for="item in data.word"
                class="tag-word">{{ item }}</van-tag>
            <van-divider />
            <van-row justify="space-between">
                <van-col class="detail">
                    {{ data.followCount }}
                    <span class="gray-font">关注.</span>
                    {{ data.commentCount }}
                    <span class="gray-font">评论.</span>
                    {{ data.browseCount }}
                    <span class="gray-font">浏览</span>
                </van-col>
                <van-col>
                    <van-tag round type="primary" size="large" color="rgb(221 236 249)" text-color="#1989fa"><van-icon
                            name="add-o" />关注问题</van-tag>
                </van-col>
            </van-row>
        </div>
        <van-row justify="space-between" class="gray-font sort">
            <van-col class="sort-wrap">
                <span :class="{ active: sortType === 1 }" @click="changeSort(1)">默认</span>
                <span>|</span>
                <span :class="{ active: sortType === 2 }" @click="changeSort(2)">最新</span>
            </van-col>
            <van-col>
                全部内容 {{ data.subList.length }}
            </van-col>
        </van-row>
        <WaitAnswerItem v-for="item in data.subList" :key="item.id" :item="item" />
    </div>
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

.sort {
    padding: 0 2%;
    margin-top: 2%;
    line-height: 40px;
    background: #fff;

    .sort-wrap {
        span {
            margin: 0 2px;

            &.active {
                color: #000;
            }
        }
    }
}
</style>
