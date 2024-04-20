<script setup>
import { RouterView } from "vue-router";
import BottomTabBar from './components/BottomTabBar/index.vue'

</script>

<template>
  <div class="container">
    <RouterView />
    <BottomTabBar/>
  </div>
</template>

<style scoped>
.container{
  background:#e9e8e8;
}
</style>
