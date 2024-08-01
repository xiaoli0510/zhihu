<script setup>
import { useRouter  } from 'vue-router';
import FollowIcon from '@/components/FollowIcon.vue';
import BookShare from '@/components/BookShare/Index.vue'

const router = useRouter();
const { item } = defineProps(['item']);
const enterProfile = (id) => {
 router.push(`/profile/${id}`)
}
</script>
<template>
  <!-- 关注分享 -->
  <div class="author">
    <van-row align="center">
      <van-col span="3"><van-image  @click="enterProfile(item.id)" round width="1rem" height="1rem" :src="item.avatar" /></van-col>
      <van-col span="13">
        <van-row>
          <van-col span="24" @click="enterProfile(item.id)">
            <van-row>
              <van-col span="7">{{ item.author }}</van-col>
              <van-col span="16" offset="1"><van-icon name="gem" /></van-col> </van-row></van-col>
          <van-col span="24"><van-text-ellipsis :content="item.sign" /></van-col>
        </van-row>
      </van-col>
      <van-col offset="1" span="5">
        <FollowIcon :item="item"/>
      </van-col>
      <van-col span="2">
        <BookShare :data="item" v-if="item"/>
      </van-col>
    </van-row>
  </div>
</template>
<style scoped lang='scss'>
.author {
  margin-top: 1%;
  padding-top: 0.2rem;
}
</style>
