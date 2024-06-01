<script setup>
import { ref } from "vue";
import BackIcon from '@/components/BackIcon.vue'
import CommentPopup from '@/components/CommentPopup.vue'
const value2 = ref("");
import TopicItem from "@/views/home/components/idea/topicItem.vue";
import { fetchTopicList } from "@/api/index.js";

let list = ref([]);
let res = await fetchTopicList();
list.value = res.data.list;

</script>
<template>
  <Suspense>
    <template #default>
      <div class="idea-detail">
        <!-- 搜索 -->
        <van-row align="center" class="search-wrap">
          <van-col span="1">
            <BackIcon />
          </van-col>
          <van-col span="23">
            <van-cell-group inset>
              <van-field class="search" v-model="value2" clearable left-icon="search" placeholder="搜索知乎内容" />
            </van-cell-group></van-col>
        </van-row>
        <div class="item" v-for="(item, index) in list" :key="index">
          <TopicItem :item="item" />
        </div>
      </div>
    </template>
  </Suspense>
<CommentPopup />

</template>
<style scoped lang="scss">
.idea-detail {
  background: rgb(247 247 247);

  .search-wrap {
    background: #fff;
    padding: 2% 0;

    .search {
      background: rgb(247 247 247);
      border-radius: 1rem;
    }
  }

  .item {
    background: #fff;
    margin-bottom: 3%;
    padding: 1% 2% 3% 2%;
  }
}
</style>
