<script setup>
import { ref,provide } from "vue";
import {useRouter } from "vue-router";
import { fetchIdeaList } from '@/api/index.js';
import LikeIcon from '@/components/LikeIcon.vue'
import IdeaItem from './IdeaItem.vue'
let list = ref([]);
const initData = async () => {
  const res = await fetchIdeaList();
  list.value = res.data.list;
}
initData();
const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);
const onLoad = () => {
  setTimeout(async () => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }
    initData();
    loading.value = false;
    finished.value = true;
  }, 1000);
};

const onRefresh = () => {
  finished.value = false;
  loading.value = true;
  onLoad();
};

//toggle 点赞
const toggleAgree = (item) => {
    if (item.isAgree) {
        item.agreeCount--;
    } else {
        item.agreeCount++;
    }
    item.isAgree = !item.isAgree;
}
provide('toggleAgree', toggleAgree);

const router = useRouter();
const enterTopic = ()=>{
  router.push('/topic');
}
</script>
<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh" class="list">
    <van-list v-model:loading="loading" :finished="finished" finished-text="想法已更新" @load="onLoad">
      <van-cell>
        <van-row justify="space-between" class="item-wrap">
          <IdeaItem v-for="item in list" :item="item" :key="item.id"/>
          <van-col span="11" v-for="item in list" class="item" style="display:none" @click="enterTopic">
              <van-image width="100%" fit="fill" :src="item.src" />
              <!-- 标题 -->
              <van-row class="detail">
                <van-col span="24" class="title">{{ item.title }}</van-col>
              </van-row>
              <!-- 作者+点赞 -->
              <van-row justify="space-between" class="detail">
                <van-col span="12">
                  <van-row justify="start" align="center">
                    <van-col span="3"><van-image fit="cover" width=".5rem" height=".5rem" round
                        :src="item.avatar" /></van-col>
                    <van-col span="8" offset="5"><van-text-ellipsis
                        :content="item.author"></van-text-ellipsis></van-col>
                  </van-row>
                </van-col>
                <van-col span="12">
                    <LikeIcon :item="item" size="17px"/>
                </van-col>
              </van-row>
              <!-- 标签 -->
              <van-row justify="start" gutter="10" class="detail">
                <van-col v-for="tag in item.label">
                  <van-tag size="large" color="#7c7979" plain># {{ tag }}</van-tag>
                </van-col>
              </van-row>
          </van-col>
        </van-row>
      </van-cell>
    </van-list>
  </van-pull-refresh>
</template>
<style scoped lang="scss">
.list {
  margin-top: 44px;
  .item-wrap {
    align-items: flex-start;
  }
}
</style>
