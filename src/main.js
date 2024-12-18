import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import {createPinia } from 'pinia';
import 'amfe-flexible';
import '@/mock/index'
import '@/mock/search.js'
import '@/mock/recent.js'
import utils from '@/utils/common.js';
import drag from 'v-drag'

const pinia = createPinia();
const app = createApp(App)
app.use(pinia);

app.use(router)
app.use(drag,{})
app.config.globalProperties.$utils = utils;
// app.use(store)

app.mount('#app')
