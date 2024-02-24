import { h } from "vue"

import DefaultTheme from "vitepress/theme"
import type { Theme } from "vitepress"

import RegisterSW from "./components/RegisterSW.vue"
import NotamsHome from "./components/NotamsHome.vue"
import SiteHome from "./components/SiteHome.vue"

import "./css/page.less"

const customTheme: Theme = {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("NotamsHome", NotamsHome)
    app.component("SiteHome", SiteHome)
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(RegisterSW),
    })
  },
}

export default customTheme
