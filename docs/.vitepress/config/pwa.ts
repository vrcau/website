import type { PwaOptions } from "@vite-pwa/vitepress"
import Icons from "../../public/icons/icons.json"

export const pwa: Partial<PwaOptions> = {
  strategies: "generateSW",
  registerType: "prompt",
  workbox: {
    globPatterns: ["**/*.{js,css,html,ico,png,svg,jpg,mp4,woff2}"],
  },
  experimental: {
    includeAllowlist: true,
  },
  manifest: {
    name: "VRChat 航空航天大学",
    short_name: "VRChat 航空航天大学",
    description: "VRChat 航空航天大学",
    theme_color: "#df3a27",
    display: "standalone",
    display_override: ["window-controls-overlay", "standalone"],
    lang: "zh",
    start_url: "/",
    dir: "ltr",
    orientation: "natural",
    handle_links: "preferred",
    edge_side_panel: {
      preferred_width: 480,
    },
    launch_handler: {
      client_mode: ["navigate-existing", "auto"],
    },
    icons: Icons,
  },
}
