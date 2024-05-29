// import {createStore} from 'vuex';

// store.js
import { reactive } from 'vue'

export const store = reactive({
    isComment: false,
    showComment(){
        this.isComment=true;
    }
})
