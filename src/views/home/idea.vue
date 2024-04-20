<script setup lang="ts">
import { defineAsyncComponent } from "vue";
const IdeaItem = defineAsyncComponent(
  () => import("./components/idea/index.vue")
);
</script>
<template>
  <Suspense>
    <template #default>
        <IdeaItem />
    </template>
  </Suspense>
</template>
<style scoped lang="scss"></style>
