import { defineConfig } from "vitepress"
import { zhCmnHansCN } from "./zh-cmn-Hans-CN/index.ts"
import { shared } from "./shared.ts"
import { pwa } from "./pwa"
import { withPwa } from "@vite-pwa/vitepress"

export default withPwa(
  defineConfig({
    locales: {
      // 'zh-cmn-Hans-CN'
      root: {
        label: "简体中文（中国大陆）",
        lang: "zh-cmn-Hans-CN",
        ...zhCmnHansCN,
      },
      // 'en': {
      //   label: 'English',
      //   lang: 'en',
      // }
    },
    pwa: pwa,
    ...shared,
  })
)
