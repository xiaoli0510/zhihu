<script setup lang="ts">
import { ref } from "vue";
import comment from "@/assets/imgs/comment.png";

const props = defineProps(["item"]);
let item = props.item;
let upvoteRef = ref(false);

const addComment = (item) => {
  item.upvote++;
  upvoteRef.value = !upvoteRef.value;
};
</script>
<template>
  <span v-show="!upvoteRef" class="item">
    <van-icon :name="comment" v-show="item.comment>0" :badge="item.comment" size=".6rem" @click="addComment(item)" />
    <van-icon :name="comment"  v-show="item.comment==0" size=".6rem" @click="addComment(item)" />
    <span v-show="item.comment==0" class="txt">评论</span>
  </span>
</template>
<style scoped lang="scss">
.item {
  margin: 0 1%;

  .txt {
    vertical-align: top;
  }
}
</style>
