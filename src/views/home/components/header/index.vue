<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import Idea from "@/views/home/components/idea/Index.vue";
import Interest from "@/views/home/components/Interest/Interest.vue";
import recent from "@/assets/imgs/recent.png";
import warn from "@/assets/imgs/warn.png";
const activeName = ref("Interest");
const tabArray = ref([
  { title: "想法", value: "Idea" },
  { title: "关注", value: "Interest" },
  { title: "推荐", value: "Recomment" },
  { title: "热榜", value: "Hot" },
]);
const comTagMap = {
  Idea,
  Interest,
}
const router = useRouter();
const enterSearch = () => {
  router.push({
    name: 'SEARCH'
  })
}

const enterRecent = () => {
  router.push('/recent');
}
</script>
<template>
  <div class="header">
    <van-icon :name="recent" class="recent" @click="enterRecent"/>
    <van-tabs v-model:active="activeName" class="top-tab">
      <van-tab v-for="item in tabArray" :title="item.title" :name="item.value">
      </van-tab>
    </van-tabs>
    <van-icon name="search" class="search" size="24px" @click="enterSearch" />
    <van-icon :name="warn" class="warn" size="20px" />
  </div>
  <div class="home-main">

    <component :is="comTagMap[activeName]"/>
  </div>
  <!-- <Idea /> -->
  <RouterView />
</template>
<style scoped lang="scss">
.header {
  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 40px;
    right: 0;
    z-index: 999;
    background: #fff;
    max-width: 750px;
    left: 50%;
    transform: translateX(-50%);

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
.home-main {
  overflow: hidden;
  margin: 46px auto;
  border: 1px solid red;
}
</style>
