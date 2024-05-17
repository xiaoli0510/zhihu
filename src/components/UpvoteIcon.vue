<script setup lang="ts">
import { ref } from "vue";
import upvote from "@/assets/imgs/upvote.png";
import activeUpvote from "@/assets/imgs/active-upvote.png";

const props = defineProps(["item"]);
let item = props.item;
let upvoteRef = ref(false);

const addUpVote = (item) => {
  item.upvote++;
  upvoteRef.value = !upvoteRef.value;
};
const cancelUpVote = (item) => {
  item.upvote--;
  upvoteRef.value = !upvoteRef.value;
};
</script>
<template>
  <span v-show="!upvoteRef" class="item">
    <van-icon :name="upvote" v-show="item.upvote > 0" :badge="item.upvote" size=".6rem" @click="addUpVote(item)" />
    <van-icon :name="upvote" v-show="item.upvote == 0" size=".6rem" @click="addUpVote(item)" />
    <span v-show="item.upvote == 0" class="txt">收藏</span>
  </span>
  <van-icon :name="activeUpvote" v-show="upvoteRef" :badge="item.upvote" size=".6rem" @click="cancelUpVote(item)" />
</template>
<style scoped lang="scss">
.item {
  margin: 0 1%;

  .txt {
    vertical-align: top;
  }
}
</style>
