<script setup>
import { ref,provide } from "vue";
import {useRouter } from "vue-router";
import LikeIcon from '@/components/LikeIcon.vue'
const props = defineProps(['item']);

//toggle 点赞
const toggleAgree = (item) => {
    if (props.item.isAgree) {
        props.item.agreeCount--;
    } else {
        props.item.agreeCount++;
    }
    props.item.isAgree = !props.item.isAgree;
}
provide('toggleAgree', toggleAgree);

const router = useRouter();
const enterTopic = ()=>{
  router.push('/topic');
}
</script>
<template>
          <van-col span="11" class="item" @click="enterTopic">
              <van-image width="100%" fit="fill" :src="props.item.src" />
              <!-- 标题 -->
              <van-row class="detail">
                <van-col span="24" class="title">{{ props.item.title }}</van-col>
              </van-row>
              <!-- 作者+点赞 -->
              <van-row justify="space-between" class="detail">
                <van-col span="12">
                  <van-row justify="start" align="center">
                    <van-col span="3"><van-image fit="cover" width=".5rem" height=".5rem" round
                        :src="props.item.avatar" /></van-col>
                    <van-col span="8" offset="5"><van-text-ellipsis
                        :content="props.item.author"></van-text-ellipsis></van-col>
                  </van-row>
                </van-col>
                <van-col span="12">
                    <LikeIcon :item="props.item" size="17px"/>
                </van-col>
              </van-row>
              <!-- 标签 -->
              <van-row justify="start" gutter="10" class="detail">
                <van-col v-for="tag in props.item.label">
                  <van-tag size="large" color="#7c7979" plain># {{ tag }}</van-tag>
                </van-col>
              </van-row>
          </van-col>
</template>
<style scoped lang="scss">
    .item {
      background: #fff;
      border-radius: 0.1rem;
      padding-bottom: 0.2rem;
      margin-bottom: 3%;
      border: 1px solid #7c7979;
      box-shadow: #000;
      height: max-content;

      .detail {
        font-size: 0.3rem;
        color: #7c7979;
        width: 100%;
        margin: 0 auto;
        padding: 0 3%;

        .title {
          font-size: 0.3rem;
          line-height: 0.6rem;
          color: #000;
          text-align: left;
        }
      }
    }
</style>
