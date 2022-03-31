export const themeData = {
  "logo": "/images/logos/near_icon.svg",
  "title": "NEAR and Far from Any Coding",
  "docsRepo": "gavinliu6/vuepress-theme-mix",
  "docsDir": "docs",
  "editLink": true,
  "lastUpdated": true,
  "locales": {
    "/": {
      "navbar": [
        {
          "text": "Home",
          "link": "/"
        },
        {
          "text": "Course Chapters",
          "children": [
            "/computer/",
            "/internet/",
            "/web2/",
            "/web3/",
            "/near/"
          ]
        },
        {
          "text": "Activities",
          "children": [
            "/activities/"
          ]
        }
      ],
      "sidebar": {
        "/": [
          {
            "type": "group",
            "text": "Sections",
            "link": "",
            "children": [
              "/computer",
              "/internet",
              "/web2",
              "/web3",
              "/near"
            ]
          }
        ],
        "/activities/": [
          {
            "type": "group",
            "text": "Sections",
            "link": "",
            "children": [
              ""
            ]
          }
        ],
        "/configuration/": [
          {
            "type": "link-group",
            "text": "Configuration",
            "link": "",
            "children": [
              "basic",
              "navbar",
              "sidebar",
              "page",
              "markdown",
              "i18n",
              "plugins"
            ]
          }
        ]
      },
      "selectLanguageText": "Languages",
      "selectLanguageAriaLabel": "Select language",
      "selectLanguageName": "English",
      "toggleThemeModeAriaLabel": "Toggle theme mode",
      "lastUpdatedText": "Last Updated"
    }
  },
  "home": "/",
  "navbar": []
}
