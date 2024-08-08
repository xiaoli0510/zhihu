<script setup>
import { inject } from 'vue';
const props = defineProps(['item']);
const toggleFollowFn = inject('toggleFollow');
const toggleFollow = ()=>{
  if (props.item.isFollow === true) {
        showConfirmDialog({
            message:
                '确定不再关注吗？',
            confirmButtonText: '不再关注',
            showCancelButton: true,
        }).then(() => {
          
        toggleFollowFn(props.item);
        }).catch(() => {
        })
    } else {
        toggleFollowFn(props.item);
    }

}
</script>
<template>
  <span class="item">
    <van-button v-if="props.item.isFollow" size="small" plain round @click="toggleFollow">已关注</van-button>
    <van-button v-else size="small" plain round icon="plus" type="primary" @click="toggleFollow">
      <slot name="txt">关注</slot>
    </van-button>
  </span>
</template>
<style scoped lang="scss">
.item {
  margin: 0 1%;

  .txt {
    vertical-align: text-top;
    font-size:12px;
    color:#686767;
    margin-left:7px;
  }
}
</style>
