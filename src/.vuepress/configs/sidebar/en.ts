import type { SidebarConfig } from 'vuepress-theme-mix'

export const en: SidebarConfig = {
  '/': [
    {
      type: 'group',
      text: 'Sections',
      link: '',
      children: [
        '/computer',
        '/internet',
        '/web2',
        '/web3',
        '/near'
      ],
    },
  ],
  '/activities/': [
    {
      type: 'group',
      text: 'Sections',
      link: '',
      children: [
        ''
      ],
    },
  ],

  '/configuration/': [
    {
      type: 'link-group',
      text: 'Configuration',
      link: '',
      children: [
        'basic',
        'navbar',
        'sidebar',
        'page',
        'markdown',
        'i18n',
        'plugins',
      ],
    },
  ],
}