import { defineConfig } from "vitepress"

export const zhCmnHansCN = defineConfig({
  title: "VRChat Aerospace University",
  description: "TODO",

  themeConfig: {
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "NOTAMs",
        link: "/notams/",
      },
      {
        text: "Projects",
        link: "/projects/",
      },
      {
        text: "AIS",
        link: "https://ais.yuxiaviation.com/",
      },
    ],

    editLink: {
      pattern: "https://github.com/vrcau/website/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT and CC BY-NC-SA 4.0.",
      copyright: `Copyright © 2020-${new Date().getFullYear()} VRChat Aerospace University`,
    },
  },
})
