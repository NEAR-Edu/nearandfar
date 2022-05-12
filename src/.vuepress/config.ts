import { defineUserConfig } from 'vuepress'
import { mixTheme } from 'vuepress-theme-mix'
import { navbar, sidebar } from './configs'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics' 

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  // Site Config
  base: '/',

  head: [['script', {}, `
      (function() {
        if (typeof window.GleapActions === 'undefined') {
          !function(Gleap,e,key){if(window.GleapActions=[],Gleap=window.Gleap=window.Gleap||[],!Gleap.invoked){for(Gleap.invoked=!0,Gleap.methods=['identify','clearIdentity','attachCustomData','setCustomData','removeCustomData','clearCustomData','registerCustomAction','logEvent','sendSilentBugReport','startFeedbackFlow','open','hide','on','setLanguage','setLiveSite','initialize'],Gleap.f=function(e){return function(){var a=Array.prototype.slice.call(arguments);window.GleapActions.push({e,a});};},e=0;e<Gleap.methods.length;e++)key=Gleap.methods[e],Gleap[key]=Gleap.f(key);Gleap.load=function(k){var b='https://gleapcdn.com/latest/';var h=document.getElementsByTagName('head')[0];var n=document.createElement('link');n.onload=function(){var t=document.createElement('script');t.type='text/javascript',t.async=!0,t.src=b+'index.js',h.appendChild(t);},n.rel='stylesheet',n.type='text/css',n.href=b+'index.min.css',n.media='all',h.appendChild(n);},Gleap.load(),
          Gleap.initialize('yZroETjHPuk4gvs2lbKFnxf6Lc8R8HMu');
          }}();
        }
      })();
  `],
  ['script', {}, `
    window._mfq = window._mfq || [];
    (function() {
      if (document.getElementById('mfScript') !== null) return;
      var mf = document.createElement("script");
      mf.id="mfScript"
      mf.type = "text/javascript"; mf.defer = true;
      mf.src = "//cdn.mouseflow.com/projects/7c7a81fc-0346-4408-8125-b1b1e6249fa8.js";
      document.getElementsByTagName("head")[0].appendChild(mf);
    })();
  `],
  ['script', {}, `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    (function() {
      if (document.getElementById('gaScript') !== null) return;
      var gascript = document.createElement("script");
      gascript.id="gaScript";
      gascript.type = "text/javascript"; gascript.async = true;
      gascript.src = "//www.googletagmanager.com/gtag/js?id=G-M2T62EJLD6";
      document.getElementsByTagName("head")[0].appendChild(gascript);
      gtag('js', new Date());
    })();
  `]
],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'NEAR and Far from Any Coding', // for broswer tabs
      description: 'An intro to NEAR for non-programmers',
    }
  },

  // Theme Config
  theme: mixTheme({
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
  }),

  // Directory Config
  dest: 'public',

  // ga plugin not working. using head injection instead
  plugins: [
    // googleAnalyticsPlugin({
    //   id: 'G-M2T62EJLD6'
    // })
  ]
})