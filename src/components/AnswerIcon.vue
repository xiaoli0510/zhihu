<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
const title = inject('questionTitle');
const router = useRouter();
const enterAddAnswer = () => {
  router.push(`/addAnswer?t=${title}`);
}
</script>
<template>
  <span class="item" @click="enterAddAnswer">
    <van-icon name="edit" size=".6rem" />
    <span class="txt">写回答</span>
  </span>
</template>
<style scoped lang="scss">
.item {
  margin: 0 1%;

  .txt {
    vertical-align: text-top;
    font-size: 12px;
    color: #686767;
    margin-left: 7px;
  }
}
</style>
