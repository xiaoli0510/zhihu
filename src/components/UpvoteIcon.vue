<script setup lang="ts">
import { showToast } from "vant";
import { ref } from "vue";
const props = defineProps(["item"]);
let item = props.item;
let upvoteRef = ref(false);

const addUpVote = (item) => {
  item.upvote++;
  upvoteRef.value = !upvoteRef.value;
  showToast('已赞同');
};
const cancelUpVote = (item) => {
  item.upvote--;
  upvoteRef.value = !upvoteRef.value;
  showToast('已取消');
};
</script>
<template>
  <span v-show="!upvoteRef" class="item">
    <van-icon name="good-job" v-show="item.upvote > 0" :badge="item.upvote" size=".6rem" @click="addUpVote(item)" />
    <van-icon name="good-job" v-show="item.upvote == 0" size=".6rem" @click="addUpVote(item)" />
    <span v-show="item.upvote == 0" class="txt">收藏</span>
  </span>
  <van-icon class="item" name="good-job" color="#1989fa" v-show="upvoteRef" :badge="item.upvote" size=".6rem" @click="cancelUpVote(item)" />
</template>
<style scoped lang="scss">
.item {
  margin: 0 1%;

  .txt {
    vertical-align: top;
  }
}
</style>
