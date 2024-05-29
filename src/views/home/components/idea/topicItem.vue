<script setup lang="ts">
import dot from "@/assets/imgs/dot.png";
import UpvoteIcon from "@/components/UpvoteIcon.vue";
import CollectIcon from "@/components/CollectIcon.vue";
import AuthorBrief from "@/views/home/components/idea/AuthorBrief.vue";
import CommentIcon from '@/components/CommentIcon.vue';
import { showImagePreview } from "vant";
const props = defineProps({
  item: { type: Object, required: true },
  showComment:Function
});
const item = props.item;
const emit = defineEmits(['showComment']);
// const {item} = defineProps(["item"]);
const handlePreviewImg = () => {
  showImagePreview(["https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"]);
};
</script>
<template>
  <!-- 关注分享 -->
  <AuthorBrief :item="item"/>
  <div class="favour-wrap">
    <slot name="favour"></slot>
  </div>
  <!-- 描述 -->
  <van-row>
    <van-col span="24"
      ><h2>{{ item.title }}</h2></van-col
    >
    <van-col span="24" class="txt-wrap">
      <span class="depict-txt">{{ item.detail }}</span>
      <span class="label-txt" v-for="word in item.label"># {{ word }}</span>
    </van-col>
    <van-col span="24" class="img-wrap"
      ><van-image
        v-for="img in item.imgList"
        @click="handlePreviewImg"
        width="33.33%"
        :src="img"
    /></van-col>
    <!-- 时间 地点 -->
    <van-col span="24">
      <van-row class="time-place" align="center">
        <van-col span="7">{{ item.createTime }}</van-col>
        <van-col span="17">·{{ item.province }}</van-col>
      </van-row>
    </van-col>
    <!-- tool -->
    <van-col span="24" class="tool">
      <van-row class="tool" align="center">
        <van-col span="10" class="tool-left">
          <van-row align="center">
            <van-col span="5">
              <van-image
                round
                fit="cover"
                width=".8rem"
                height=".8rem"
                :src="item.avatar"
            /></van-col>
            <van-col span="8" offset="1">{{ item.author }}</van-col>
            <van-col span="9" offset="1" class="tool-concern">+ 关注</van-col>
          </van-row>
        </van-col>
        <van-col span="14">
          <van-row align="center" justify="end">
            <van-col span="4">
             <UpvoteIcon :item="item"/>
            </van-col>
            <van-col span="4" offset="1">
             <CollectIcon :item="item"/>
            </van-col>
            <van-col span="4" offset="1">
              <CommentIcon :item="item" :show-comment="props.showComment"/>
            </van-col>
            <van-col span="4" offset="1">
              <van-icon :name="dot" size=".6rem" />
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
    height: 0.8rem;
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
