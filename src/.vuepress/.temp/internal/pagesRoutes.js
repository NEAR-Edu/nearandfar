import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":""},["/index.html","/index.md"]],
  ["v-a94a8cca","/computer/",{"title":"1. You and Your Computer"},["/computer/index.html","/computer/README.md"]],
  ["v-ba934fd8","/config/",{"title":"Config"},["/config/index.html","/config/README.md"]],
  ["v-fffb8e28","/guide/",{"title":"Introduction"},["/guide/index.html","/guide/README.md"]],
  ["v-79e93bb0","/guide/using-vue.html",{"title":"Using Vue in Markdown"},["/guide/using-vue","/guide/using-vue.md"]],
  ["v-157f4d38","/web2/",{"title":"3. You and Web2.0"},["/web2/index.html","/web2/README.md"]],
  ["v-15007dae","/near/",{"title":"5. You and NEAR Protocol 🎆"},["/near/index.html","/near/README.md"]],
  ["v-157f4d57","/web3/",{"title":"4. You and Web3.0"},["/web3/index.html","/web3/README.md"]],
  ["v-1c6d7635","/internet/",{"title":"2. You and the Internet"},["/internet/index.html","/internet/README.md"]],
  ["v-3706649a","/404.html",{"title":""},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
