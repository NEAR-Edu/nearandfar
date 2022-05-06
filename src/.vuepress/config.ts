import { defineUserConfig } from 'vuepress'
import type { MixThemeConfig } from 'vuepress-theme-mix/lib/node'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<MixThemeConfig>({
  // Site Config
  base: '/',

  head: [['script', {}, `
    if (document.getElementById('glpScript') !== null) return;
    !function(Gleap,e,key){if(window.GleapActions=[],Gleap=window.Gleap=window.Gleap||[],!Gleap.invoked){for(Gleap.invoked=!0,Gleap.methods=['identify','clearIdentity','attachCustomData','setCustomData','removeCustomData','clearCustomData','registerCustomAction','logEvent','sendSilentBugReport','startFeedbackFlow','open','hide','on','setLanguage','setLiveSite','initialize'],Gleap.f=function(e){return function(){var a=Array.prototype.slice.call(arguments);window.GleapActions.push({e,a});};},e=0;e<Gleap.methods.length;e++)key=Gleap.methods[e],Gleap[key]=Gleap.f(key);Gleap.load=function(k){var b='https://gleapcdn.com/latest/';var h=document.getElementsByTagName('head')[0];var n=document.createElement('link');n.onload=function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src=b+'index.js',t.id='glpScript',h.appendChild(t);},n.rel='stylesheet',n.type='text/css',n.href=b+'index.min.css',n.media='all',h.appendChild(n);},Gleap.load(),
    Gleap.initialize('yZroETjHPuk4gvs2lbKFnxf6Lc8R8HMu');
    }}();
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