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
  <van-icon
    v-if="!upvoteRef"
    :name="upvote"
    :badge="item.upvote"
    size=".6rem"
    @click="addUpVote(item)"
  />
  <van-icon
    v-else
    :name="activeUpvote"
    :badge="item.upvote"
    size=".6rem"
    @click="cancelUpVote(item)"
  />
</template>
<style scoped lang="scss"></style>
