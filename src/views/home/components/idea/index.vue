<script setup>
import { ref } from "vue";
import img1 from "@/assets/imgs/1.jpg";
import img2 from "@/assets/imgs/2.jpg";
import triangle from "@/assets/imgs/sync.png";
const list = ref([
  {
    title: "标题",
    src: img1,
    id: 1,
    author: "a",
    authorImg: img2,
    like: 111,
    label: ["a", "b"],
  },
  {
    title: "标题2",
    src: img2,
    id: 1,
    author: "a",
    authorImg: img1,
    like: 111,
    label: ["a", "b"],
  },
  {
    title: "标题",
    src: img1,
    id: 1,
    author: "a",
    authorImg: img2,
    like: 111,
    label: ["a", "b"],
  },
  {
    title: "标题2",
    src: img2,
    id: 1,
    author: "a",
    authorImg: img1,
    like: 111,
    label: ["a", "b"],
  },
]);

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
      list.value.push(list.value.length + 1);
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
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell>
        <van-row justify="space-around" class="item">
          <van-col span="11" v-for="item in list">
            <van-image fit="contain" :src="item.src" />
            <van-row class="detail">
              <van-col span="24" class="title">{{ item.title }}</van-col>
            </van-row>
            <van-row justify="space-around" class="detail">
              <van-col span="12">
                <van-row justify="space-around" align="bottom">
                  <van-col span="6"
                    ><van-image
                      fit="cover"
                      width=".5rem"
                      height=".5rem"
                      round
                      :src="item.authorImg"
                  /></van-col>
                  <van-col span="6"
                    ><van-text-ellipsis
                      :content="item.author"
                    ></van-text-ellipsis
                  ></van-col>
                </van-row>
              </van-col>
              <van-col span="12">
                <van-row justify="space-around" align="bottom">
                  <van-col span="12"
                    ><van-image
                      fit="contain"
                      width=".5rem"
                      round
                      :src="triangle"
                  /></van-col>
                  <van-col span="12">{{ item.like }}</van-col>
                </van-row>
              </van-col>
            </van-row>
          </van-col>
        </van-row>
      </van-cell>
    </van-list>
  </van-pull-refresh>
</template>
<style scoped lang="scss">
.item {
  background: #fff;
  border-radius: 0.1rem;
  padding-bottom: 3%;

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
