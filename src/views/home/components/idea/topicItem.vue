<script setup>
import dot from "@/assets/imgs/dot.png";
import UpvoteIcon from "@/components/UpvoteIcon.vue";
import CollectIcon from "@/components/CollectIcon.vue";
import AuthorBrief from "@/views/home/components/idea/AuthorBrief.vue";
import CommentReply from '@/components/CommentReply/Index.vue'
import BookShare from '@/components/BookShare/Index.vue'
import { showImagePreview } from "vant";
import { ref,provide } from "vue";
import { useRouter } from "vue-router";
import FollowIcon from '@/components/FollowIcon.vue'
const props = defineProps({
  item: { type: Object, required: true },
  showComment:Function,
  index:Number
});
const item = props.item;
const index = props.index;
const emit = defineEmits(['showComment']);
const handlePreviewImg = (img,index) => {
  showImagePreview({
    images:img,
    startPosition:index,
  });
};

//阅读设置的默认选项
const readsetObj = ref({
    fontSize: 17,
    light: 70,
    isShowOtherNote: true
})
const onChangeReadset = (type, val) => {
    readsetObj.value[type] = val;
}
provide('onChangeReadset',onChangeReadset);
provide('readsetObj',readsetObj.value);
provide('isShareDetail',true);

const router = useRouter();
const enterSubject = (word)=>{
  router.push(`/subject/${word}`);
}
</script>
<template>
  <!-- 关注分享 -->
  <AuthorBrief :item="item" />
  <div class="favour-wrap">
    <slot name="favour"></slot>
  </div>
  <!-- 描述 -->
  <van-row>
    <van-col span="24">
      <h2>{{ item.title }}</h2>
    </van-col>
    <van-col span="24" class="txt-wrap">
      <span class="depict-txt" :style="{ fontSize: readsetObj.fontSize + 'px' }">{{ item.detail }}</span>
      <span class="label-txt" v-for="word in item.label" @click="enterSubject(word)"># {{ word }}</span>
    </van-col>
    <van-col span="24" class="img-wrap"><van-image v-for="(img,index) in item.imgList"
        @click="handlePreviewImg(item.imgList,index)" width="33.33%" :src="img" /></van-col>
    <!-- 时间 地点 -->
    <van-col span="24">
      <van-row class="time-place" align="center">
        <van-col span="7">{{ item.createTime }}</van-col>
        <van-col span="17">·{{ item.province }}</van-col>
      </van-row>
    </van-col>
    <!-- tool -->
    <van-col span="24" class="tool">
      <van-row class="tool">
        <van-col span="10" class="tool-left">
          <van-row v-if="index===0" align="center">
            <van-col span="5">
              <van-image round fit="cover" width="1rem" height="1rem" :src="item.avatar" /></van-col>
            <van-col span="8" offset="1">{{ item.author }}</van-col>
            <van-col>
            <FollowIcon :item="item"/>
          </van-col>
            <!-- <van-col span="9" offset="1" class="tool-concern">+ 关注</van-col> -->
          </van-row>
          <CommentReply v-else :item="item" :id="item.id">
            <template #icon="{ togglePopup }">
              <span class="comment-btn" @click="togglePopup">欢迎参与讨论</span>
            </template>
          </CommentReply>
        </van-col>
        <van-col span="14">
          <van-row align="center" justify="end">
            <van-col span="4">
              <UpvoteIcon :item="item" />
            </van-col>
            <van-col span="4" offset="1">
              <CollectIcon :item="item" />
            </van-col>
            <van-col span="4" offset="1">
              <CommentReply :item="item" :id="item.id" />
            </van-col>
            <van-col span="4" offset="1">
              <BookShare :data="{ item, iconName: dot, iconSize: '.6rem' }" v-if="item" />
            </van-col>
          </van-row>
        </van-col>
      </van-row>
    </van-col>
  </van-row>
</template>
<style scoped lang="scss">

.career {
  color: #969494;
  font-size: 0.3rem;
  line-height: 0.5rem;
}
.time-place {
  font-size: 0.28rem;
  color: #969494;
  line-height: 0.5rem;
}
.label-txt {
  margin-left: 2%;
  color: #6363b8;
}
.img-wrap {
  margin: 1% 0;
}
.txt-wrap {
  word-break: break-all;
}
.tool {
  margin-top: 1%;
  .tool-left {
    background: rgba(0, 0, 0, 0.07);
    border-radius: 0.5rem;
    text-align: center;
    color:#666666;
    .discuss{
      width:100%;
      line-height:.8rem;
      border-radius: .2rem;
      color:#ccc;
      text-align: left;
      padding-left:10%;
      font-size:.3rem;
    }
    .tool-concern {
      font-size: 0.34rem;
      color: #1989fa;
    }
  }
}
.favour-wrap{
  color:#adabab;
  font-size:14px;
}
</style>
