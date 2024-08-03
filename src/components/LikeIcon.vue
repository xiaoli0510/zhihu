<script setup>
import { inject } from 'vue';
const props = defineProps(['item','size']);
const toggleAgreeFn = inject('toggleAgree');
const toggleAgree = () => {
  toggleAgreeFn?.(props.item);
};
</script>
<template>
  <span class="icon-like-item" @click.stop="toggleAgree">
    <van-icon name="like-o" :color="props.item.isAgree?'red':'#686767'" :size="props.size"/>
    <span class="txt" :class="{'active':props.item.isAgree}">{{ props.item.agreeCount }}</span>
  </span>
</template>
<style scoped lang="scss">
.icon-like-item {
  margin: 0 1%;
  display:inline-block;
  .txt {
    font-size:12px;
    color:#686767;
    margin-left:3px;
    &.active{
      color:red;
    }
  }
}
</style>
