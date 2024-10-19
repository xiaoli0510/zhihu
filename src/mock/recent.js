import Mock from "mockjs";

Mock.mock("/api/recent/scan", "get", {
  "todayList|1-10": [
    {
      "type|1": [1, 2], //1topic 2novel
      id: "@increment",
      title: "@ctitle(1,10)",
      author: "@cname",
      favour: "@integer(0,100)",
      comment: "@integer(0,100)",
      finishPercent: "@integer(0,100)",
      text: "@cparagraph(100,200)",
    },
  ],
  "beforeList|1-10": [
    {
      "type|1": [1, 2], //1topic 2novel
      id: "@increment",
      title: "@ctitle(1,10)",
      author: "@cname",
      favour: "@integer(0,100)",
      comment: "@integer(0,100)",
      finishPercent: "@integer(0,100)",
      text: "@cparagraph(100,200)",
    },
  ],
});
//收藏夹
Mock.mock("/api/recent/collect", "get", {
  "list|2": [
    {
      folderTitle: "@ctitle(1,10)", //收藏夹名称
      "power|1": [1, 2], //1仅自己可见 2公开
      depict: "@cparagraph(100,200)",
      default: "@boolean",
      id: "@increment",
      "subList|1-3": [
        {
          id: "@increment",
          title: "@ctitle(1,10)",
          author: "@cname",
          avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
          detail: "@cparagraph(100,200)",
          cover: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
          collectType: 1, //1我收藏的 2我关注的
          favour: "@integer(0,100)",
          comment: "@integer(0,100)",
        },
      ],
    },
  ],
});
