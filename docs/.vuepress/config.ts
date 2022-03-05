import { defineHopeConfig } from "vuepress-theme-hope";
import { navbar, sidebar } from "./configs";

export default defineHopeConfig({
  base: "/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_kxwb6og9m5.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "iFlyIT 博客",
      description: "前端 后端 全栈 技术文档 学习资料 学习路线图",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "iFlyIT Blog",
    //   description: "Frontend Backend Fullstack Tech docs Learning Roadmaps",
    // },
  },

  theme: "hope",

  themeConfig: {
    hostname: "https://vuepress-theme-hope-v2-demo.mrhope.site",

    author: {
      name: "Ronnie Ming",
      url: "https://blog.iflyit.top",
    },

    iconPrefix: "iconfont icon-",

    logo: "/logo.png",

    fullScreen: true,
    breadcrumb: false,

    repo: "https://github.com/scjmjy/scjmjy.github.io",

    docsDir: "docs",

    blog: {
      medias: {
        GitHub: "https://example.com",
        Wechat: "https://example.com",
      },
    },

    locales: {
      "/": {
        // navbar
        navbar: navbar.zh,

        // sidebar
        sidebar: sidebar.zh,

        footer: "iFlyIT.top 远走高飞",

        displayFooter: true,

        blog: {
          description: "前端|后端|全栈，学习路线图|速查手册|参考资源|技术文档",
        },

        metaLocales: {
          editLink: "在 GitHub 上编辑此页",
        },
      },

      /**
       * English locale config
       */
      // "/en/": {
      //   // navbar
      //   navbar: navbar.en,

      //   // sidebar
      //   sidebar: sidebar.en,

      //   footer: "iFlyIT.top",

      //   displayFooter: true,

      //   blog: {
      //     description: "一个前端开发者",
      //   },

      //   // page meta
      //   metaLocales: {
      //     editLink: "Edit this page on GitHub",
      //   },
      // },
    },

    encrypt: {
      config: {
        "/guide/encrypt.html": ["1234"],
        // "/zh/guide/encrypt.html": ["1234"],
      },
    },

    plugins: {
      blog: {
        autoExcerpt: true,
      },

      comment: {
        type: "waline",
        serverURL: "https://iflyit-blog-waline.vercel.app",
      },

      mdEnhance: { enableAll: true },

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
  },
});
