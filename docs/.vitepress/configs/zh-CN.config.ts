import { DefaultTheme, LocaleSpecificConfig } from "vitepress";
import { getZhCNNav } from "../navs";
import { getZhCNSidebar } from "../sidebars";

// https://vitepress.dev/reference/site-config
export const zhCNConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    description: "梦和远方的博客",
    title: "梦和远方",
    lang: "zh-CN",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        darkModeSwitchLabel: "主题",
        docFooter: {
            prev: "上一篇",
            next: "下一篇",
        },
        lastUpdatedText: "最后更新",
        nav: getZhCNNav(),
        outline: {
            level: [2, 6],
            label: "目录",
        },
        returnToTopLabel: "返回顶部",
        sidebarMenuLabel: "菜单",
        sidebar: getZhCNSidebar(),
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
        ],
    },
};
