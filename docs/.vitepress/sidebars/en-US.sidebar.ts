import type { DefaultTheme } from "vitepress";

export const getEnUSSidebar: () => DefaultTheme.Sidebar = () => {
    return {
        "/zh-CN/app/": [
            {
                text: "apiclound",
                collapsed: true,
                link: "/zh-CN/app/apiclound.md",
            }
        ],
        "/zh-CN/congshang/": [
            {
                text: "congshang 常用",
                collapsed: true,
                items: [
                    {
                        text: "congshang",
                        link: "/zh-CN/congshang/congshang.md",
                    },
                    {
                        text: "inno-setup配置",
                        link: "/zh-CN/congshang/inno-setup.md",
                    },
                ],
            }
        ],
        "/zh-CN/git_order/": [
            {
                text: "git 指令",
                collapsed: true,
                link: "/zh-CN/git_order/index.md",
            }
        ],
        "/zh-CN/javascript/": [
            {
                text: "Common Function",
                collapsed: true,
                items: [
                    {
                        text: "Dom Controls",
                        link: "/zh-CN/javascript/regularcheck.md",
                    },
                    {
                        text: "常用函数",
                        link: "/zh-CN/javascript/shared.md",
                    },
                ],
            }
        ],
        "/zh-CN/nginx/": [
            {
                text: "Nginx 指令",
                collapsed: true,
                link: "/zh-CN/nginx/index.md",
            }
        ],
    };
};
