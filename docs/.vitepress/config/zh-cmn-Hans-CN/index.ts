import { defineConfig } from "vitepress"

export const zhCmnHansCN = defineConfig({
  title: "VRChat 航空航天大学",
  description: "一个兴趣使然的 VRChat 航空航天社团。",

  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },

  themeConfig: {
    nav: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "NOTAMs",
        link: "/notams/",
      },
      {
        text: "项目",
        items: [
          {
            text: "所有项目",
            link: "/projects/",
          },
          {
            text: "机模",
            items: [
              {
                text: "V320 - Sacc",
                link: "/projects/vau320-sacc/",
              },
              {
                text: "V320 - FDMi",
                link: "/projects/vau320-fdmi/",
              },
              {
                text: "初教 6（CJ6）",
                link: "/projects/cj6/",
              },
            ],
          },
          {
            text: "基础设施",
            items: [
              {
                text: "FlatRadar",
                link: "/projects/flatradar/",
              },
            ],
          },
        ],
      },
      {
        text: "AIS",
        link: "https://ais.yuxiaviation.com/",
      },
    ],

    editLink: {
      pattern: "https://github.com/vrcau/website/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },

    footer: {
      message: "基于 MIT 与 CC BY-NC-SA 4.0 许可发布",
      copyright: `版权所有 © 2020-${new Date().getFullYear()} VRChat 航空航天大学`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    search: {
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            // @ts-expect-error
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            displayDetails: "显示详细",
            backButtonTitle: "返回",
            footer: {
              selectText: "选择",
              navigateText: "切换",
              closeText: "以关闭",
            },
          },
        },
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
})
