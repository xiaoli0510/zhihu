<script setup>
import { ref } from 'vue';
// import picker compopnent
import Vue3EmojiPicker from 'vue3-emoji-picker'

// import css
import 'vue3-emoji-picker/css'
const inputRef = ref();
const disabledGroups = ref["animals_nature",
  "food_drink",
  "activities",
  "travel_places",
  "objects",
  "symbols",
  "flags"];
let selectedEmoji = ref('');

function handleInput(event) {
  // 更新文本区域内容
}

let end;
function onEmojiSelect(emoji) {
  console.log(emoji,'@@@@@@@@@')
  // 当用户选择emoji时，将其插入到textarea中
  if (inputRef.value) {
    inputRef.value.focus();
    const start = inputRef.value.selectionStart;
    !end?end=inputRef.value.selectionEnd:'';
    const text = inputRef.value.value;
    inputRef.value.value = `${text.slice(0, start)}${emoji.i}${text.slice(end)}`;
    end++;
  }
  selectedEmoji.value = '';
}

const onChangeText = (text)=>{
  console.log(text)

}
</script>
<template>
  <div class="innner">
    <textarea ref="inputRef" @input="handleInput"></textarea>
    <Vue3EmojiPicker v-model="selectedEmoji" @select="onEmojiSelect" @update:text="onChangeText" :disabled-groups=disabledGroups :hide-search="true" :hide-group-icons="true"/>
  </div>
</template>
<style scoped lang='scss'>
.innner {
  width: 200px;
  height: 200px;
  border: 1px solid red;
}
</style>
