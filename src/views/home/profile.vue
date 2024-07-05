<script setup>
import { ref } from 'vue';
import personal from "@/assets/imgs/personal.jpg";
import profileBg from "@/assets/imgs/profile-bg.jpg";
import male from "@/assets/imgs/male.png";
import feMale from "@/assets/imgs/female.png";
import BackIcon from '@/components/BackIcon.vue'
const activeName = ref('trend');
import Invent from "@/views/home/components/idea/Invent.vue";
import Trend from '@/views/home/components/idea/Trend.vue';
import { fetchProfile } from '@/api/index.js'
import { showToast } from 'vant';
const obj = ref({
   id: 1,
   imgBg: personal,//top img
   location: '贵州',//ip
   author: '宝宝',//姓名
   gender: 'male',//性别
   sign: '安然入眠',//签名
   career:'',
   born: '1999-01-01',//生日
   support: 1,//获赞
   beFollow: 2,//被关注
   follow: 3,//关注
   like: 4,//喜欢
   collect: 5,//喜欢
   intro:'',
   label:[],
   badge: {//徽章
      develop: ['diamond'],
      particular: ['level11', 'level22'],
   },
   product: [//创造
      {
         name: '宝宝',
         time: '2024-05-13 07:00',
         title: '这是一句话标题',
         sentence: '这是一段话',
         upvote: 112,
         collect: 112,
         comment: 12,
      }
   ],
   favour: [],
   trend: [],
});

const productLabelArr = ref([{
   name: "全部",
   num: 53,
},
{
   name: "回答",
   num: 53,
},
{
   name: "视频",
   num: 53,
},
{
   name: "回答",
   num: 53,
},
{
   name: "视频",
   num: 53,
}
])

const initData = () => {
   fetchProfile().then(res => {
      obj.value = res.data.body;
   })
}
initData();

// 更多
const showDetail = ref(false);
const showModalDetail = (obj) => {
   showDetail.value = true;
}

// 右上角...
const actions = [
   { text: '分享' },
   { text: '加入黑名单' },
   { text: '举报用户' },
];
const selectMore = (action) => showToast(action.text);

//创造 选择label
const activeLabelIndex = ref(0);
const selectLabel = (index) => {
   activeLabelIndex.value = index;
}

</script>
<template>
   <div class="header" :style="{backgroundImage:`url(${profileBg})`}"> 
      <van-row justify="space-between">
         <van-col span="4">
            <BackIcon color="#fff" size="20px"/>
         </van-col>
         <van-col span="4">
            <van-icon name="search" color="#fff" size="20px" />
            <van-popover :actions="actions" @select="selectMore" :offset="[-30, 0]" :show-arrow="false">
               <template #reference>
                  <van-icon name="ellipsis" color="#fff" class="ellipsis" size="20px" />
               </template>
            </van-popover>
         </van-col>
      </van-row>
      <div class="ip"><van-icon name="location-o" color="#fff" />IP属地{{ obj.id }}</div>
   </div>
   <div class="main">
      <div class="top-inner">
         <div class="info-wrap">
            <div class="personal-wrap">
               <van-image round width="2rem" height="2rem" :src="personal" />
               <van-icon v-if="obj.gender === 'male'" :name="male" color="#000" class="gender" />
               <van-icon v-else :name="feMale" color="#000" class="gender" />
            </div>
            <div class="info">
               <div class="item">
                  <div class="num">{{ obj.support }}</div>
                  <div>获赞</div>
               </div>
               <div class="item">
                  <div class="num">{{ obj.beFollow }}</div>
                  <div>被关注</div>
               </div>
               <div class="item">
                  <div class="num">{{ obj.follow }}</div>
                  <div>关注</div>
               </div>
            </div>
         </div>
         <van-row justify="space-between" align="center" class="name-wrap">
            <van-col span="17">
               <span class="name">{{ obj.author }}</span>
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
               {{ obj.sign }}
            </van-col>
            <van-col span="4" @click="showModalDetail(obj)">
               更多 <van-icon name="arrow" color="#686666" />
            </van-col>
         </van-row>
         <div justify="space-between" class="brief">
            <van-icon name="gem" color="#1989fa" size="15px" />
            <span>他的徽章</span>
            <van-icon :name="item" size="12px" v-for="(item, index) in obj.badge.develop" :key="index" />
            <van-icon name="arrow" color="#686666" size="12px" />
         </div>
         <div justify="space-between" class="brief">
            <van-icon name="star" color="#1989fa" size="15px" />
            <span>获得{{ obj.support }}次赞同·{{ obj.like }}次喜欢·{{ obj.collect }}次收藏</span>
         </div>
      </div>
      <van-tabs v-model:active="activeName" class="tab-wrap">
         <van-tab title="创造" name="product">
            <div class="label-wrap">
               <div class="label" :class="{ 'active': activeLabelIndex === index1 }"
                  v-for="(item1, index1) in productLabelArr" :key="index1" @click="selectLabel(index1)">
                  {{ item1.name }}
                  {{ item1.num }}
               </div>
            </div>
            <Invent v-for="(item, index) in obj.product" :key="index" :item="item" />
         </van-tab>
         <van-tab title="动态" name="trend">
            <Trend :list="obj.trend" />
         </van-tab>
         <van-tab title="赞同" name="approve">
            <Invent v-for="(item, index) in obj.favour" :key="index" :item="item" />
         </van-tab>
      </van-tabs>
   </div>

   <!-- 更多-弹窗 -->
   <van-popup closeable v-model:show="showDetail" round position="bottom" :style="{ height: '94%' }">
      <div class="detail-wrap">
         <h3>个人资料</h3>
         <div class="detail-item">
            <h3>资本资料</h3>
            <van-row class="detail-row">
               <van-col span="6" class="detail-label">用户名</van-col>
               <van-col span="14" offset="1">{{ obj.author }}</van-col>
            </van-row>
            <van-row class="detail-row">
               <van-col span="6" class="detail-label">一句话介绍</van-col>
               <van-col span="14" offset="1">{{ obj.sign }}</van-col>
            </van-row>
            <van-row class="detail-row">
               <van-col span="6" class="detail-label">性别</van-col>
               <van-col span="14" offset="1">{{obj.gender==='male'?'男':'女'}}</van-col>
            </van-row>
            <van-row class="detail-row">
               <van-col span="6" class="detail-label">所在行业</van-col>
               <van-col span="14" offset="1">{{ obj.career }}</van-col>
            </van-row>
            <van-row class="detail-row">
               <van-col span="6" class="detail-label">生日</van-col>
               <van-col span="14" offset="1">{{obj.born}}</van-col>
            </van-row>
         </div>
         <div class="detail-item">
            <h3>影响力</h3>
            <van-row class="detail-row" justify="space-between">
               <van-col span="21">
                  <van-icon name="gem" color="#1989fa" />
                  Ta的徽章</van-col>
               <van-col span="3">
                  <van-icon :name="item" color="#1989fa" v-for="(item, index) in obj.badge.develop" :key="index" />
                  <van-icon name="arrow" />
               </van-col>
            </van-row>
            <van-row class="detail-row">
               <van-col span="24">
                  <van-icon name="diamond" color="#1989fa" />
                  获得{{obj.support}}次赞同·{{obj.like}}次喜欢·{{obj.collect}}次收藏</van-col>
            </van-row>
         </div>
         <div class="detail-item">
            <h3>个人简介</h3>
            <div class="intro">{{ obj.intro }}</div>
         </div>
         <div class="detail-item">
            <h3>好友印象</h3>
            <van-space>
               <van-tag v-for="(item, index) in obj.label" :key="index"  round type="primary" size="large" color="rgb(213 236 248)" text-color="#1989fa">{{item}}</van-tag>
            </van-space>
         </div>
      </div>
   </van-popup>
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
               background: #d4deec;
               border-radius: 50%;
               border: 2px solid #fff;
               padding: 2%;

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

      .label-wrap {
         background-color: #fff;
         display: flex;
         flex-direction: row;
         overflow-x: auto;
         padding: 2% 0 4% 0;

         .label {
            background: #f0efef;
            border-radius: 17px;
            padding: 0 14px;
            line-height: 30px;
            white-space: nowrap;
            margin: 0 2%;
            color: #726f6f;

            &.active {
               color: #000;
               font-weight: 700;
            }
         }
      }
   }
}

.detail-wrap {


   background: #ecebeb;
   padding: 14px 14px 40px 14px;
   h3{
      line-height: 40px;
   }

   .detail-item {
      background: #fff;
      border-radius: 10px;
      margin-top: 3%;
      padding: 20px;
      h3 {
         line-height: 40px;

      }

      .detail-row {
         border-bottom: 1px solid #e9e8e8;
         line-height: 38px;
         font-size: 14px;

         .detail-label {
            color: #a5a4a4;
         }
      }

      .detail-row:last-child {
         border-bottom: none;
      }

      .intro {
         font-size: 12px;
      }


   }
}
</style>
