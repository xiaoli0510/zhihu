<script setup>
const props = defineProps(['isFollow']);
const emit = defineEmits(['toggleFollow']);
const toggleFollow = ()=>{
  emit('toggleFollow');
}
</script>
<template>
  <span class="item">
    <van-button v-if="props.isFollow" size="small" plain round @click="toggleFollow">已关注</van-button>
    <van-button v-else size="small" plain round icon="plus" type="primary" @click="toggleFollow">关注</van-button>
  </span>
</template>
<style scoped lang="scss">
.item {
  margin: 0 1%;

  .txt {
    vertical-align: text-top;
    font-size:12px;
    color:#686767;
    margin-left:7px;
  }
}
</style>
