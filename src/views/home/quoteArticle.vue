<script setup>
import ArticleItem from '@/components/AddAnswer/ArticleItem.vue'
import { ref, watch } from 'vue';
import {fetchArticle} from '@/api/search.js';
const showPopover = ref(false);
const list = ref([]);
fetchArticle()
.then(res=>{
  list.value = res?.data?.list;
}).catch(err=>{
    console.log(err);
})

// 通过 actions 属性来定义菜单选项
const actions = [
  { text: '默认排序',value:1},
  { text: '按赞同排序' ,value:2},
];
const curType = ref(1);
const onSelect = (action) => {
    curType.value = action.value;
};
watch(curType,newVal=>{
    list.value.sort(item=>{
        if(item.type===newVal){
            return -1;
        }else{
            return 1;
        }
    })
})
</script>
<template>
    <van-row justify="flex-start" style="padding:4px;" align="center">
        <van-col>
            <BackIcon />
        </van-col>
    </van-row>
    <div class="quote-article"> 
        <h3 class="text-c">选择要引用的文章</h3>
        <van-row justify="space-between">
            <van-col>
                内容
            </van-col>
            <van-col>
                <van-popover v-model:show="showPopover" :actions="actions" @select="onSelect">
                    <template #reference class="gray-font">
                       <span class="gray-font">默认排序</span><van-icon name="arrow-down" color="#a09f9f"/>
                    </template>
                </van-popover>
            </van-col>
        </van-row>
        <ArticleItem v-for="item in list" :key="item.id" :item="item"/>
        <p class="gray-font tips">没有更多内容</p>
    </div>
</template>
<style scoped lang='scss'>
.quote-article {
    width: 95%;
    margin: 0 auto;
    .tips{
        margin-top:20px;
    }
}
</style>
