import Mock from "mockjs";

//历史搜索列表
Mock.mock("/api/search/record", "get", {
  "list|10": [
    {
      id: "@increment",
      word: "@ctitle(1,10)",
    },
  ],
});

//猜你想搜列表
Mock.mock("/api/search/guess", "get", {
  "list|10": [
    {
      id: "@increment",
      word: "@ctitle(1,10)",
      "type|1": [1,2,3],//1热 2新
    },
  ],
});
//搜索发现列表
Mock.mock("/api/search/hot", "get", {
  "list|20": [
    {
      id: "@increment",
      word: "@ctitle(1,20)",
      "type|1": [1,3],//1热 
      "follow":"@integer(1,100)",
    },
  ],
});