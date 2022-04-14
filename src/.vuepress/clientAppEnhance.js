import { defineClientAppEnhance } from '@vuepress/client'
import Quiz1 from './components/Quiz1.vue'
import Quiz2 from './components/Quiz2.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Quiz1', Quiz1)
  app.component('Quiz2', Quiz2)
})