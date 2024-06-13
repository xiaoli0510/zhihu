<script setup>
import { nextTick, provide,ref } from "vue";
import { RouterView } from "vue-router";
import FloatWindow from './components/FloatWindow.vue'
const isRouterAlive = ref(true);
//刷新页面
const reload = ()=>{
  isRouterAlive.value = false;
  nextTick(()=>{
    isRouterAlive.value = true;
  })
}
provide('reload',reload);
</script>
<template>
  <Suspense>
    <template #default>
      <div class="container">
        <RouterView v-if="isRouterAlive&&$route.meta.keepAlive" v-slot="{Component}">
          <keep-alive>
            <component :is="Component"/>
          </keep-alive>
        </RouterView>
        <RouterView v-if="isRouterAlive&&!$route.meta.keepAlive"/>
      </div>
    </template>
    </Suspense>
  <FloatWindow />
</template>
<style scoped>
.container{
  height: 100%;
}
</style>
