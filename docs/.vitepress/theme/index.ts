import { h } from "vue"

import DefaultTheme from "vitepress/theme"
import type { Theme } from "vitepress"

const customTheme: Theme = {
  extends: DefaultTheme,
  enhanceApp() {},
  Layout() {
    return h(DefaultTheme.Layout, null, {})
  },
}

export default customTheme
