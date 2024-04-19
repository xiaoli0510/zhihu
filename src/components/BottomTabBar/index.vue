<script setup lang="ts">
import { ref } from "vue";
const active = ref(0);
const icon = [{
  active: "/src/assets/imgs/bottomTabBar/active-home.png",
  inactive: "/src/assets/imgs/bottomTabBar/home.png",
  routeName:'home'
},{
  active: "/src/assets/imgs/bottomTabBar/active-discover.png",
  inactive: "/src/assets/imgs/bottomTabBar/discover.png",
  routeName:'discover'
},{
  active: "/src/assets/imgs/bottomTabBar/active-add.png",
  inactive: "/src/assets/imgs/bottomTabBar/add.png",
  routeName:'add'
},{
  active: "/src/assets/imgs/bottomTabBar/active-hot.png",
  inactive: "/src/assets/imgs/bottomTabBar/hot.png",
  routeName:'hot'
},{
  active: "/src/assets/imgs/bottomTabBar/active-center.png",
  inactive: "/src/assets/imgs/bottomTabBar/center.png",
  routeName:'center'
}];
</script>
<template>
  <van-tabbar v-model="active" active-color="#29A1F7">
    <van-tabbar-item v-for="item in icon">
      <template #icon="props">
        <router-link :to="{ name: item.routeName}">
        <img :src="props.active ? item.active : item.inactive" />
        </router-link>
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>
<style scoped lang="scss"></style>
