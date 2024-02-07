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
                    text: "apiclound",
                    link: "/zh-CN/app/apiclound.md",
                },
                {
                    text: "从商",
                    link: "/zh-CN/congshang/congshang.md",
                },
                {
                    text: "JavaScript",
                    link: "/zh-CN/javascript/shared.md",
                },
            ],
        },
    ];
};
