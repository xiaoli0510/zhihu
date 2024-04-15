<script setup lang="ts">
import { ref } from "vue";
const active = ref(0);
const icon = [{
  active: "/src/assets/imgs/active-home.png",
  inactive: "/src/assets/imgs/home.png",
},{
  active: "/src/assets/imgs/active-find.png",
  inactive: "/src/assets/imgs/find.png",
},{
  active: "/src/assets/imgs/active-add.png",
  inactive: "/src/assets/imgs/add.png",
},{
  active: "/src/assets/imgs/active-shop.png",
  inactive: "/src/assets/imgs/shop.png",
},{
  active: "/src/assets/imgs/active-center.png",
  inactive: "/src/assets/imgs/center.png",
}];
</script>
<template>
  <van-tabbar v-model="active" active-color="#29A1F7">
    <van-tabbar-item v-for="item in icon">
      <template #icon="props">
        <img :src="props.active ? item.active : item.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<style scoped lang="scss"></style>
