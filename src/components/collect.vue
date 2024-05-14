<script setup lang="ts">
import { ref } from "vue";
import like from "@/assets/imgs/like.png";
import activeLike from "@/assets/imgs/active-like.png";

const props = defineProps(["item"]);
let item = props.item;
let collectRef = ref(false);

const addCollect = (item) => {
  item.collect++;
  collectRef.value = !collectRef.value;
};
const cancelCollect = (item) => {
  item.collect--;
  collectRef.value = !collectRef.value;
};

</script>
<template>
  <span v-show="!collectRef" class="item">
    <van-icon :name="like" v-show="item.collect > 0" :badge="item.collect" size=".6rem" @click="addCollect(item)" />
    <van-icon :name="like" v-show="item.collect == 0" size=".6rem" @click="addCollect(item)" />
    <span v-show="item.collect == 0" class="txt">收藏</span>
  </span>
  <van-icon :name="activeLike" v-show="collectRef" :badge="item.collect" size=".6rem" @click="cancelCollect(item)" />
</template>
<style scoped lang="scss">
.item {
  margin: 0 1%;

  .txt {
    vertical-align: top;
  }
}
</style>
