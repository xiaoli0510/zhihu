<script setup lang="ts">
import { ref } from "vue";
const value2 = ref("");
import shareIcon from "@/assets/imgs/share.png";
import triangle from "@/assets/imgs/sync.png";
import like from "@/assets/imgs/like.png";
import comment from "@/assets/imgs/comment.png";
import { fetchIdeaDetail } from "@/api/index";

let list = ref([]);

let res = await fetchIdeaDetail();
list.value = res.data.list;
console.log(list.value);

const handlePreviewImg = () => {
  showImagePreview(["https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"]);
};
</script>
<template>
  <Suspense>
    <template #default>
      <div class="idea-detail">
        <!-- 搜索 -->
        <van-row align="center">
          <van-col span="1"><van-icon name="arrow-left" /></van-col>
          <van-col span="23">
            <van-cell-group inset>
              <van-field
                class="search-wrap"
                v-model="value2"
                clearable
                left-icon="search"
                placeholder="搜索知乎内容"
              /> </van-cell-group
          ></van-col>
        </van-row>
        <div class="item" v-for="item in list">
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
                      <van-col span="4">{{ item.author }}</van-col>
                      <van-col span="19" offset="1"
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
              <van-col span="3">
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
              <span class="label-txt" v-for="word in item.label"
                ># {{ word }}</span
              >
            </van-col>
            <van-col span="24"
              ><van-image
                v-for="img in item.imgList"
                @click="handlePreviewImg"
                width="50%"
                :src="img"
            /></van-col>
            <!-- 时间 地点 -->
            <van-col span="24">
              <van-row class="time-place" align="center">
                <van-col span="7">{{ item.createTime }}</van-col>
                <van-col span="17">·{{ item.province.slice(0, -1) }}</van-col>
              </van-row>
            </van-col>
            <!-- tool -->
            <van-col span="24">
              <van-row class="tool" align="center">
                <van-col span="10">
                  <van-row align="center">
                    <van-col span="5">
                      <van-image
                        round
                        width=".6rem"
                        height=".6rem"
                        :src="item.avatar"
                    /></van-col>
                    <van-col span="7" offset="1">{{ item.author }}</van-col>
                    <van-col span="9" offset="1">+ 关注</van-col>
                  </van-row>
                </van-col>
                <van-col span="14">
                  <van-row align="center">
                    <van-col span="5">
                      <van-icon :name="triangle" badge="9" size=".6rem" />
                    </van-col>
                    <van-col span="5" offset="1">
                      <van-icon :name="like" badge="9" size=".6rem" />
                    </van-col>
                    <van-col span="5" offset="1">
                      <van-icon :name="comment" badge="9" size=".6rem" />
                    </van-col>
                    <van-col span="5" offset="1">
                      <van-icon :name="comment" badge="9" size=".6rem" />
                    </van-col>
                  </van-row>
                </van-col>
              </van-row>
            </van-col>
          </van-row>
        </div>
      </div>
    </template>
  </Suspense>
</template>
<style scoped lang="scss">
.idea-detail {
  border: 1px solid red;
  background: #fff;
  padding: 1% 0;

  .search-wrap {
    background: #dbdada3b;
    border-radius: 1rem;
  }
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
  }
  .label-txt {
    margin-left: 2%;
  }
  .txt-wrap {
    word-break: break-all;
  }
}
</style>
