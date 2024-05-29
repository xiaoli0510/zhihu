<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps(['item']);
const item = ref(props.item);

const toggleAgree = () => {
  //item.info.agree = item.info.agree ++;
};
</script>
<template>
  <span class="icon-like-item" @click="toggleAgree">
    <van-icon name="like-o" />
    <span class="txt">{{ item.info.agree }}</span>
  </span>
</template>
<style scoped lang="scss">
.icon-like-item {
  .txt {
    vertical-align: text-top;
    font-size:12px;
    color:#686767;
    margin-left:3px;
  }
}
</style>
