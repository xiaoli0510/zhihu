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
//搜索结果页 综合tab 大家常搜
Mock.mock("/api/search/common", "get", {
  "list|20": [
    {
      id: "@increment",
      word: "@ctitle(1,20)"
    },
  ],
});
//搜索结果页 用户tab 
Mock.mock("/api/search/user", "get", {
  "list|20": [
    {
      id: "@increment",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "@ctitle(1,10)",
      sentence: "@cparagraph(1,10)",
      beFollow: "@integer(1,100)", //被关注
      product: "@integer(1,100)",//创作
      support: "@integer(1,100)", //赞同
      time:"@integer(1,30)",//更新时间
      answer: "@integer(1,100)",//回答
    },
  ],
});