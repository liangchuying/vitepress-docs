// docs/.vitepress/config.mts
import { defineConfig } from "file:///E:/vue-project/vitepress-demo/node_modules/vitepress/dist/node/index.js";

// docs/.vitepress/navs/zh-CN.nav.ts
var getZhCNNav = () => {
  return [
    {
      text: "\u4E3B\u9875",
      link: "/"
    },
    {
      text: "\u6307\u5357",
      items: [
        {
          text: "apiclound",
          link: "/zh-CN/app/apiclound.md"
        },
        {
          text: "\u4ECE\u5546",
          link: "/zh-CN/congshang/congshang.md"
        },
        {
          text: "JavaScript",
          link: "/zh-CN/javascript/shared.md"
        }
      ]
    }
  ];
};

// docs/.vitepress/navs/en-US.nav.ts
var getEnUSNav = () => {
  return [
    {
      text: "\u4E3B\u9875",
      link: "/"
    },
    {
      text: "\u524D\u7AEF",
      items: [
        {
          text: "CSS\u5B9E\u6218",
          link: "/en-US/applet-docs.md"
        },
        {
          text: "CSS\u6587\u6863",
          link: "/en-US/backend-docs.md"
        },
        {
          text: "CSS\u6587\u6863",
          link: "/en-US/front-end-docs.md"
        }
      ]
    }
  ];
};

// docs/.vitepress/sidebars/zh-CN.sidebar.ts
var getZhCNSidebar = () => {
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
        link: "/zh-CN/app/apiclound.md"
      }
    ],
    "/zh-CN/congshang/": [
      {
        text: "congshang \u5E38\u7528",
        collapsed: true,
        items: [
          {
            text: "congshang",
            link: "/zh-CN/congshang/congshang.md"
          },
          {
            text: "inno-setup\u914D\u7F6E",
            link: "/zh-CN/congshang/inno-setup.md"
          }
        ]
      }
    ],
    "/zh-CN/git_order/": [
      {
        text: "git \u6307\u4EE4",
        collapsed: true,
        link: "/zh-CN/git_order/index.md"
      }
    ],
    "/zh-CN/javascript/": [
      {
        text: "Common Function",
        collapsed: true,
        items: [
          {
            text: "Dom Controls",
            link: "/zh-CN/javascript/regularcheck.md"
          },
          {
            text: "\u5E38\u7528\u51FD\u6570",
            link: "/zh-CN/javascript/shared.md"
          }
        ]
      }
    ],
    "/zh-CN/nginx/": [
      {
        text: "Nginx \u6307\u4EE4",
        collapsed: true,
        link: "/zh-CN/nginx/index.md"
      }
    ],
    "/zh-CN/flutter/": [
      {
        text: "components",
        collapsed: true,
        link: "/zh-CN/flutter/components.md"
      }
    ],
    "/zh-CN/mysql/": [
      {
        text: "SQL",
        collapsed: true,
        link: "/zh-CN/mysql/index.md"
      }
    ],
    "/zh-CN/Vue/": [
      {
        text: "vue",
        collapsed: true,
        link: "/zh-CN/Vue/vue.md"
      }
    ]
  };
};

// docs/.vitepress/sidebars/en-US.sidebar.ts
var getEnUSSidebar = () => {
  return {
    "/zh-CN/app/": [
      {
        text: "apiclound",
        collapsed: true,
        link: "/zh-CN/app/apiclound.md"
      }
    ],
    "/zh-CN/congshang/": [
      {
        text: "congshang \u5E38\u7528",
        collapsed: true,
        items: [
          {
            text: "congshang",
            link: "/zh-CN/congshang/congshang.md"
          },
          {
            text: "inno-setup\u914D\u7F6E",
            link: "/zh-CN/congshang/inno-setup.md"
          }
        ]
      }
    ],
    "/zh-CN/git_order/": [
      {
        text: "git \u6307\u4EE4",
        collapsed: true,
        link: "/zh-CN/git_order/index.md"
      }
    ],
    "/zh-CN/javascript/": [
      {
        text: "Common Function",
        collapsed: true,
        items: [
          {
            text: "Dom Controls",
            link: "/zh-CN/javascript/regularcheck.md"
          },
          {
            text: "\u5E38\u7528\u51FD\u6570",
            link: "/zh-CN/javascript/shared.md"
          }
        ]
      }
    ],
    "/zh-CN/nginx/": [
      {
        text: "Nginx \u6307\u4EE4",
        collapsed: true,
        link: "/zh-CN/nginx/index.md"
      }
    ]
  };
};

// docs/.vitepress/configs/zh-CN.config.ts
var zhCNConfig = {
  description: "Liud\u7684\u535A\u5BA2",
  title: "Liud",
  lang: "zh-CN",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    darkModeSwitchLabel: "\u4E3B\u9898",
    docFooter: {
      prev: "\u4E0A\u4E00\u7BC7",
      next: "\u4E0B\u4E00\u7BC7"
    },
    lastUpdatedText: "\u6700\u540E\u66F4\u65B0",
    nav: getZhCNNav(),
    outline: {
      level: [2, 6],
      label: "\u76EE\u5F55"
    },
    returnToTopLabel: "\u8FD4\u56DE\u9876\u90E8",
    sidebarMenuLabel: "\u83DC\u5355",
    sidebar: getZhCNSidebar(),
    socialLinks: [
      { icon: "github", link: "https://github.com/liangchuying/vitepress-docs.git" }
    ]
  }
};

// docs/.vitepress/configs/en-US.config.ts
var enUSConfig = {
  description: "Liud\u7684\u535A\u5BA2",
  title: "Liud",
  lang: "en-US",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    darkModeSwitchLabel: "Theme",
    docFooter: {
      prev: "Previous page",
      next: "Next page"
    },
    lastUpdatedText: "Last updated",
    nav: getEnUSNav(),
    outline: {
      level: [2, 6],
      label: "List"
    },
    returnToTopLabel: "Return to the top",
    sidebarMenuLabel: "Menu",
    sidebar: getEnUSSidebar(),
    socialLinks: [
      { icon: "github", link: "https://github.com/liangchuying/vitepress-docs.git" }
    ]
  }
};

// docs/.vitepress/base/docs.ts
var docsConfig = {
  base: "/vitepress-docs/",
  title: "Liud",
  description: "Liud\u7684\u535A\u5BA2",
  lang: "zh-CN",
  // lastUpdated: true, // 显示最新更新时间
  /* 语言配置 */
  locales: {
    // 若果配置了root，则双击title的时候不会返回/路径下了，只会返回在link路径下(第一次点击返回路径是en /zh)
    root: { label: "\u7B80\u4F53\u4E2D\u6587", lang: "zh-CN", link: "/zh-CN", ...zhCNConfig },
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
      ...enUSConfig
    }
  }
};

// docs/.vitepress/base/head.ts
var head = [
  ["link", { rel: "icon", href: "/vitepress-docs/vitepress-logo-mini.png" }],
  ["meta", { name: "keywords", content: "Liud\u7684\u535A\u5BA2" }]
];

// docs/.vitepress/base/theme.ts
var themeConfig = {
  // https://vitepress.dev/reference/default-theme-config
  footer: {
    message: "Released under the MIT License.",
    copyright: "Copyright \xA9 2023-present Liud"
  },
  // logo
  logo: "/vitepress-logo-mini.png",
  // logo: "https://vuejs.org/images/logo.png",
  logoLink: "/vitepress-docs/index",
  // i18n路由，false切换首页，true内容切换
  i18nRouting: true,
  // 搜索配置（二选一）
  search: {
    // 本地离线搜索
    provider: "local",
    // 多语言搜索配置
    options: {
      locales: {
        /* 默认语言 */
        "zh-CN": {
          translations: {
            button: {
              buttonText: "\u641C\u7D22",
              buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
            },
            modal: {
              displayDetails: "\u663E\u793A\u8BE6\u7EC6\u5217\u8868",
              noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
              resetButtonTitle: "\u6E05\u9664\u67E5\u8BE2\u7ED3\u679C",
              footer: {
                selectText: "\u9009\u62E9",
                navigateText: "\u5207\u6362",
                closeText: "\u5173\u95ED"
              }
            }
          }
        },
        "en-US": {
          translations: {
            button: {
              buttonText: "Search",
              buttonAriaLabel: "Search for Documents"
            },
            modal: {
              displayDetails: "Display detailed list",
              noResultsText: "Unable to find relevant results",
              resetButtonTitle: "Clear Query Results",
              footer: {
                selectText: "select",
                navigateText: "switch",
                closeText: "close"
              }
            }
          }
        }
      }
    }
  },
  editLink: {
    // 跳转编辑页面
    pattern: "https://github.com/liangchuying/vitepress-docs.git",
    text: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875\u9762"
  },
  // 社交链接
  socialLinks: [
    { icon: "github", link: "https://github.com/liangchuying/vitepress-docs.git" }
  ]
};

// docs/.vitepress/config.mts
var config_default = defineConfig({
  /* 文档配置 */
  ...docsConfig,
  /* 标头配置 */
  head,
  /* 主题配置 */
  themeConfig
  // outDir: "../dist"
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy5tdHMiLCAiZG9jcy8udml0ZXByZXNzL25hdnMvemgtQ04ubmF2LnRzIiwgImRvY3MvLnZpdGVwcmVzcy9uYXZzL2VuLVVTLm5hdi50cyIsICJkb2NzLy52aXRlcHJlc3Mvc2lkZWJhcnMvemgtQ04uc2lkZWJhci50cyIsICJkb2NzLy52aXRlcHJlc3Mvc2lkZWJhcnMvZW4tVVMuc2lkZWJhci50cyIsICJkb2NzLy52aXRlcHJlc3MvY29uZmlncy96aC1DTi5jb25maWcudHMiLCAiZG9jcy8udml0ZXByZXNzL2NvbmZpZ3MvZW4tVVMuY29uZmlnLnRzIiwgImRvY3MvLnZpdGVwcmVzcy9iYXNlL2RvY3MudHMiLCAiZG9jcy8udml0ZXByZXNzL2Jhc2UvaGVhZC50cyIsICJkb2NzLy52aXRlcHJlc3MvYmFzZS90aGVtZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHZ1ZS1wcm9qZWN0XFxcXHZpdGVwcmVzcy1kZW1vXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcdnVlLXByb2plY3RcXFxcdml0ZXByZXNzLWRlbW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3Z1ZS1wcm9qZWN0L3ZpdGVwcmVzcy1kZW1vL2RvY3MvLnZpdGVwcmVzcy9jb25maWcubXRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xyXG5pbXBvcnQgeyBkb2NzQ29uZmlnLCBoZWFkLCB0aGVtZUNvbmZpZyB9IGZyb20gXCIuL2Jhc2VcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICAgIC8qIFx1NjU4N1x1Njg2M1x1OTE0RFx1N0Y2RSAqL1xyXG4gICAgLi4uZG9jc0NvbmZpZyxcclxuICAgIC8qIFx1NjgwN1x1NTkzNFx1OTE0RFx1N0Y2RSAqL1xyXG4gICAgaGVhZCxcclxuICAgIC8qIFx1NEUzQlx1OTg5OFx1OTE0RFx1N0Y2RSAqL1xyXG4gICAgdGhlbWVDb25maWcsXHJcbiAgICAvLyBvdXREaXI6IFwiLi4vZGlzdFwiXHJcbn0pO1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHZ1ZS1wcm9qZWN0XFxcXHZpdGVwcmVzcy1kZW1vXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxuYXZzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFx2dWUtcHJvamVjdFxcXFx2aXRlcHJlc3MtZGVtb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcbmF2c1xcXFx6aC1DTi5uYXYudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3Z1ZS1wcm9qZWN0L3ZpdGVwcmVzcy1kZW1vL2RvY3MvLnZpdGVwcmVzcy9uYXZzL3poLUNOLm5hdi50c1wiO2ltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFpoQ05OYXY6ICgpID0+IERlZmF1bHRUaGVtZS5OYXZJdGVtW10gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGV4dDogXCJcdTRFM0JcdTk4NzVcIixcclxuICAgICAgICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHU2MzA3XHU1MzU3XCIsXHJcbiAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJhcGljbG91bmRcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9hcHAvYXBpY2xvdW5kLm1kXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU0RUNFXHU1NTQ2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvemgtQ04vY29uZ3NoYW5nL2NvbmdzaGFuZy5tZFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkphdmFTY3JpcHRcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9qYXZhc2NyaXB0L3NoYXJlZC5tZFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx2dWUtcHJvamVjdFxcXFx2aXRlcHJlc3MtZGVtb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcbmF2c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcdnVlLXByb2plY3RcXFxcdml0ZXByZXNzLWRlbW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXG5hdnNcXFxcZW4tVVMubmF2LnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi92dWUtcHJvamVjdC92aXRlcHJlc3MtZGVtby9kb2NzLy52aXRlcHJlc3MvbmF2cy9lbi1VUy5uYXYudHNcIjtpbXBvcnQgdHlwZSB7IERlZmF1bHRUaGVtZSB9IGZyb20gXCJ2aXRlcHJlc3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRFblVTTmF2OiAoKSA9PiBEZWZhdWx0VGhlbWUuTmF2SXRlbVtdID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwiXHU0RTNCXHU5ODc1XCIsXHJcbiAgICAgICAgICAgIGxpbms6IFwiL1wiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0ZXh0OiBcIlx1NTI0RFx1N0FFRlwiLFxyXG4gICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQ1NTXHU1QjlFXHU2MjE4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogXCIvZW4tVVMvYXBwbGV0LWRvY3MubWRcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDU1NcdTY1ODdcdTY4NjNcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9lbi1VUy9iYWNrZW5kLWRvY3MubWRcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJDU1NcdTY1ODdcdTY4NjNcIixcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi9lbi1VUy9mcm9udC1lbmQtZG9jcy5tZFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx2dWUtcHJvamVjdFxcXFx2aXRlcHJlc3MtZGVtb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcc2lkZWJhcnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHZ1ZS1wcm9qZWN0XFxcXHZpdGVwcmVzcy1kZW1vXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxzaWRlYmFyc1xcXFx6aC1DTi5zaWRlYmFyLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi92dWUtcHJvamVjdC92aXRlcHJlc3MtZGVtby9kb2NzLy52aXRlcHJlc3Mvc2lkZWJhcnMvemgtQ04uc2lkZWJhci50c1wiO2ltcG9ydCB0eXBlIHsgRGVmYXVsdFRoZW1lIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldFpoQ05TaWRlYmFyOiAoKSA9PiBEZWZhdWx0VGhlbWUuU2lkZWJhciA9ICgpID0+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gXCIvemgtQ04vZG9jcy9cdTUyNERcdTdBRUYvXCI6IFtcclxuICAgICAgICAvLyAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgdGV4dDogXCJDU1NcIixcclxuICAgICAgICAvLyAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAvLyAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNTU1x1NUI5RVx1NjIxOFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9hcHBsZXQtZG9jcy5tZFwiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNTU1x1NjU4N1x1Njg2M1wiLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9iYWNrZW5kLWRvY3MubWRcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGV4dDogXCJDU1NcdTY1ODdcdTY4NjNcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGluazogXCIvemgtQ04vZnJvbnQtZW5kLWRvY3MubWRcIixcclxuICAgICAgICAvLyAgICAgICAgICAgICB9LFxyXG4gICAgICAgIC8vICAgICAgICAgXSxcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIF0sXHJcbiAgICAgICAgXCIvemgtQ04vYXBwL1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiYXBpY2xvdW5kXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9hcHAvYXBpY2xvdW5kLm1kXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiL3poLUNOL2NvbmdzaGFuZy9cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcImNvbmdzaGFuZyBcdTVFMzhcdTc1MjhcIixcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcImNvbmdzaGFuZ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9jb25nc2hhbmcvY29uZ3NoYW5nLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiaW5uby1zZXR1cFx1OTE0RFx1N0Y2RVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9jb25nc2hhbmcvaW5uby1zZXR1cC5tZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIi96aC1DTi9naXRfb3JkZXIvXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJnaXQgXHU2MzA3XHU0RUU0XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9naXRfb3JkZXIvaW5kZXgubWRcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCIvemgtQ04vamF2YXNjcmlwdC9cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvbW1vbiBGdW5jdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiRG9tIENvbnRyb2xzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL3poLUNOL2phdmFzY3JpcHQvcmVndWxhcmNoZWNrLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiXHU1RTM4XHU3NTI4XHU1MUZEXHU2NTcwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL3poLUNOL2phdmFzY3JpcHQvc2hhcmVkLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiL3poLUNOL25naW54L1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiTmdpbnggXHU2MzA3XHU0RUU0XCIsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9uZ2lueC9pbmRleC5tZFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIi96aC1DTi9mbHV0dGVyL1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiY29tcG9uZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGluazogXCIvemgtQ04vZmx1dHRlci9jb21wb25lbnRzLm1kXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiL3poLUNOL215c3FsL1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiU1FMXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsaW5rOiBcIi96aC1DTi9teXNxbC9pbmRleC5tZFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIi96aC1DTi9WdWUvXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJ2dWVcIixcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiL3poLUNOL1Z1ZS92dWUubWRcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICB9O1xyXG59O1xyXG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkU6XFxcXHZ1ZS1wcm9qZWN0XFxcXHZpdGVwcmVzcy1kZW1vXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxzaWRlYmFyc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcdnVlLXByb2plY3RcXFxcdml0ZXByZXNzLWRlbW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXHNpZGViYXJzXFxcXGVuLVVTLnNpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3Z1ZS1wcm9qZWN0L3ZpdGVwcmVzcy1kZW1vL2RvY3MvLnZpdGVwcmVzcy9zaWRlYmFycy9lbi1VUy5zaWRlYmFyLnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0RW5VU1NpZGViYXI6ICgpID0+IERlZmF1bHRUaGVtZS5TaWRlYmFyID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBcIi96aC1DTi9hcHAvXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJhcGljbG91bmRcIixcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiL3poLUNOL2FwcC9hcGljbG91bmQubWRcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCIvemgtQ04vY29uZ3NoYW5nL1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiY29uZ3NoYW5nIFx1NUUzOFx1NzUyOFwiLFxyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiY29uZ3NoYW5nXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL3poLUNOL2NvbmdzaGFuZy9jb25nc2hhbmcubWRcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJpbm5vLXNldHVwXHU5MTREXHU3RjZFXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms6IFwiL3poLUNOL2NvbmdzaGFuZy9pbm5vLXNldHVwLm1kXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIFwiL3poLUNOL2dpdF9vcmRlci9cIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBcImdpdCBcdTYzMDdcdTRFRTRcIixcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiL3poLUNOL2dpdF9vcmRlci9pbmRleC5tZFwiLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBcIi96aC1DTi9qYXZhc2NyaXB0L1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRleHQ6IFwiQ29tbW9uIEZ1bmN0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJEb20gQ29udHJvbHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazogXCIvemgtQ04vamF2YXNjcmlwdC9yZWd1bGFyY2hlY2subWRcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJcdTVFMzhcdTc1MjhcdTUxRkRcdTY1NzBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazogXCIvemgtQ04vamF2YXNjcmlwdC9zaGFyZWQubWRcIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgXCIvemgtQ04vbmdpbngvXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGV4dDogXCJOZ2lueCBcdTYzMDdcdTRFRTRcIixcclxuICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxpbms6IFwiL3poLUNOL25naW54L2luZGV4Lm1kXCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgfTtcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx2dWUtcHJvamVjdFxcXFx2aXRlcHJlc3MtZGVtb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcdnVlLXByb2plY3RcXFxcdml0ZXByZXNzLWRlbW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ3NcXFxcemgtQ04uY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi92dWUtcHJvamVjdC92aXRlcHJlc3MtZGVtby9kb2NzLy52aXRlcHJlc3MvY29uZmlncy96aC1DTi5jb25maWcudHNcIjtpbXBvcnQgeyBEZWZhdWx0VGhlbWUsIExvY2FsZVNwZWNpZmljQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xyXG5pbXBvcnQgeyBnZXRaaENOTmF2IH0gZnJvbSBcIi4uL25hdnNcIjtcclxuaW1wb3J0IHsgZ2V0WmhDTlNpZGViYXIgfSBmcm9tIFwiLi4vc2lkZWJhcnNcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcclxuZXhwb3J0IGNvbnN0IHpoQ05Db25maWc6IExvY2FsZVNwZWNpZmljQ29uZmlnPERlZmF1bHRUaGVtZS5Db25maWc+ID0ge1xyXG4gICAgZGVzY3JpcHRpb246IFwiTGl1ZFx1NzY4NFx1NTM1QVx1NUJBMlwiLFxyXG4gICAgdGl0bGU6IFwiTGl1ZFwiLFxyXG4gICAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gICAgdGhlbWVDb25maWc6IHtcclxuICAgICAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXHJcbiAgICAgICAgZGFya01vZGVTd2l0Y2hMYWJlbDogXCJcdTRFM0JcdTk4OThcIixcclxuICAgICAgICBkb2NGb290ZXI6IHtcclxuICAgICAgICAgICAgcHJldjogXCJcdTRFMEFcdTRFMDBcdTdCQzdcIixcclxuICAgICAgICAgICAgbmV4dDogXCJcdTRFMEJcdTRFMDBcdTdCQzdcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3RVcGRhdGVkVGV4dDogXCJcdTY3MDBcdTU0MEVcdTY2RjRcdTY1QjBcIixcclxuICAgICAgICBuYXY6IGdldFpoQ05OYXYoKSxcclxuICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgIGxldmVsOiBbMiwgNl0sXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlx1NzZFRVx1NUY1NVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV0dXJuVG9Ub3BMYWJlbDogXCJcdThGRDRcdTU2REVcdTk4NzZcdTkwRThcIixcclxuICAgICAgICBzaWRlYmFyTWVudUxhYmVsOiBcIlx1ODNEQ1x1NTM1NVwiLFxyXG4gICAgICAgIHNpZGViYXI6IGdldFpoQ05TaWRlYmFyKCksXHJcbiAgICAgICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgICAgICAgeyBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9saWFuZ2NodXlpbmcvdml0ZXByZXNzLWRvY3MuZ2l0XCIgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxufTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx2dWUtcHJvamVjdFxcXFx2aXRlcHJlc3MtZGVtb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcY29uZmlnc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcdnVlLXByb2plY3RcXFxcdml0ZXByZXNzLWRlbW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGNvbmZpZ3NcXFxcZW4tVVMuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi92dWUtcHJvamVjdC92aXRlcHJlc3MtZGVtby9kb2NzLy52aXRlcHJlc3MvY29uZmlncy9lbi1VUy5jb25maWcudHNcIjtpbXBvcnQgeyBEZWZhdWx0VGhlbWUsIExvY2FsZVNwZWNpZmljQ29uZmlnIH0gZnJvbSBcInZpdGVwcmVzc1wiO1xyXG5pbXBvcnQgeyBnZXRFblVTTmF2IH0gZnJvbSBcIi4uL25hdnNcIjtcclxuaW1wb3J0IHsgZ2V0RW5VU1NpZGViYXIgfSBmcm9tIFwiLi4vc2lkZWJhcnNcIjtcclxuXHJcbi8vIGh0dHBzOi8vdml0ZXByZXNzLmRldi9yZWZlcmVuY2Uvc2l0ZS1jb25maWdcclxuZXhwb3J0IGNvbnN0IGVuVVNDb25maWc6IExvY2FsZVNwZWNpZmljQ29uZmlnPERlZmF1bHRUaGVtZS5Db25maWc+ID0ge1xyXG4gICAgZGVzY3JpcHRpb246IFwiTGl1ZFx1NzY4NFx1NTM1QVx1NUJBMlwiLFxyXG4gICAgdGl0bGU6IFwiTGl1ZFwiLFxyXG4gICAgbGFuZzogXCJlbi1VU1wiLFxyXG4gICAgdGhlbWVDb25maWc6IHtcclxuICAgICAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXHJcbiAgICAgICAgZGFya01vZGVTd2l0Y2hMYWJlbDogXCJUaGVtZVwiLFxyXG4gICAgICAgIGRvY0Zvb3Rlcjoge1xyXG4gICAgICAgICAgICBwcmV2OiBcIlByZXZpb3VzIHBhZ2VcIixcclxuICAgICAgICAgICAgbmV4dDogXCJOZXh0IHBhZ2VcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxhc3RVcGRhdGVkVGV4dDogXCJMYXN0IHVwZGF0ZWRcIixcclxuICAgICAgICBuYXY6IGdldEVuVVNOYXYoKSxcclxuICAgICAgICBvdXRsaW5lOiB7XHJcbiAgICAgICAgICAgIGxldmVsOiBbMiwgNl0sXHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkxpc3RcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldHVyblRvVG9wTGFiZWw6IFwiUmV0dXJuIHRvIHRoZSB0b3BcIixcclxuICAgICAgICBzaWRlYmFyTWVudUxhYmVsOiBcIk1lbnVcIixcclxuICAgICAgICBzaWRlYmFyOiBnZXRFblVTU2lkZWJhcigpLFxyXG4gICAgICAgIHNvY2lhbExpbmtzOiBbXHJcbiAgICAgICAgICAgIHsgaWNvbjogXCJnaXRodWJcIiwgbGluazogXCJodHRwczovL2dpdGh1Yi5jb20vbGlhbmdjaHV5aW5nL3ZpdGVwcmVzcy1kb2NzLmdpdFwiIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbn07XHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcdnVlLXByb2plY3RcXFxcdml0ZXByZXNzLWRlbW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGJhc2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHZ1ZS1wcm9qZWN0XFxcXHZpdGVwcmVzcy1kZW1vXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxiYXNlXFxcXGRvY3MudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3Z1ZS1wcm9qZWN0L3ZpdGVwcmVzcy1kZW1vL2RvY3MvLnZpdGVwcmVzcy9iYXNlL2RvY3MudHNcIjtpbXBvcnQgeyBlblVTQ29uZmlnLCB6aENOQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ3NcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBkb2NzQ29uZmlnID0ge1xyXG4gICAgYmFzZTogXCIvdml0ZXByZXNzLWRvY3MvXCIsXHJcbiAgICB0aXRsZTogXCJMaXVkXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMaXVkXHU3Njg0XHU1MzVBXHU1QkEyXCIsXHJcbiAgICBsYW5nOiBcInpoLUNOXCIsXHJcbiAgICAvLyBsYXN0VXBkYXRlZDogdHJ1ZSwgLy8gXHU2NjNFXHU3OTNBXHU2NzAwXHU2NUIwXHU2NkY0XHU2NUIwXHU2NUY2XHU5NUY0XHJcbiAgICAvKiBcdThCRURcdThBMDBcdTkxNERcdTdGNkUgKi9cclxuICAgIGxvY2FsZXM6IHtcclxuICAgICAgICAvLyBcdTgyRTVcdTY3OUNcdTkxNERcdTdGNkVcdTRFODZyb290XHVGRjBDXHU1MjE5XHU1M0NDXHU1MUZCdGl0bGVcdTc2ODRcdTY1RjZcdTUwMTlcdTRFMERcdTRGMUFcdThGRDRcdTU2REUvXHU4REVGXHU1Rjg0XHU0RTBCXHU0RTg2XHVGRjBDXHU1M0VBXHU0RjFBXHU4RkQ0XHU1NkRFXHU1NzI4bGlua1x1OERFRlx1NUY4NFx1NEUwQihcdTdCMkNcdTRFMDBcdTZCMjFcdTcwQjlcdTUxRkJcdThGRDRcdTU2REVcdThERUZcdTVGODRcdTY2MkZlbiAvemgpXHJcbiAgICAgICAgcm9vdDogeyBsYWJlbDogXCJcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODdcIiwgbGFuZzogXCJ6aC1DTlwiLCBsaW5rOiBcIi96aC1DTlwiLCAgLi4uemhDTkNvbmZpZyB9LFxyXG4gICAgICAgIC8vIFwiemgtQ05cIjoge1xyXG4gICAgICAgIC8vICAgICBsYWJlbDogXCJcdTdCODBcdTRGNTNcdTRFMkRcdTY1ODdcIixcclxuICAgICAgICAvLyAgICAgbGFuZzogXCJ6aC1DTlwiLFxyXG4gICAgICAgIC8vICAgICBsaW5rOiBcIi96aC1DTlwiLCAvLyBpbmRleCBcdTc2RjRcdTYzQTVcdThERjNcdThGNkNcdTUyMzBcdTk5OTZcdTk4NzVcclxuICAgICAgICAvLyAgICAgLi4uemhDTkNvbmZpZyxcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIFwiZW4tVVNcIjoge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJFbmdsaXNoXCIsXHJcbiAgICAgICAgICAgIGxhbmc6IFwiZW4tVVNcIixcclxuICAgICAgICAgICAgbGluazogXCIvZW4tVVNcIixcclxuICAgICAgICAgICAgLi4uZW5VU0NvbmZpZyxcclxuICAgICAgICB9LFxyXG4gICAgfSxcclxufTtcclxuXHJcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRTpcXFxcdnVlLXByb2plY3RcXFxcdml0ZXByZXNzLWRlbW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGJhc2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkU6XFxcXHZ1ZS1wcm9qZWN0XFxcXHZpdGVwcmVzcy1kZW1vXFxcXGRvY3NcXFxcLnZpdGVwcmVzc1xcXFxiYXNlXFxcXGhlYWQudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3Z1ZS1wcm9qZWN0L3ZpdGVwcmVzcy1kZW1vL2RvY3MvLnZpdGVwcmVzcy9iYXNlL2hlYWQudHNcIjtpbXBvcnQgdHlwZSB7IEhlYWRDb25maWcgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgaGVhZDogSGVhZENvbmZpZ1tdID0gW1xyXG4gICAgW1wibGlua1wiLCB7IHJlbDogXCJpY29uXCIsIGhyZWY6IFwiL3ZpdGVwcmVzcy1kb2NzL3ZpdGVwcmVzcy1sb2dvLW1pbmkucG5nXCIgfV0sXHJcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJrZXl3b3Jkc1wiLCBjb250ZW50OiBcIkxpdWRcdTc2ODRcdTUzNUFcdTVCQTJcIiB9XSxcclxuXTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFx2dWUtcHJvamVjdFxcXFx2aXRlcHJlc3MtZGVtb1xcXFxkb2NzXFxcXC52aXRlcHJlc3NcXFxcYmFzZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcdnVlLXByb2plY3RcXFxcdml0ZXByZXNzLWRlbW9cXFxcZG9jc1xcXFwudml0ZXByZXNzXFxcXGJhc2VcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L3Z1ZS1wcm9qZWN0L3ZpdGVwcmVzcy1kZW1vL2RvY3MvLnZpdGVwcmVzcy9iYXNlL3RoZW1lLnRzXCI7aW1wb3J0IHR5cGUgeyBEZWZhdWx0VGhlbWUgfSBmcm9tIFwidml0ZXByZXNzXCI7XHJcblxyXG5leHBvcnQgY29uc3QgdGhlbWVDb25maWc6IERlZmF1bHRUaGVtZS5Db25maWcgPSB7XHJcbiAgICAvLyBodHRwczovL3ZpdGVwcmVzcy5kZXYvcmVmZXJlbmNlL2RlZmF1bHQtdGhlbWUtY29uZmlnXHJcbiAgICBmb290ZXI6IHtcclxuICAgICAgICBtZXNzYWdlOiBcIlJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cIixcclxuICAgICAgICBjb3B5cmlnaHQ6IFwiQ29weXJpZ2h0IFx1MDBBOSAyMDIzLXByZXNlbnQgTGl1ZFwiLFxyXG4gICAgfSxcclxuICAgIC8vIGxvZ29cclxuICAgIGxvZ286IFwiL3ZpdGVwcmVzcy1sb2dvLW1pbmkucG5nXCIsXHJcbiAgICAvLyBsb2dvOiBcImh0dHBzOi8vdnVlanMub3JnL2ltYWdlcy9sb2dvLnBuZ1wiLFxyXG4gICAgbG9nb0xpbms6IFwiL3ZpdGVwcmVzcy1kb2NzL2luZGV4XCIsXHJcbiAgICAvLyBpMThuXHU4REVGXHU3NTMxXHVGRjBDZmFsc2VcdTUyMDdcdTYzNjJcdTk5OTZcdTk4NzVcdUZGMEN0cnVlXHU1MTg1XHU1QkI5XHU1MjA3XHU2MzYyXHJcbiAgICBpMThuUm91dGluZzogdHJ1ZSxcclxuICAgIC8vIFx1NjQxQ1x1N0QyMlx1OTE0RFx1N0Y2RVx1RkYwOFx1NEU4Q1x1OTAwOVx1NEUwMFx1RkYwOVxyXG4gICAgc2VhcmNoOiB7XHJcbiAgICAgICAgLy8gXHU2NzJDXHU1NzMwXHU3OUJCXHU3RUJGXHU2NDFDXHU3RDIyXHJcbiAgICAgICAgcHJvdmlkZXI6IFwibG9jYWxcIixcclxuICAgICAgICAvLyBcdTU5MUFcdThCRURcdThBMDBcdTY0MUNcdTdEMjJcdTkxNERcdTdGNkVcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgIGxvY2FsZXM6IHtcclxuICAgICAgICAgICAgICAgIC8qIFx1OUVEOFx1OEJBNFx1OEJFRFx1OEEwMCAqL1xyXG4gICAgICAgICAgICAgICAgXCJ6aC1DTlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJcdTY0MUNcdTdEMjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXlEZXRhaWxzOiBcIlx1NjYzRVx1NzkzQVx1OEJFNlx1N0VDNlx1NTIxN1x1ODg2OFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogXCJcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6IFwiXHU2RTA1XHU5NjY0XHU2N0U1XHU4QkUyXHU3RUQzXHU2NzlDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUZXh0OiBcIlx1OTAwOVx1NjJFOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hdmlnYXRlVGV4dDogXCJcdTUyMDdcdTYzNjJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbG9zZVRleHQ6IFwiXHU1MTczXHU5NUVEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJlbi1VU1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNsYXRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uVGV4dDogXCJTZWFyY2hcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJTZWFyY2ggZm9yIERvY3VtZW50c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheURldGFpbHM6IFwiRGlzcGxheSBkZXRhaWxlZCBsaXN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiBcIlVuYWJsZSB0byBmaW5kIHJlbGV2YW50IHJlc3VsdHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc2V0QnV0dG9uVGl0bGU6IFwiQ2xlYXIgUXVlcnkgUmVzdWx0c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJzZWxlY3RcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6IFwic3dpdGNoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VUZXh0OiBcImNsb3NlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgZWRpdExpbms6IHsgLy8gXHU4REYzXHU4RjZDXHU3RjE2XHU4RjkxXHU5ODc1XHU5NzYyXHJcbiAgICAgICAgcGF0dGVybjogXCJodHRwczovL2dpdGh1Yi5jb20vbGlhbmdjaHV5aW5nL3ZpdGVwcmVzcy1kb2NzLmdpdFwiLFxyXG4gICAgICAgIHRleHQ6IFwiXHU1NzI4IEdpdEh1YiBcdTRFMEFcdTdGMTZcdThGOTFcdTZCNjRcdTk4NzVcdTk3NjJcIlxyXG4gICAgfSxcclxuICAgIC8vIFx1NzkzRVx1NEVBNFx1OTRGRVx1NjNBNVxyXG4gICAgc29jaWFsTGlua3M6IFtcclxuICAgICAgICB7IGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL2xpYW5nY2h1eWluZy92aXRlcHJlc3MtZG9jcy5naXRcIiB9LFxyXG4gICAgXSxcclxufTtcclxuXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlQsU0FBUyxvQkFBb0I7OztBQ0VqVixJQUFNLGFBQTJDLE1BQU07QUFDMUQsU0FBTztBQUFBLElBQ0g7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0ksTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0g7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDVjtBQUFBLE1BQ0o7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKOzs7QUN4Qk8sSUFBTSxhQUEyQyxNQUFNO0FBQzFELFNBQU87QUFBQSxJQUNIO0FBQUEsTUFDSSxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNJLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxRQUNIO0FBQUEsVUFDSSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0ksTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1Y7QUFBQSxNQUNKO0FB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
