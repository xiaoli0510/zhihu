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
      id: "@increment",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "标题1",
      cup: ["https://randomuser.me/api/portraits/men/@integer(0,99).jpg"],
      author: "@cname",
      career: "@cname",
      depict: "@cname",
      like: Mock.Random.integer(1, 100),
      label: ["a", "b"],
      imgs: [
        "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
        "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
        "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      ],
    },
  ], 
});
