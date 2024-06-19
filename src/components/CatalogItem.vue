<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const props = defineProps(['list']);
const list = ref(props.list);
const router = useRouter();
const enterNovelDetail = (id) => {
  router.push(`/novel/detail/${id}`);
}
</script>
<template>
  <div v-for="item in list" class="catalog-item" @click="enterNovelDetail(item.id)">
    <van-row>
      <van-col>第{{ item.section }}节 </van-col>
      <van-col offset="1">{{ item.title }} </van-col>
    </van-row>
    <van-text-ellipsis rows="2" :content="item.sentence" expand-text="展开" collapse-text="收起" />
    <van-row justify="space-around">
      <van-col span="20">
        <span class="info">{{ item.totalTxt }}字</span>
        <span>|</span>
        <span class="info">{{ item.comment }}评论</span>
      </van-col>
      <van-col span="4"></van-col>
    </van-row>
    <van-divider />
  </div>
</template>
<style scoped lang='scss'>
.catalog-item {
  font-size: 12px;
  color: #2b2b2b;

  .info {
    font-size: 12px;
    color: #3a3939;
    margin: 0 3px;
  }
}
</style>
