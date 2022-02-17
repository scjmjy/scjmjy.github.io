import theme from "vuepress-theme-hope";

export default theme.config({
  title: "iFlyIT 博客",
  description: "前端 后端 全栈 技术文档 学习资料 学习路线图",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "iFlyIT 博客",
      description: "前端 后端 全栈 技术文档 学习资料 学习路线图",
    },
    "/en/": {
      lang: "en-US",
      title: "iFlyIT Blog",
      description: "Frontend Backend Fullstack Tech docs Learning Roadmaps",
    },
  },

  themeConfig: {
    typescript: true,

    logo: "/logo.png",
    hostname: "https://vuepress-theme-hope-demo.mrhope.site",

    author: "Ronnie Ming",
    repo: "https://github.com/scjmjy/iflyit-blog",

    breadcrumb: false,

    nav: [
      { text: "博客主页", link: "/", icon: "home" },
      { text: "项目主页", link: "/home/", icon: "home" },
      {
        text: "领域",
        icon: "creative",
        link: "/domain/",
      },
      {
        text: "指南",
        icon: "creative",
        link: "/guide/",
      },
      {
        text: "文档",
        link: "https://vuepress-theme-hope.github.io/",
        icon: "note",
      },
    ],

    sidebar: {
      "/domain": [
        "domain/",
        {
          title: "编程基础",
          prefix: "domain/basic/",
          children: ["", {
            title: "C语言与数据结构",
            prefix: "c/",
            children: ["", "quick-start", "advanced"]
          }],
        },
        {
          title: "前端",
          prefix: "domain/frontend/",
          children: ["", {
            title: "HTML+CSS",
            prefix: "html+css/",
            children: ["", "quick-start", "advanced"]
          }],
        },
        {
          title: "后端",
          prefix: "domain/backend/",
          children: ["", {
            title: "Spring",
            prefix: "spring/",
            children: ["", "quick-start", "advanced"]
          }],
        },
        {
          title: "全栈",
          prefix: "domain/fullstack/",
          children: ["", {
            title: "路线图",
            prefix: "roadmap/",
            children: [""]
          }],
        },
      ],
      "/guide": [
        "",
        "home",
        "slides",
        "layout",
        {
          title: "指南",
          icon: "creative",
          prefix: "guide/",
          children: ["", "page", "markdown", "disable", "encrypt"],
        },
      ],
    },

    locales: {
      "/en/": {
        nav: [
          { text: "Blog Home", link: "/en/", icon: "home" },
          { text: "Project Home", link: "/en/home/", icon: "home" },
          {
            text: "Guide",
            icon: "creative",
            link: "/en/guide/",
          },
          {
            text: "Docs",
            icon: "note",
            link: "https://vuepress-theme-hope.github.io/zh/",
          },
        ],
        sidebar: {
          "/en/": [
            "",
            "home",
            "slides",
            "layout",
            {
              title: "Guide",
              icon: "creative",
              prefix: "guide/",
              children: ["", "page", "markdown", "disable", "encrypt"],
            },
          ],
        },
      },
    },

    blog: {
      intro: "/domain/intro/",
      sidebarDisplay: "mobile",
      links: {
        Zhihu: "https://zhihu.com",
        Baidu: "https://baidu.com",
        Github: "https://github.com",
      },
    },

    footer: {
      display: true,
      content: "默认页脚",
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Guide",
            short_name: "Guide",
            url: "/guide/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/assets/icon/guide-monochrome.png",
                sizes: "192x192",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
