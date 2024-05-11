<script setup lang='ts'>
import { ref } from 'vue';
import personal from "@/assets/imgs/personal.jpg";
const activeName = ref('a');
import Invent from "@/views/home/components/idea/invent.vue";
</script>
<template>
   <div class="header">
      <van-row justify="space-between">
         <van-col span="4">
            <van-icon name="arrow-left" color="#fff" size="20px" />
         </van-col>
         <van-col span="4">
            <van-icon name="search" color="#fff" size="20px" />
            <van-icon name="ellipsis" color="#fff" class="ellipsis" size="20px" />
         </van-col>
      </van-row>
      <div class="ip"><van-icon name="location-o" color="#fff" />IP属地贵州</div>
   </div>
   <div class="main">
      <div class="top-inner">
         <div class="info-wrap">
            <div class="personal-wrap">
               <van-image round width="2rem" height="2rem" :src="personal" />
               <van-icon name="ellipsis" color="#000" class="gender" />
            </div>
            <div class="info">
               <div class="item">
                  <div class="num">9万</div>
                  <div>获赞</div>
               </div>
               <div class="item">
                  <div class="num">9万</div>
                  <div>获赞</div>
               </div>
               <div class="item">
                  <div class="num">9万</div>
                  <div>获赞</div>
               </div>
            </div>
         </div>
         <van-row justify="space-between" align="center" class="name-wrap">
            <van-col span="17">
               <span class="name">名字</span>
               <van-icon name="gem" />
               <van-icon name="diamond" />
            </van-col>
            <van-col span="7">
               <van-button round type="primary" size="small" class="btn-follow">关注</van-button>
               <span class="chat">
                  <van-icon name="chat-o" size="20px" />
               </span>
            </van-col>
         </van-row>
         <van-row justify="space-between" class="brief">
            <van-col span="20">
               ainneenn你是 佛挡杀佛
            </van-col>
            <van-col span="4">
               更多 <van-icon name="arrow" color="#686666" />
            </van-col>
         </van-row>
         <div justify="space-between" class="brief">
            <van-icon name="gem" color="#1989fa" size="15px" />
            <span>他的徽章</span>
            <van-icon name="diamond" size="12px" />
            <van-icon name="arrow" color="#686666" size="12px" />
         </div>
         <div justify="space-between" class="brief">
            <van-icon name="star" color="#1989fa" size="15px" />
            <span>获得1111次赞同·122次喜欢·122次收藏</span>
         </div>
      </div>
      <!-- tab -->
      <van-tabs v-model:active="activeName" class="tab-wrap">
         <van-tab title="创造" name="a">
            <Invent/>
            <Invent/>
         </van-tab>
         <van-tab title="动态" name="b">内容 2</van-tab>
         <van-tab title="赞同" name="c">内容 3</van-tab>
      </van-tabs>

   </div>
</template>
<style scoped lang='scss'>
.header {
   height: 200px;
   background: url('@/assets/imgs/profile-bg.jpg') no-repeat center center;
   position: relative;
   padding: 1% 2%;

   .ellipsis {
      margin-left: 14px;
   }

   .ip {
      position: absolute;
      right: 4px;
      bottom: 24px;
      font-size: 12px;
      color: #fff;
      background: rgba(216, 216, 216, 0.5);
      line-height: 20px;
      padding: 0 4px;
      border-radius: 5px;
   }
}

.main {
   background: #f1f1f1;
   position: relative;
   border-radius: 20px 20px 0 0;
   margin-top: -20px;
   z-index: 999;

   .top-inner {
      border-radius: 20px 20px 0 0;
      padding: 0 2% 2% 2%;
      background: #fff;

      .info-wrap {
         display: flex;

         .personal-wrap {
            margin-top: -30px;
            position: relative;

            .gender {
               position: absolute;
               bottom: 4%;
               right: 10%;

            }
         }

         .info {
            width: 84%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .item {
               flex: 1;
               text-align: center;
               font-size: 14px;
               color: rgb(64, 66, 66);

               // line-height:40px;
               .num {
                  color: #000;
                  font-size: 15px;
                  font-weight: 700;
               }
            }
         }
      }

      .name-wrap {
         .name {
            font-weight: 700;
            ;
         }

         .btn-follow {
            padding: 0 17px;
         }

         .chat {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background: #e9e9e9;
            text-align: center;
            line-height: 30px;
            vertical-align: bottom;
            margin-left: 10px;
         }
      }

      .brief {
         color: #686666;
         font-size: 14px;
         line-height: 27px;
      }
   }

   .tab-wrap {
      margin-top: 2%;
   }


}
</style>
