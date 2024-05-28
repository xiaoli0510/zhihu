<script setup lang="ts">
import { ref } from "vue";
const props = defineProps(["item"]);
let item = props.item;
let bookRef = ref(false);

const toggleBook = (item) => {
  bookRef.value = !bookRef.value;
};
</script>
<template>
  <div class="book-item">
    <van-icon name="bookmark-o" @click="toggleBook(item)" v-if="!bookRef" color="rgb(25, 137, 250)"/>
    <span class="txt" :class="{ 'has': bookRef === true }" @click="toggleBook(item)">{{ bookRef === true ? '已' : ''
      }}加入书架</span>
  </div>
</template>
<style scoped lang="scss">
.book-item {
  margin: 0 1%;
  display: inline-block;
  .txt {
    vertical-align: text-bottom;
    color: rgb(25, 137, 250);
    margin-left:4px;

    &.has {
      color: #b6b2b2;
    }
  }
}
</style>
