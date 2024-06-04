<script setup>
import { ref } from 'vue';
// import picker compopnent
import Vue3EmojiPicker from 'vue3-emoji-picker'

// import css
import 'vue3-emoji-picker/css'
const disabledGroups = ref["animals_nature",
  "food_drink",
  "activities",
  "travel_places",
  "objects",
  "symbols",
  "flags"];
let selectedEmoji = ref('');
const onChangeText = (text)=>{
  console.log(text)

}

</script>
<template>
  <div class="innner">
    <Vue3EmojiPicker v-model="selectedEmoji" :disable-skin-tones="true" picker-type="textarea"
      :native="true" :hide-group-names="true" @update:text="onChangeText" 
    :disabled-groups=disabledGroups :hide-search="true" :hide-group-icons="true"/>
  </div>
</template>
<style scoped lang='scss'>
.innner {
  // width: 200px;
  // height: 200px;
  // border: 1px solid red;
}
</style>
