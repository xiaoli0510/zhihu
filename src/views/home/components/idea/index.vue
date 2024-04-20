<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import triangle from "@/assets/imgs/sync.png";
import {fetchIdeaList} from '@/api/index.js';
let list = ref([]);

let res = await fetchIdeaList();
list.value=res.data.list;
console.log(list.value);

const loading = ref(false);
const finished = ref(false);
const refreshing = ref(false);

const onLoad = () => {
  setTimeout(() => {
    if (refreshing.value) {
      list.value = [];
      refreshing.value = false;
    }

    for (let i = 0; i < 10; i++) {
      // list.value.push({
      //   title: "标题",
      //   src: img1,
      //   id: 1,
      //   author: "a",
      //   avatar: img2,
      //   like: 111,
      //   label: ["a", "b"],
      // });
    }
    loading.value = false;

    if (list.value.length >= 10) {
      finished.value = true;
    }
  }, 1000);
};

const onRefresh = () => {
  // 清空列表数据
  finished.value = false;

  // 重新加载数据
  // 将 loading 设置为 true，表示处于加载状态
  loading.value = true;
  onLoad();
};
</script>
<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
      v-model:loading="loading"
      :finished="finished"
      finished-text="想法已更新"
      @load="onLoad"
    >
      <van-cell>
        <van-row justify="space-around" class="item-wrap">
          <van-col span="10" v-for="item in list" class="item">
            <router-link to="/idea">
              <van-image width="100%" fit="fill" :src="item.src" />
              <!-- 标题 -->
              <van-row class="detail">
                <van-col span="24" class="title">{{ item.title }}</van-col>
              </van-row>
              <!-- 作者+点赞 -->
              <van-row justify="space-between" class="detail">
                <van-col span="12">
                  <van-row justify="start" align="bottom">
                    <van-col span="3"
                      ><van-image
                        fit="cover"
                        width=".5rem"
                        height=".5rem"
                        round
                        :src="item.avatar"
                    /></van-col>
                    <van-col span="8" offset="5"
                      ><van-text-ellipsis
                        :content="item.author"
                      ></van-text-ellipsis
                    ></van-col>
                  </van-row>
                </van-col>
                <van-col span="12">
                  <van-row justify="end" align="bottom">
                    <van-col span="3"
                      ><van-image
                        fit="contain"
                        width=".5rem"
                        round
                        :src="triangle"
                    /></van-col>
                    <van-col offset="2" span="8">{{ item.like }}</van-col>
                  </van-row>
                </van-col>
              </van-row>
              <!-- 标签 -->
              <van-row justify="start" gutter="10" class="detail">
                <van-col v-for="tag in item.label">
                  <van-tag size="large" color="#7c7979" plain
                    ># {{ tag }}</van-tag
                  >
                </van-col>
              </van-row>
            </router-link>
          </van-col>
        </van-row>
      </van-cell>
    </van-list>
  </van-pull-refresh>
</template>
<style scoped lang="scss">
.item-wrap {
  align-items: flex-start;
}
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
    width: 90%;
    margin: 0 auto;
    .title {
      font-size: 0.3rem;
      line-height: 0.6rem;
      color: #000;
      text-align: left;
    }
  }
}
</style>
