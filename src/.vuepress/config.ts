import { defineUserConfig } from 'vuepress'
import type { MixThemeConfig } from 'vuepress-theme-mix/lib/node'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<MixThemeConfig>({
  // Site Config
  base: '/',

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

  // Plugins Config
  // plugins: [
  //   [
  //     '@vuepress/plugin-docsearch',
  //     {
  //       apiKey: 'fba2ba8ba151f7d5bb1adf1e5b4b4f39',
  //       indexName: 'vuepress-theme-mix',
  //       locales: {
  //         '/': {
  //           placeholder: 'Search Documentation',
  //         }
  //       },
  //     },
  //   ],
    // [
    //   '@vuepress/plugin-google-analytics',
    //   {
    //     // we have multiple deployments, which would use different id
    //     id: process.env.GA_ID,
    //   },
    // ],
  // ],
})