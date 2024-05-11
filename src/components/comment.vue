<script setup lang="ts">
import { ref } from "vue";
import comment from "@/assets/imgs/comment.png";

const props = defineProps(["item"]);
let item = props.item;
console.log('1111',item);
let upvoteRef = ref(false);

const addUpVote = (item) => {
  item.upvote++;
  upvoteRef.value = !upvoteRef.value;
};
</script>
<template>
  <van-icon
    v-if="!upvoteRef"
    :name="comment"
    :badge="item.comment"
    size=".6rem"
    @click="addUpVote(item)"
  />
</template>
<style scoped lang="scss"></style>
