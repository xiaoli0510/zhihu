<script setup>
const props = defineProps(['item','size']);
const emit = defineEmits(['toggleAgree']);
const toggleAgree = (item) => {
  emit('toggleAgree',props.item);
};
</script>
<template>
  <span class="icon-like-item" @click="toggleAgree">
    <van-icon name="like-o" :color="props.item.isAgree?'red':'#686767'" :size="props.size"/>
    <span class="txt" :class="{'active':props.item.isAgree}">{{ props.item.agreeCount }}</span>
  </span>
</template>
<style scoped lang="scss">
.icon-like-item {
  .txt {
    vertical-align: text-top;
    font-size:12px;
    color:#686767;
    margin-left:3px;
    &.active{
      color:red;
    }
  }
}
</style>
