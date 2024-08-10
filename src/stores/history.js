import {defineStore} from 'pinia';

export const useHistoryStore = defineStore('history',{
    state:()=>({
        undoStack:[],//可撤销栈
        redoStack:[],//可重做栈
    }),
    getters:{
        canUndo:state=>state.undoStack.length>0,
        canRedo:state=>state.redoStack.length>0,
    },
    actions:{
        add(payload){
            this.undoStack.push(payload);
        },
        undo(){
            if(this.undoStack.length===0) return;
            const last = this.undoStack.pop();
            this.redoStack.push(last);
        },
        redo(){
            if(this.redoStack.length===0) return;
            const first = this.redoStack.shift();
            this.undoStack.push(first);
        },
        peek(){
            return this.undoStack[this.undoStack.length-1];
        }
    }
})