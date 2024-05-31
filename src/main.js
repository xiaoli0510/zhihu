import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store/index.js'
import 'amfe-flexible';
import '@/mock/index'
import '@/mock/search.js'

const app = createApp(App)

app.use(router)
// app.use(store)

app.mount('#app')
