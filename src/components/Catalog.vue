<script setup>
import { ref } from 'vue';
import CatalogItem from './CatalogItem.vue'
import BookIcon from './BookIcon.vue'
const isShow = ref(true);

</script>
<template>
  <van-popup v-model:show="isShow" round position="bottom" :style="{ height: '90%', padding: '10px' }">
    <h2>目录</h2>
    <van-row justify="space-around" class="brief">
      <van-col span="7">
        <van-image width="100" height="100" radius="5px" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      </van-col>
      <van-col class="txt" span="17" justify="space-around" align="bottom">
        <h3>这是标题12</h3>
        <van-row justify="space-between">
          <van-col class="grey-font">查看详情<van-icon name="arrow" /></van-col>
          <van-col span="9">
            <BookIcon />
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row justify="space-between" class="total-sort">
      <van-col class="grey-font">共222节·已完结</van-col>
      <van-col class="grey-font"><van-icon name="exchange" />正序</van-col>
    </van-row>
    <div class="catalog-list">
      <CatalogItem />
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

.grey-font {
  color: #3d3d3d;
  font-size: 12px;
  border: 1px solid red;
}
</style>
