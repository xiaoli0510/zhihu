import Mock from "mockjs";

//想法页列表
Mock.mock("/api/idea", "get", {
  "list|10": [
    {
      id: "@increment",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "@sentence(5)",
      src: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      author: "@cname",
      like:"@integer(1, 100)",
      "label|1-2": ["@word(2,5)"],
    },
  ], 
});

//想法详情页
Mock.mock("/api/idea/id", "get", {
  status: 200, //请求成功状态码
  "list|10": [
    {
      "id": "@increment",
      "avatar": "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      "title": "@ctitle(1,10)",
      "detail":"@cparagraph(1,10)",
      "author": "@cname",
      "career|+1": [
        "Java",
        "Python",
        "前端",
        "产品经理",
        "UI设计师",
        "IOS",
        "安卓",
      ],
      "upvote":"@integer(1,100)",
      "collect":"@integer(1,100)",
      "comment":"@integer(1,100)",
      "depict": "@cname",
      "createTime":"@datetime('yyyy-MM-dd HH:mm')",
      "province":"@province()",
      "like": "@integer(1, 100)",
      "label|1-2": ["@word(1,10)"],
      "imgList|1-2":["https://randomuser.me/api/portraits/men/@integer(0,99).jpg","https://randomuser.me/api/portraits/men/@integer(0,99).jpg","https://randomuser.me/api/portraits/men/@integer(0,99).jpg"]
    },
  ], 
});
