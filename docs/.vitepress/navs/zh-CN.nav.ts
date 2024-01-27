import type { DefaultTheme } from "vitepress";

export const getZhCNNav: () => DefaultTheme.NavItem[] = () => {
    return [
        {
            text: "主页",
            link: "/",
        },
        {
            text: "前端",
            items: [
                {
                    icon: "reco-message",
                    text: "CSS",
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
                },
                { icon: "reco-account", text: "关于", link: "/about/" },
            ],
        },
    ];
};
