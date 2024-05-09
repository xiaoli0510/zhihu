<script setup lang="ts">
import { ref } from "vue";
import shareIcon from "@/assets/imgs/share.png";

import comment from "@/assets/imgs/comment.png";
import dot from "@/assets/imgs/dot.png";
import Upvote from "@/components/upvote.vue";
import Collect from "@/components/collect.vue";

const props = defineProps(["item","index"]);
let {item,index} = props;


const handlePreviewImg = () => {
  showImagePreview(["https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"]);
};


</script>
<template>
  <!-- 关注分享 -->
  <div class="author">
    <van-row align="center">
      <van-col span="3"
        ><van-image round width="1rem" height="1rem" :src="item.avatar"
      /></van-col>
      <van-col span="13">
        <van-row>
          <van-col span="24">
            <van-row>
              <van-col span="7">{{ item.author }}</van-col>
              <van-col span="16" offset="1"
                ><van-icon name="gem"
              /></van-col> </van-row
          ></van-col>
          <van-col span="24"
            ><van-text-ellipsis :content="item.career" class="career"
          /></van-col>
        </van-row>
      </van-col>
      <van-col offset="1" span="4">
        <van-button size="small" plain round icon="plus" type="primary"
          >关注</van-button
        >
      </van-col>
      <van-col span="2" offset="1">
        <van-icon :name="shareIcon" size=".7rem" />
      </van-col>
    </van-row>
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
          <van-row align="center" v-if="index==0">
            <van-col span="5">
              <van-image
                round
                fit="cover"
                width=".8rem"
                height=".8rem"
                :src="item.avatar"
            /></van-col>
            <van-col span="7" offset="1">{{ item.author }}</van-col>
            <van-col span="9" offset="1" class="tool-concern">+ 关注</van-col>
          </van-row>
          <div class="discuss" v-else>欢迎参与讨论</div>
        </van-col>
        <van-col span="14">
          <van-row align="center" justify="end">
            <van-col span="4">
             <Upvote :item="item"/>
            </van-col>
            <van-col span="4" offset="1">
             <Collect :item="item"/>
            </van-col>
            <van-col span="4" offset="1">
              <van-icon :name="comment" :badge="item.comment" size=".6rem" />
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
.author {
  margin-top: 1%;
  padding-top: 0.2rem;
}
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
</style>
