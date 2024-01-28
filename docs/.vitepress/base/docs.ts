import { enUSConfig, zhCNConfig } from "../configs";

export const docsConfig = {
    base: "/Luid/",
    title: "梦和远方",
    description: "梦和远方的博客",
    lang: "zh-CN",
    // lastUpdated: true, // 显示最新更新时间
    /* 语言配置 */
    locales: {
        // 若果配置了root，则双击title的时候不会返回/路径下了，只会返回在link路径下(第一次点击返回路径是en /zh)
        root: { label: "简体中文", lang: "zh-CN", link: "/zh-CN",  ...zhCNConfig },
        // "zh-CN": {
        //     label: "简体中文",
        //     lang: "zh-CN",
        //     link: "/zh-CN", // index 直接跳转到首页
        //     ...zhCNConfig,
        // },
        "en-US": {
            label: "English",
            lang: "en-US",
            link: "/en-US",
            ...enUSConfig,
        },
    },
};

