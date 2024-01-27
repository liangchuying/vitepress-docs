import type { DefaultTheme } from "vitepress";

export const getZhCNSidebar: () => DefaultTheme.Sidebar = () => {
    return {
        "/zh-CN/docs/前端/": [
            {
                text: "CSS",
                collapsed: true,
                items: [
                    {
                        text: "CSS实战",
                        link: "/zh-CN/applet-docs.md",
                    },
                    {
                        text: "CSS文档",
                        link: "/zh-CN/backend-docs.md",
                    },
                    {
                        text: "CSS文档",
                        link: "/zh-CN/front-end-docs.md",
                    },
                ],
            }
        ]
    };
};
