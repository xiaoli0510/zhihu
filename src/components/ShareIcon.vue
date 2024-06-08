<script setup>
import share from '@/assets/imgs/share.png';
const emit = defineEmits(['showShare']);
const showShare = () => {
  console.log('show')
  emit('showShare');
};
</script>
<template>
  <span class="icon-share-item" @click="showShare">
    <van-icon :name="share" />
  </span>
</template>
<style scoped lang="scss">
.icon-share-item {
  .txt {
    vertical-align: text-top;
    font-size:12px;
    color:#686767;
    margin-left:3px;
  }
}
</style>
