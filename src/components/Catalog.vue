<script setup>
import { ref, watch } from 'vue';
import CatalogItem from './CatalogItem.vue' 
import Book from '@/components/Bookshelf/Book.vue'
import { fetchCatalogList } from '@/api/search.js';
import { useRouter } from 'vue-router';

const props = defineProps(['isCatalog','data']);
const isShow = ref(props.isCatalog);
watch(() => props.isShow, (newVal) => {
  isShow.value = newVal.isCatalog;
})
const emit = defineEmits(['close']);
const close = () => {
  emit('close');
}

const res = await fetchCatalogList();
const {total, state } = res.data;
const list = ref(res.data.list);
const router = useRouter();
const enterNovelHomepage = () => {
  router.push(`/novel/home/${props.data.id}`)
}

const sortType = ref(0);//0升序 1降序
const toggleSort = () => {
  sortType.value = sortType.value == 0 ? 1 : 0;
}
watch(sortType, (newVal) => {
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
  <van-popup v-model:show="isShow" round position="bottom" :style="{ height: '95%', padding: '10px' }" closeable
    @close="close" close-icon="close">
    <h2>目录</h2>
    <van-row justify="space-around" class="brief">
      <van-col span="7"  @click="enterNovelHomepage">
        <van-image width="100" height="100" radius="5px" :src="props.data.cover"/>
      </van-col>
      <van-col class="txt" span="17" justify="space-around" align="bottom">
        <h3 @click="enterNovelHomepage">{{ props.data.title }}</h3>
        <van-row justify="space-between">
          <van-col  @click="enterNovelHomepage" class="grey-font">查看详情<van-icon name="arrow" /></van-col>
          <van-col span="9">
            <Book :isHas="props.data.isHas"/>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row justify="space-between" class="total-sort">
      <van-col class="grey-font">共{{ total }}节·{{ state == 1 ? '已' : '未' }}完结</van-col>
      <van-col class="grey-font"><van-icon name="exchange" @click="toggleSort" />{{ sortType === 0 ? '正序' : '倒序 '
        }}</van-col>
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
  overflow: auto;
  height: 520px;
}

.grey-font {
  color: #3d3d3d;
  font-size: 12px;
}
</style>
