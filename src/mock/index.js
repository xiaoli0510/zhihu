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
      like: "@integer(1, 100)",
      "label|1-2": ["@word(2,5)"],
    },
  ],
});

//主题页列表
Mock.mock("/api/topic", "get", {
  status: 200, //请求成功状态码
   info:{
    id: "@increment",
    avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
    title: "@sentence(5)",
    answer:"@interger(1,100)",
    beFollow:"@interger(1,100)",
   },
  "list|10": [
    {
      id: "@increment",
      avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      title: "@ctitle(1,10)",
      detail: "@cparagraph(1,10)",
      author: "@cname",
      "career|+1": [
        "Java",
        "Python",
        "前端",
        "产品经理",
        "UI设计师",
        "IOS",
        "安卓",
      ],
      sign: "@cparagraph(1,10)", //签名
      upvote: "@integer(1,100)",
      collect: "@integer(1,100)",
      comment: "@integer(1,100)",
      depict: "@cname",
      createTime: "@datetime('yyyy-MM-dd HH:mm')",
      province: "@province()",
      like: "@integer(1, 100)",
      "label|1-2": ["@word(1,10)"],
      "imgList|1-2": [
        "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
        "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
        "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
      ],
    },
  ],
});

//想法-个人页
Mock.mock("/api/profile/id", "get", {
  status: 200, //请求成功状态码
  body: {
    id: "@increment",
    imgBg: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg", //top img
    aa: "@province()", //ip
    author: "@cname", //姓名
    "gender|1": ["male", "female"], //性别
    sign: "@word(1,10)", //签名
    support: "@integer(1,100)", //获赞
    beFollow: "@integer(1,100)", //被关注
    follow: "@integer(1,100)", //关注
    like: "@integer(1,100)", //喜欢
    collect: "@integer(1,100)", //收藏
    "career|+1": [//职业
      "Java",
      "Python",
      "前端",
      "产品经理",
      "UI设计师",
      "IOS",
      "安卓",
    ],
    born: "@datetime('yyyy-MM-dd')",//生日
    intro:'是个逗比啊@',//简介
    "label|1-2": ["@word(2,5)"],//标签
    badge: {
      //徽章
      develop: ["diamond"],
      particular: ["level11", "level22"],
    },
    "product|10": [
      //创造
      {
        id: "@increment",
        type:1,//1回答了问题 2赞同了回答 3关注了用户 4发布了想法 5关注了问题
        name: "@cname",
        time: "@datetime('yyyy-MM-dd')",
        title: "@ctitle(1,10)",
        sentence: "@cparagraph(1,10)",
        upvote: "@integer(0,100)",
        collect: "@integer(0,100)",
        comment: "@integer(0,100)",
        "imgList|0-10": [
          {
            img: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
          },
        ],
      },
    ],
    "favour|10": [
      //赞同
      {
        id: "@increment",
        type:2,
        name: "@cname",
        time: "@datetime('yyyy-MM-dd')",
        title: "@ctitle(1,10)",
        sentence: "@cparagraph(1,10)",
        upvote: "@integer(0,100)",
        collect: "@integer(0,100)",
        comment: "@integer(0,100)",
        "imgList|0-10": [
          {
            img: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
          },
        ],
      },
    ],
    "trend|10": [
      //动态
      {
        id: "@increment",
        "type|1":[3,4,5],
        name: "@cname",
        time: "@datetime('yyyy-MM-dd')",
        title: "@ctitle(1,10)",
        sentence: "@cparagraph(1,10)",
        upvote: "@integer(0,100)",
        collect: "@integer(0,100)",
        comment: "@integer(0,100)",
        follow: "@integer(0,100)",
        "imgList|0-10": [
          {
            img: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
          },
        ],
      },
    ],
  },
});

//result页
Mock.mock("/api/result/list", "get", {
  status: 200, //请求成功状态码
  body: {
    "list|10":[
      {
        id: "@increment",
        title: "@ctitle(1,10)",
        sentence: "@cparagraph(1,10)",
        info: {
            agree: "@integer(1,100)",
            evaluate: "@integer(1,100)",
            time: "@datetime('MM-dd')"
        }
      }
    ]
  },
});

//评论list
Mock.mock("/api/comment/id", "get", {
  status: 200, //请求成功状态码
  body: {
    id: "@increment",
    "list|10": [
      {
        id: "@increment",
        "sort|1": [1, 2], //1热度 2最新
        avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
        name: "@cname",
        badge: {
          //徽章
          "develop|1": ["diamond","medal"],
          "particular|1": ["gem", "gift"],
        },
        sentence: "@cparagraph(1,10)",
        time: "@datetime('MM-dd')",
        agree: "@integer(1,100)",
        comment: "@integer(1,100)",
        isAgree:"@boolean",
        agreeCount:"@integer(1,100)",
        "subList|1-10":[
          {
            id: "@increment",
            "sort|1": [1, 2], //1热度 2最新
            avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
            name: "@cname",
            badge: {
              //徽章
              "develop|1": ["diamond","medal"],
              "particular|1": ["gem", "gift"],
            },
            sentence: "@cparagraph(1,10)",
            time: "@datetime('MM-dd')",
            agree: "@integer(1,100)",
            comment: "@integer(1,100)",
            isAgree:"@boolean",
            agreeCount:"@integer(1,99)",
            "subList|1-10":[
              
            ]
          },
        ]
      },
    ],
  },
});
//评论 根据id获取子评论
Mock.mock("/api/commentReply/id", "get", {
  status: 200, //请求成功状态码
  body: {
    id: "@increment",
    total: 10,
    "list|1-1": [
      {
        id: "@increment",
        "sort|1": [1, 2], //1热度 2最新
        avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
        name: "@cname",
        badge: {
          //徽章
          "develop|1": ["diamond","medal"],
          "particular|1": ["gem", "gift"],
        },
        sentence: "@cparagraph(1,10)",
        time: "@datetime('MM-dd')",
        agree: "@integer(1,100)",
        comment: "@integer(1,100)",
        isAgree:"@boolean",
        agreeCount:"@integer(1,100)",
      },
    ],
    "subList|1-10":[
      {
        id: "@increment",
        "sort|1": [1, 2], //1热度 2最新
        avatar: "https://randomuser.me/api/portraits/men/@integer(0,99).jpg",
        name: "@cname",
        badge: {
          //徽章
          "develop|1": ["diamond","medal"],
          "particular|1": ["gem", "gift"],
        },
        sentence: "@cparagraph(1,10)",
        time: "@datetime('MM-dd')",
        agree: "@integer(1,100)",
        comment: "@integer(1,100)",
        isAgree:"@boolean",
        agreeCount:"@integer(1,99)",
      },
    ]
  },
});
