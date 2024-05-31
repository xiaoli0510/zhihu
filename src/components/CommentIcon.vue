<script setup>
import comment from "@/assets/imgs/comment.png";
const props = defineProps(["item"]);
let item = props.item;

const emit = defineEmits(['showCommentPopup']);
const showComment = (item) => {
  emit('showCommentPopup',item.id);
};
</script>
<template>
  <span class="comment-item">
    <van-icon :name="comment" v-show="item.comment>0" :badge="item.comment" size=".6rem" @click="showComment(item)" />
    <van-icon :name="comment"  v-show="item.comment==0" size=".6rem" @click="showComment(item)" />
    <span v-show="item.comment==0" class="txt">评论</span>
  </span>
 
</template>
<style scoped lang="scss">
.comment-item {
  margin: 0 1%;

  .txt {
    vertical-align: top;
  }
}
</style>
