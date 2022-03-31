import { defineUserConfig } from 'vuepress'
import type { MixThemeConfig } from 'vuepress-theme-mix/lib/node'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<MixThemeConfig>({
  // Site Config
  base: '/',

  head: [['script', {}, `
    window._mfq = window._mfq || [];
    (function() {
      var mf = document.createElement("script");
      mf.type = "text/javascript"; mf.defer = true;
      mf.src = "//cdn.mouseflow.com/projects/7c7a81fc-0346-4408-8125-b1b1e6249fa8.js";
      document.getElementsByTagName("body")[0].appendChild(mf);
    })();
  `]],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'NEAR and Far from Any Coding', // for broswer tabs
      description: 'An intro to NEAR for non-programmers',
    }
  },

  // Theme Config
  theme: 'vuepress-theme-mix',
  themeConfig: {
    logo: '/images/logos/near_icon.svg',
    title: 'NEAR and Far from Any Coding', // for navbar
    docsRepo: 'gavinliu6/vuepress-theme-mix',
    docsDir: 'docs',
    editLink: true,
    lastUpdated: true,

    locales: {
      '/': {
        navbar: navbar.en,
        sidebar: sidebar.en,
      }
    },

    themePlugins: {
      git: isProd,
    },
  },

  // Directory Config
  dest: 'public',

  // plugins: [
  //   [
  //     '@vuepress/plugin-docsearch',
  //     {
  //       apiKey: 'fba2ba8ba151f7d5bb1adf1e5b4b4f39',
  //       indexName: 'vuepress-theme-mix',
  //       locales: {
  //         '/': {
  //           placeholder: 'Search Course',
  //         }
  //       },
  //     },
  //   ],
  // ]
 
})