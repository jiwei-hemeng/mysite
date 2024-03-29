import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "myBlob",
  description: "个人网站",
  base: "/mysite/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],
    search: {
      provider: "local",
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/jiwei-hemeng/summary/" },
    ],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2024-present 诗和远方",
    },
  },
});
