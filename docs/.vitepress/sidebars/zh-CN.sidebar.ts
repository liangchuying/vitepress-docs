import type { DefaultTheme } from "vitepress";

export const getZhCNSidebar: () => DefaultTheme.Sidebar = () => {
    return {
        // "/zh-CN/docs/前端/": [
        //     {
        //         text: "CSS",
        //         collapsed: true,
        //         items: [
        //             {
        //                 text: "CSS实战",
        //                 link: "/zh-CN/applet-docs.md",
        //             },
        //             {
        //                 text: "CSS文档",
        //                 link: "/zh-CN/backend-docs.md",
        //             },
        //             {
        //                 text: "CSS文档",
        //                 link: "/zh-CN/front-end-docs.md",
        //             },
        //         ],
        //     }
        // ],
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
        "/zh-CN/flutter/": [
            {
                
                text: "Flutter",
                collapsed: true,
                
                items: [
                    {
                        text: "components",
                        link: "/zh-CN/flutter/components.md",
                    },
                    {
                        text: "basic",
                        link: "/zh-CN/flutter/basic.md",
                    },
                    {
                        text: "build.gradle",
                        link: "/zh-CN/flutter/build.gradle.md",
                    },
                    {
                        text: "install",
                        link: "/zh-CN/flutter/install.md",
                    },
                    {
                        text: "pubspec.yaml",
                        link: "/zh-CN/flutter/pubspec.yaml.md",
                    },
                    {
                        text: "dart 语法",
                        link: "/zh-CN/flutter/dart.md",
                    },
                ],
            }
        ],
        "/zh-CN/mysql/": [
            {
                text: "SQL",
                collapsed: true,
                link: "/zh-CN/mysql/index.md",
            }
        ],
        "/zh-CN/Vue/": [
            {
                text: "vue",
                collapsed: true,
                link: "/zh-CN/Vue/vue.md",
            }
        ],
    };
};
