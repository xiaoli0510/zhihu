<script setup lang='ts'>
import { store } from '@/store/index.js'
import IconLike from './iconLike.vue'
</script>
<template>
    <van-popup v-model:show="store.isComment" closeable close-icon="close" position="bottom" :style="{ height: '94%' }">
        <div class="comment-inner">
            <h3>全部评价</h3>
            <div class="comment-content">
                <van-row justify="space-between">
                    <van-col span="5">评论 17</van-col>
                    <van-col span="7" class="sort">
                        <van-row justify="space-between">
                            <van-col span="12" class="tab active" align="center">默认</van-col>
                            <van-col span="12" class="tab" align="center">最新</van-col>
                        </van-row>
                    </van-col>
                </van-row>
                <van-row justify="space-between" class="comment-list">
                    <van-col span="3">
                        <van-image round width="1rem" height="1rem"
                            src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
                    </van-col>
                    <van-col span="21">
                        <van-row justify="space-between">
                            <van-col span="20" class="name">知乎用户111<van-icon name="diamond" /></van-col>
                            <van-col span="1"><van-icon name="ellipsis" /></van-col>
                        </van-row>
                        <van-row justify="space-between">
                            <van-col span="20" class="comment-txt">评论</van-col>
                        </van-row>
                        <van-row justify="space-between" class="comment-info">
                            <van-col span="20">04-22 ip</van-col>
                            <van-col span="4">
                                <van-icon name="comment-circle-o" class="reply"/>
                                <IconLike />
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
            .reply{
                margin-right:7px;
            }
        }


        .comment-list {
            margin-top: 20px;
        }
    }

}
</style>
