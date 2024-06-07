<script setup>
import { ref } from "vue";
const isAdd = ref(false);
const emit = defineEmits([
  'showAddBookMessage'
])

const toggleBook = ({ id }) => {
  isAdd.value = !isAdd.value;
  if (isAdd.value) {
    emit('showAddBookMessage')
  } else {
    showToast({
      message: '已移出书架',
      position: 'top',
    })
  }
};
</script>
<template>
  <div class="book-item">
    <van-icon name="bookmark-o" @click="toggleBook" v-if="!isAdd" color="rgb(25, 137, 250)" />
    <span class="txt" :class="{ 'has': isAdd === true }" @click="toggleBook">{{ isAdd === true ? '已' : ''
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
