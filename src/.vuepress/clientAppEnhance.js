import { defineClientAppEnhance } from '@vuepress/client'
import Quiz1 from './components/Quiz1.vue'
import Quiz2 from './components/Quiz2.vue'
import Quiz3 from './components/Quiz3.vue'
import Quiz4 from './components/Quiz4.vue'
import Quiz5 from './components/Quiz5.vue'
import SheildDetect from './components/SheildDetect.vue'

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.component('Quiz1', Quiz1)
  app.component('Quiz2', Quiz2)
  app.component('Quiz3', Quiz3)
  app.component('Quiz4', Quiz4)
  app.component('Quiz5', Quiz5)
  app.component('SheildDetect', SheildDetect)
})