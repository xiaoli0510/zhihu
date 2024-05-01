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
   <van-icon :name="like" v-if="!collectRef" :badge="item.collect" size=".6rem" @click="addCollect(item)"/>
              <van-icon :name="activeLike" v-else :badge="item.collect" size=".6rem" @click="cancelCollect(item)"/>
</template>
<style scoped lang="scss"></style>
