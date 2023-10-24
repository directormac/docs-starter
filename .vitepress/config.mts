import { DefaultTheme, defineConfig } from "vitepress";
import markdownItTaskLists from "markdown-it-task-lists";
import markdownItTextualUml from "markdown-it-textual-uml";

const sidebarApp = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "Docs",
      collapsed: false,
      base: "/app",
      items: [
        { text: "Introduction", link: "/" },
        { text: "What is this", link: "/what-is" },
      ],
    },
  ];
};

const sidebarGuides = (): DefaultTheme.SidebarItem[] => {
  return [
    {
      text: "Guides",
      base: "/guides",
      items: [
        { text: "Introduction", link: "/index" },
        { text: "Project Structure", link: "/project" },
      ],
    },
  ];
};

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Community Kit",
  description: "A Community Manager Svelte-Kit Pocketbase Project",
  assetsDir: "static",
  markdown: {
    config: (md) => {
      md.use(markdownItTaskLists);
      md.use(markdownItTextualUml);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Docs", link: "/app/index" },
      {
        text: "Guides",
        items: [
          { text: "Introduction", link: "/guides/index" },
          { text: "Project Structure", link: "/guides/index" },
        ],
      },
      { text: "About", link: "/about" },
    ],
    sidebar: {
      "/app": sidebarApp(),
      "/guides": sidebarGuides(),
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/directormac",
      },
    ],
    footer: {
      message: `Made with ❤️ by <a href="https://github.com/directormac">Artifex</>`,
      copyright: "Copyright © 2023-present Directormac",
    },
    search: {
      provider: "local",
    },
  },
});
