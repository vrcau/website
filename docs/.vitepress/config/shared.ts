import { defineConfig } from "vitepress"

export const shared = defineConfig({
  title: "VRChat 航空航天大学",
  description: "一个兴趣使然的 VRChat 航空航天社团。",

  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,

  themeConfig: {
    socialLinks: [{ icon: "github", link: "https://github.com/vrcau" }],
    search: {
      provider: "local",
    },
  },
})
