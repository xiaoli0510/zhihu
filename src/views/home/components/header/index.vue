<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Idea from "@/views/home/components/idea/index.vue";
import recent from "@/assets/imgs/recent.png";
import warn from "@/assets/imgs/warn.png";
const activeName = ref("a");
const tabArray = ref([
  { title: "想法", value: "idea" },
  { title: "关注", value: "interest" },
  { title: "推荐", value: "recomment" },
  { title: "热榜", value: "hot" },
]);
const router = useRouter();
const enterSearch = () => {
  router.push({
    name: 'search'
  })
}
</script>
<template>
  <div class="header">
    <van-icon :name="recent" class="recent" />
    <van-tabs v-model:active="activeName" class="top-tab">
      <van-tab v-for="item in tabArray" :title="item.title" :name="item.value">
      </van-tab>
    </van-tabs>
    <van-icon name="search" class="search" size="24px" @click="enterSearch" />
    <van-icon :name="warn" class="warn" size="20px" />
  </div>
  <Idea />
  <RouterView />
</template>
<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  right: 0;
  z-index: 999;
  background: #fff;

  .top-tab {
    width: 80%;
    margin: 0 auto;
  }

  .recent {
    position: absolute;
    left: 5px;
    top: 27%;
    z-index: 999;
  }

  .warn {
    position: absolute;
    right: 5px;
    top: 27%;
    z-index: 999;
  }

  .search {
    position: absolute;
    right: 28px;
    top: 27%;
    z-index: 999;
  }
}
</style>
