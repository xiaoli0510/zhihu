<script setup>
import { nextTick, provide,ref } from "vue";
import { RouterView } from "vue-router";
const isRouterAlive = ref(true);
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
        <RouterView v-if="isRouterAlive"/>
      </div>
    </template>
  </Suspense>
</template>
<style scoped>
.container{
  height: 100%;
}
</style>
