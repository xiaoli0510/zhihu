<script setup lang="ts">
import { ref } from "vue";
const value2 = ref("");
import Detail from "./components/idea/detail.vue";
import { fetchIdeaDetail } from "@/api/index";

let list = ref([]);
let upvoteRef = ref(false);

let res = await fetchIdeaDetail();
list.value = res.data.list;
console.log(list.value);

const handlePreviewImg = () => {
  showImagePreview(["https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"]);
};

const addUpVote = (index) => {
  list.value[index].upvote++;
  upvoteRef.value = !upvoteRef.value;
};
const cancelUpVote = (index) => {
  list.value[index].upvote--;
  upvoteRef.value = !upvoteRef.value;
};
const addCollect = (index) => {
  list.value[index].upvote--;
  upvoteRef.value = !upvoteRef.value;
};

</script>
<template>
  <Suspense>
    <template #default>
      <div class="idea-detail">
        <!-- 搜索 -->
        <van-row align="center" class="search-wrap">
          <van-col span="1"><van-icon name="arrow-left" /></van-col>
          <van-col span="23">
            <van-cell-group inset>
              <van-field
                class="search"
                v-model="value2"
                clearable
                left-icon="search"
                placeholder="搜索知乎内容"
              /> </van-cell-group
          ></van-col>
        </van-row>
        <div class="item" v-for="(item, index) in list" :key="index">
          <Detail :item="item" />
        </div>
      </div>
    </template>
  </Suspense>
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
