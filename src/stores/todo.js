//浮窗-在看列表
import { defineStore } from "pinia";

export const useTodoStore = defineStore("floatWatch", {
  state: () => ({
    watchList: [],
    total: 0,
  }),
  actions: {
    initList(watchList) {
      this.watchList = watchList;
      this.total = watchList.length;
    },
    //判断是否在todo在看列表中
    isInList (id) {
      const length = this.watchList.length;
      for (let i = 0; i < length; i++) {
        if (this.watchList[i].id === id) {
          return true;
        }
      }
      return false;
    },
    add(item) {
      const { id, avatar, title, sentence } = item;
      this.watchList.push({
        id,
        avatar,
        title,
        sentence,
      });
      this.total++;
    },
    delete(id) {
      const length = this.watchList.length;
      for (let i = 0; i < length; i++) {
        if (this.watchList[i].id === id) {
          this.watchList.splice(i, 1);
          this.total--;
          break;
        }
      }
    },
  },
});
