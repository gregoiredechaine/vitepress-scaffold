import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar'

const vitePressOptions = {
  // VitePress's Options Here:
  title: "VitePress Scaffold",
  description: "A VitePress Scaffold Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }  
};

const vitePressSidebarOptions = {
  // VitePress Sidebar's Options Here:
  documentRootPath: '/',
  collapsed: false,
  capitalizeFirst: true
};

// https://vitepress.dev/reference/site-config replaced with auto Sidebar Script
export default defineConfig(
  withSidebar(vitePressOptions, vitePressSidebarOptions)
);
