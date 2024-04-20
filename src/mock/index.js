import Mock from "mockjs";

//想法页列表
const ideaList = Mock.mock({
  "list|10": [
    {
      id: "@increment",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "标题",
      src: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      author: "@cname",
      like: "number1|1-100",
      label: ["a", "b"],
    },
  ],
});

Mock.mock("/api/user", "get", {
  status: 200, //请求成功状态码
  "list|10": [
    {
      id: "@increment",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "标题",
      src: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      author: "@cname",
      like: Mock.Random.integer(1, 100),
      label: ["a", "b"],
    },
  ], //模拟的请
});

// export {ideaList};
