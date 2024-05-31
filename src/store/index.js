// import {createStore} from 'vuex';

// store.js
import { reactive } from 'vue'

export const store = reactive({
    isComment: false,
    commentId:0,
    showComment(id){
        this.isComment=true;
        this.commentId = id;
    },
})
