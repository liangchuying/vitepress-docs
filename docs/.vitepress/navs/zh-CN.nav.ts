import type { DefaultTheme } from "vitepress";

export const getZhCNNav: () => DefaultTheme.NavItem[] = () => {
    return [
        {
            text: "主页",
            link: "/",
        },
        {
            text: "指南",
            items: [
                {
                    icon: "reco-message",
                    text: "CSS",
                    items: [
                        {
                            text: "apiclound",
                            link: "/zh-CN/app/apiclound.md",
                        },
                        {
                            text: "congshang",
                            link: "/zh-CN/congshang/congshang.md",
                        },
                        {
                            text: "JavaScript basic",
                            link: "/zh-CN/javascript/shared.md",
                        },
                    ],
                },
                // { icon: "reco-account", text: "关于", link: "/about/" },
            ],
        },
    ];
};
