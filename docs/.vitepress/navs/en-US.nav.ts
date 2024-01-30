import type { DefaultTheme } from "vitepress";

export const getEnUSNav: () => DefaultTheme.NavItem[] = () => {
    return [
        {
            text: "主页",
            link: "/",
        },
        {
            text: "前端",
            items: [
                {
                    text: "CSS",
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
                {
                    text: "关于",
                    link: "/about/",
                },
            ],
        },
    ];
};
