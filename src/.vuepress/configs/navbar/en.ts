import type { NavbarConfig } from 'vuepress-theme-mix'

export const en: NavbarConfig = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Course Chapters',
    children: [
      '/computer/',
      '/internet/',
      '/web2/',
      '/web3/',
      '/near/',
    ],
  },
  {
    text: 'Activities',
    children: [
      '/activities/'
    ],
  },
  // {
  //   text: 'VuePress',
  //   link: 'https://v2.vuepress.vuejs.org/',
  // },
  // {
  //   text: 'GitHub',
  //   link: 'https://github.com/gavinliu6/vuepress-theme-mix',
  // },
]