export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/course/near_splash.jpg",
    "tagline": "An Intro course to NEAR for non-programmers",
    "actionText": "Quick Start →",
    "actionLink": "/computer/",
    "footer": "Made by Ben with ❤️"
  },
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Welcome to the Course!",
      "slug": "welcome-to-the-course",
      "children": []
    },
    {
      "level": 2,
      "title": "Learning Objectives",
      "slug": "learning-objectives",
      "children": [
        {
          "level": 3,
          "title": "a novice to Web3 will be able to:",
          "slug": "a-novice-to-web3-will-be-able-to",
          "children": []
        }
      ]
    },
    {
      "level": 2,
      "title": "Course Overview 🧑‍🏫",
      "slug": "course-overview",
      "children": []
    }
  ],
  "filePathRelative": "index.md"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
