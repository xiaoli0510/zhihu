<script setup>
import { useRouter } from 'vue-router';
import personal from "@/assets/imgs/personal.jpg";
import UpvoteIcon from "@/components/UpvoteIcon.vue";
import CollectIcon from "@/components/CollectIcon.vue";
import CommentReply from '@/components/CommentReply/Index.vue'
import MoreIcon from '@/components/MoreIcon.vue';
const { item } = defineProps(["item"]);
const router = useRouter();
// {
//     type:1,
//     name:'宝宝',
//     time:'2024-05-13 07:00',
//     title:'这是一句话标题',
//     sentence:'这是一段话',
//     upvote: 112,
//     collect: 112,
//     comment:12,
// }
const enterDetail = (item) => {
    router.push({
        path: '/detail',
        query: {
            id: item.id
        }
    })
}
</script>
<template>
    <div class="item">
        <div class="top"  @click="enterDetail(item)">
            <van-image round width="1.5rem" height="1.5rem" :src="personal" />
            <div class="right">
                <div>{{ item.name }} <van-icon name="gem" /></div>
                <div class="time">{{ item.time }}
                    <span v-if="item.type === 1">回答了问题</span>
                    <span v-if="item.type === 2">赞同了回答</span>
                    <span v-if="item.type === 4">发布了想法</span>
                </div>
            </div>
        </div>
        <div class="middle" @click="enterDetail(item)">
            <h3>{{ item.title }}</h3>
            <p class="sentence">{{ item.sentence }}</p>
            <div class="img-wrap">
                <img :src="item1.img" alt="" v-for="(item1, index1) in item.imgList" :key="index1">
            </div>
        </div>
        <div class="footer">
            <van-row>
                <van-col span="20">
                    <UpvoteIcon :item="item" />
                    <CollectIcon :item="item" />
                    <CommentReply :item="item" :id="item.id" />
                </van-col>
                <van-col span="2" offset="2">
                    <MoreIcon :item="item" />
                </van-col>
            </van-row>
        </div>
    </div>
</template>
<style scoped lang='scss'>
.item {
    background: #fff;
    margin-bottom: 2%;
    padding: 3% 2%;

    .top {
        display: flex;
        align-items: center;

        .right {
            margin-left: 2%;
            font-size: 15px;

            .time {
                color: #726d6d;
            }
        }
    }

    .middle {
        margin: 4% 0;

        .sentence {

            margin-top: 3%;
            color: #292828;

        }

        .img-wrap {
            display: flex;
            white-space: nowrap;
            overflow-x: auto;

            >img {
                border-radius: 10px;
                margin: 0 .5%;
            }
        }
    }

}
</style>
