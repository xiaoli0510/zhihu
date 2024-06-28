<script setup>
import { inject } from "vue";
const props = defineProps({
  isBookshelf:{
    type:Boolean,
  }
})

const toggleBookshelf = inject('toggleBookshelf');
const toggleBook = () => {
  toggleBookshelf();
};
</script>
<template>
  <div class="book-item">
    <van-icon name="bookmark-o" @click="toggleBook" v-if="!props.isBookshelf" color="rgb(25, 137, 250)" />
    <span class="txt" :class="{ 'has': props.isBookshelf === true }" @click="toggleBook">{{ props.isBookshelf === true ? '已' : ''
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
    margin-left: 4px;

    &.has {
      color: #b6b2b2;
    }
  }
}
</style>
