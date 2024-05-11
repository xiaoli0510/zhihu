<script setup>
import { RouterView } from "vue-router";
</script>
<template>
  <Suspense>
    <template #default>
      <div class="container">
        <RouterView />
      </div>
    </template>
  </Suspense>
</template>
<style scoped>
.container {
  background: #e9e8e8;
}
</style>
