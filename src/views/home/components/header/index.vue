<script setup lang="ts">
import { ref } from "vue";
import Idea from "@/views/home/idea.vue";
const activeName = ref("a");
const tabArray = ref([
  { title: "想法", value: "idea" },
  { title: "关注", value: "interest" },
  { title: "推荐", value: "recomment" },
  { title: "热榜", value: "hot" },
]);
</script>
<template>
  <van-tabs v-model:active="activeName">
    <van-tab v-for="item in tabArray" :title="item.title" :name="item.value"
      >
      <Idea />
    </van-tab>
  </van-tabs>
</template>
<style scoped lang="scss"></style>
