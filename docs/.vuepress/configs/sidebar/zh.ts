import type { HopeThemeSidebarConfig } from "vuepress-theme-hope";

export const zh: HopeThemeSidebarConfig = {
    "/domain/": [
        "README.md",
        {
            text: "大前端",
            prefix: "big-fe/",
            children: ["README.md", "roadmap.md"],
        },
        {
            text: "编程基础",
            prefix: "basic/",
            children: [
                "README.md",
                {
                    text: "C语言与数据结构",
                    prefix: "c/",
                    collapsable: true,
                    children: ["README.md", "quick-start", "advanced"],
                },
                {
                    text: "算法",
                    prefix: "algorithm/",
                    collapsable: true,
                    children: ["README.md", "quick-start", "advanced"],
                },
            ],
        },
        {
            text: "前端",
            prefix: "frontend/",
            children: [
                "README.md",
                {
                    text: "HTML+CSS",
                    prefix: "html+css/",
                    collapsable: true,
                    children: ["README.md", "quick-start", "advanced"],
                },
            ],
        },
        {
            text: "后端",
            prefix: "backend/",
            children: [
                "README.md",
                {
                    text: "Node.js",
                    prefix: "Node.js/",
                    collapsable: true,
                    children: ["README.md", "quick-start", "advanced", "cheatsheet"],
                },
            ],
        },
        {
            text: "全栈",
            prefix: "fullstack/",
            children: [
                "README.md",
                {
                    text: "路线图",
                    prefix: "roadmap/",
                    collapsable: true,
                    children: ["README.md"],
                },
            ],
        },
    ],
};
