<script setup>
import { ref } from 'vue';
import CatalogItem from './CatalogItem.vue'
import BookIcon from './BookIcon.vue'
import { fetchCatalogList } from '@/api/search.js';
import { useRouter } from 'vue-router';
const isShow = ref(true);
const res = await fetchCatalogList();
console.log(res.data)
const { id, title, total, state,list } = res.data;
const router = useRouter();
const enterNovelHomepage = () => {
  router.push(`/novel/homepage/${id}`)
}

</script>
<template>
  <van-popup v-model:show="isShow" round position="bottom" :style="{ height: '90%', padding: '10px' }">
    <h2>目录</h2>
    <van-row justify="space-around" class="brief">
      <van-col span="7">
        <van-image width="100" height="100" radius="5px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </van-col>
      <van-col class="txt" span="17" justify="space-around" align="bottom">
        <h3>{{ title }}</h3>
        <van-row justify="space-between">
          <van-col class="grey-font" @click="enterNovelHomepage">查看详情<van-icon name="arrow" /></van-col>
          <van-col span="9">
            <BookIcon />
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row justify="space-between" class="total-sort">
      <van-col class="grey-font">共{{ total }}节·{{ state == 1 ? '已' : '未' }}完结</van-col>
      <van-col class="grey-font"><van-icon name="exchange" />正序</van-col>
    </van-row>
    <div class="catalog-list">
      <CatalogItem :list="list" />
    </div>

  </van-popup>
</template>
<style scoped lang='scss'>
.brief {
  margin: 10px 0;

  .txt {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
}

.total-sort {
  margin: 20px 0;
}
.catalog-list{
  border:1px solid red;
  overflow:auto;
  height: 520px;
}

.grey-font {
  color: #3d3d3d;
  font-size: 12px;
}
</style>
