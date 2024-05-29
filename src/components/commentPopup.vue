<script setup lang='ts'>
import { store } from '@/store/index.js'
import LikeIcon from './LikeIcon.vue'
import { fetchCommentList } from '@/api/index.js';
import { ref, watch } from 'vue';
const list = ref([]);
const filterList = ref([]);
const total = ref(0);
fetchCommentList().then(res => {
    total.value = res.data.body.total;
    list.value = res.data.body.list;
    filterList.value = res.data.body.list;
}).catch((err) => {
    console.log(err)
});

const sortType = ref(0);
watch(sortType, (newVal) => {
    switch (newVal) {
        case 0:
            filterList.value = list.value;
            break;
        case 1:
        case 2:
            filterList.value = list.value.filter(item => {
                return item.sort === newVal;
            })
            break;
    }
})
const changeSort = (type) => {
    sortType.value = type;
}
</script>
<template>
    <van-popup v-model:show="store.isComment" closeable close-icon="close" position="bottom" :style="{ height: '94%' }">
        <div class="comment-inner">
            <h3>全部评价</h3>
            <div class="comment-content">
                <van-row justify="space-between">
                    <van-col span="5">评论 {{ total }}</van-col>
                    <van-col span="9" class="sort">
                        <van-row justify="space-between">
                            <van-col span="8" :class="{ 'active': sortType === 0 }" class="tab" align="center"
                                @click="changeSort(0)">默认</van-col>
                            <van-col span="8" :class="{ 'active': sortType === 1 }" class="tab" align="center"
                                @click="changeSort(1)">热度</van-col>
                            <van-col span="8" :class="{ 'active': sortType === 2 }" class="tab" align="center"
                                @click="changeSort(2)">最新</van-col>
                        </van-row>
                    </van-col>
                </van-row>
                <van-row justify="space-between" class="comment-list" v-for="item in filterList">
                    <van-col span="3">
                        <van-image round width="1rem" height="1rem" :src="item.avatar" />
                    </van-col>
                    <van-col span="21">
                        <van-row justify="space-between">
                            <van-col span="20" class="name">{{ item.name }}
                                <van-icon :name="item.badge.develop" />
                                <van-icon :name="item.badge.particular" />
                            </van-col>
                            <van-col span="1"><van-icon name="ellipsis" /></van-col>
                        </van-row>
                        <van-row justify="space-between">
                            <van-col span="20" class="comment-txt">{{ item.sentence }}</van-col>
                        </van-row>
                        <van-row justify="space-between" class="comment-info">
                            <van-col span="20">{{ item.time }}</van-col>
                            <van-col span="4">
                                <van-icon name="comment-circle-o" class="reply" />
                                <LikeIcon :item="item"/>
                            </van-col>
                        </van-row>
                    </van-col>
                </van-row>
            </div>
        </div>
    </van-popup>
</template>
<style scoped lang='scss'>
.comment-inner {
    padding: 0 3%;

    h3 {
        line-height: 50px;
        text-align: center;
    }

    .comment-content {
        font-size: 13px;

        .sort {
            background: #eeeeee;
            line-height: 22px;
            border-radius: 20px;
            color: #696868;
            padding: 2px 1px;

            .tab {
                &.active {
                    background: #fffdfd;
                    color: #000;
                    border-radius: 10px;
                }

            }
        }

        .name {
            font-weight: 700;
        }

        .comment-txt {
            color: #383737;
            line-height: 24px;
            ;
        }

        .comment-info {
            color: #a09d9d;
            font-size: 12px;

            .reply {
                margin-right: 7px;
            }
        }


        .comment-list {
            margin-top: 20px;
        }
    }

}
</style>
