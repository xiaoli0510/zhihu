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
