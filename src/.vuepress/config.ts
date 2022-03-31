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

 
})