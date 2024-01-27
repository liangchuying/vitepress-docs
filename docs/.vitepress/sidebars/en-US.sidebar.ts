import type { DefaultTheme } from "vitepress";

export const getEnUSSidebar: () => DefaultTheme.Sidebar = () => {
    return {
        "/en-US/docs/前端/": [
            {
                text: "CSS",
                collapsed: true,
                items: [
                    {
                        text: "CSS实战",
                        link: "/en-US/applet-docs.md",
                    },
                    {
                        text: "CSS文档",
                        link: "/en-US/backend-docs.md",
                    },
                    {
                        text: "CSS文档",
                        link: "/en-US/front-end-docs.md",
                    },
                ],
            },
        ],
    };
};
