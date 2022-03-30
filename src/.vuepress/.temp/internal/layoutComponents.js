import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("/Users/bensayeg/Desktop/near_development/near-and-far-course/node_modules/vuepress-theme-mix/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("/Users/bensayeg/Desktop/near_development/near-and-far-course/node_modules/vuepress-theme-mix/lib/client/layouts/Layout.vue")),
}
