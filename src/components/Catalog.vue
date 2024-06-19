<script setup>
import { ref, watch } from 'vue';
import CatalogItem from './CatalogItem.vue'
import BookIcon from './BookIcon.vue'
import { fetchCatalogList } from '@/api/search.js';
import { useRouter } from 'vue-router';
const isShow = ref(true);
const res = await fetchCatalogList();
console.log(res.data)

const { id, title, total, state } = res.data;
const list = ref(res.data.list);
const router = useRouter();
const enterNovelHomepage = () => {
  router.push(`/novel/homepage/${id}`)
}

const sortType = ref(0);//0升序 1降序
const toggleSort = () => {
  sortType.value = sortType.value == 0 ? 1 : 0;

}
watch(sortType, (newVal, oldVal) => {
  if (newVal === 1) {
    list.value.sort((a, b) => {
      return b.id - a.id;
    })
  } else {
    list.value.sort((a, b) => {
      return a.id - b.id;
    })
  }
})

</script>
<template>
  <van-popup v-model:show="isShow" round position="bottom" :style="{ height: '90%', padding: '10px' }" closeable
    close-icon="close">
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
      <van-col class="grey-font"><van-icon name="exchange" @click="toggleSort" />{{ sortType === 0 ? '正序' : '倒序 ' }}</van-col>
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

.catalog-list {
  border: 1px solid red;
  overflow: auto;
  height: 520px;
}

.grey-font {
  color: #3d3d3d;
  font-size: 12px;
}
</style>
