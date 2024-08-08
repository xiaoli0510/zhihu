<script setup lang="ts">
</script>
<template>
  <span class="item">
    <van-icon name="contact-o" size=".6rem" />
    <span class="txt">
      <slot name="txt">
        邀请
      </slot>
    </span>
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
