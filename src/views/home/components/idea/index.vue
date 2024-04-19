<script setup>
import { ref } from "vue";
import img1 from "@/assets/imgs/1.jpg";
import img2 from "@/assets/imgs/2.jpg";
const abc = ref("@/assets/imgs/1.jpg");
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
]);
</script>
<template>
  <!-- 每个元素的两侧间隔相等 -->
  <van-row justify="space-around">
    <van-col span="11" v-for="item in list">
      <van-image fit="contain" :src="item.src" />
      <van-row justify="space-between">
        <van-col span="12">{{ item.title }}</van-col>
      </van-row>
      <van-row justify="space-between">
        <van-col span="6">
          <van-row justify="space-between">
            <van-col span="6"
              ><van-image
                fit="cover"
                width="1rem"
                height="1rem"
                round
                :src="item.authorImg"
            /></van-col>
            <van-col span="6">{{ item.author }}</van-col>
          </van-row>
        </van-col>
        <van-col span="6">{{ item.like }}</van-col>
      </van-row>
      {{ item.title }}</van-col
    >
  </van-row>
</template>
<style scoped lang="scss"></style>
