import { defineConfig } from "vitepress";
import { docsConfig, head, themeConfig } from "./base";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    /* 文档配置 */
    ...docsConfig,
    /* 标头配置 */
    head,
    /* 主题配置 */
    themeConfig,
    // outDir: "../dist"
});
