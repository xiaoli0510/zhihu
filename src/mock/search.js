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
      "type|1": [1, 2, 3], //1热 2新
    },
  ],
});
//搜索发现列表
Mock.mock("/api/search/hot", "get", {
  "list|20": [
    {
      id: "@increment",
      word: "@ctitle(1,20)",
      "type|1": [1, 3], //1热
      follow: "@integer(1,100)",
    },
  ],
});
//搜索结果页 综合tab 大家常搜
Mock.mock("/api/search/common", "get", {
  "list|20": [
    {
      id: "@increment",
      word: "@ctitle(1,20)",
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
      product: "@integer(1,100)", //创作
      support: "@integer(1,100)", //赞同
      time: "@integer(1,30)", //更新时间
      answer: "@integer(1,100)", //回答
    },
  ],
});
//搜索结果页 小说tab
Mock.mock("/api/search/novel", "get", {
  "list|20": [
    {
      id: "@increment",
      title: "@ctitle(1,10)",
      sentence: "@cparagraph(1,10)",
      "type|1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      feature: "@ctitle(1,3)",
      "statu|1": [0, 1], //0未完结 1已完结
      info: {
        agree: "@integer(0,100)",
        evaluate: "@integer(0,100)",
      },
    },
  ],
});
//搜索结果页 小说详情页
Mock.mock("/api/search/novel/detail", "get", {
  "list|2": [
    {
      id: "@increment",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      name: "@cname",
      title: "@ctitle(1,10)",
      sentence: "@cparagraph(100,200)",
      "type|1": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
      "feature|1-3": ["@ctitle(1,3)"],
      "statu|1": [0, 1], //0未完结 1已完结
      upvote: "@integer(0,100)",
      comment: "@integer(0,100)",
      cover: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      score: "@integer(0,10)",
      view: "@integer(0,10)",
      price: "@integer(0,10)",
      isVip: "@boolean",
      isFollow: "@boolean",
      isHas: "@boolean",
    },
  ],
});
//搜索结果页 小说-目录
Mock.mock("/api/novel/catalog", "get", {
  total: "@integer(0,100)",
  "classic|2": ["@ctitle(1,3)"],
  "list|7": [
    {
      id: "@increment",
      title: "@ctitle(1,10)",
      sentence: "@cparagraph(100,200)",
      totalTxt: "@integer(0,100)",
      comment: "@integer(0,100)",
      section: "@integer(0,100)",
    },
  ],
});
//搜索结果页 小说-推荐
Mock.mock("/api/novel/recommend", "get", {
  total: "@integer(0,100)",
  "classic|2": ["@ctitle(1,3)"],
  "list|7": [
    {
      id: "@increment",
      cover: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "@ctitle(1,20)",
      feature: "@ctitle(2,7)",
    },
  ],
});
//搜索结果页 浮窗-在看
Mock.mock("/api/todo", "get", {
  "list|2": [
    {
      id: "@increment",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "@ctitle(1,10)",
      sentence: "@cparagraph(1,3)",
    },
  ],
});
//订单支付页
Mock.mock("/api/pay", "get", {
  "list|1": [
    {
      id: "@increment",
      title: "@ctitle(1,10)",
      price: "@integer(0,100)",
      zhihuCurreny: "@integer(0,100)",
      "coupons|0-4": [
        {
          id: "@increment",
          code: "@ctitle(1,10)",
          "available|1": [0, 1], //0可用 1不可用
          condition: "无门槛\n最多优惠12元",
          reason: "",
          value: "@integer(100,1000)",
          name: "优惠券名称",
          startAt: 1489104000,
          endAt: 1514592000,
          valueDesc: "@increment(1,10)",
          unitDesc: "元",
        },
      ],
      cover: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
    },
  ],
});
//支付协议页
Mock.mock("/api/pay/protocol", "get", {
  "list|1": [
    {
      id: "@increment",
      title: "支付协议",
      sentence: "@cparagraph(100,200)",
    },
  ],
});
//充值须知页
Mock.mock("/api/recharge/protocol", "get", {
  "list|1": [
    {
      id: "@increment",
      title: "充值须知",
      sentence: "@cparagraph(100,200)",
    },
  ],
});

//subject页
Mock.mock("/api/subject", "get", {
  "list|1": [
    {
      isFollow: "@boolean",
      sentence: "@cparagraph(100,200)",
      browseCount: "@integer(0,100)",
      discussCount: "@integer(0,100)",
      brief: "@cparagraph(10,50)",
      pinyin: "@ctitle(1,10)",
      english: "@word(1,5)",
      explain: "@cparagraph(100,200)",
    },
  ],
});

//subject页 讨论
Mock.mock("/api/subject/discuss", "get", {
  "list|4-10": [
    {
      "type|1": [1, 2, 3], //1精华 2最热 2最新"
      id: "@increment",
      name: "@cname",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "@ctitle(1,10)",
      brief: "@cparagraph(10,50)",
      sentence: "@cparagraph(100,200)",
      agreeCount: "@integer(0,100)",
      collect: "@integer(0,100)",
      comment: "@integer(0,100)",
      "cover|2-4": [
        "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      ],
      time: "@datetime('yyyy-MM-dd')",
    },
  ],
});

//subject页 想法
Mock.mock("/api/subject/opinion", "get", {
  "list|4-10": [
    {
      "type|1": [1, 2], //1最热 2最新
      id: "@increment",
      author: "@cname",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "@ctitle(1,10)",
      brief: "@cparagraph(10,50)",
      agreeCount: "@integer(0,100)",
      src: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
    },
  ],
});
//subject页 待回答
Mock.mock("/api/subject/waitAnswer", "get", {
  "list|4-10": [
    {
      "type|1": [1, 2], //1最新 2最热
      id: "@increment",
      author: "@cname",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "@ctitle(1,10)",
      agreeCount: "@integer(0,100)",
      beFollow: "@integer(1,100)", //被关注
      answer: "@integer(1,100)", //回答
      src: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
    },
  ],
});

//waitAnswerDetail页
Mock.mock("/api/answer/detail", "get", {
  "list|1": [
    {
      title: "@ctitle(1,10)",
      "word|1-4": ["@ctitle(1,3)"],
      isFollow: "@boolean",
      sentence: "@cparagraph(100,200)",
      followCount: "@integer(0,100)",
      browseCount: "@integer(0,100)",
      commentCount: "@integer(0,100)",
      "subList|4-10": [
        {
          "type|1": [1, 2], //1默认 2最新
          id: "@increment",
          name: "@cname",
          avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
          title: "@ctitle(1,10)",
          agreeCount: "@integer(0,100)",
          likeCount: "@integer(0,100)",
          commentCount: "@integer(0,100)",
          "badge|1-3": {0:"diamond",1: "gift",2:"gem"}
        },
      ],
    },
  ],
});
