import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FlexForm",
  description: "none",
  base: '/db_lab/',

  themeConfig: {
    nav: [
      { text: "Головна", link: "/" },
      { text: "Зміст", link: "/zmist" },
      { text: "Автори", link: "/autors" },
    ],

    sidebar: [
      { text: 'Головна', link: '/' },
      { text: 'Зміст', link: '/zmist' },
      { text: 'Аналіз предметної області', link: '/analysis' },
      { text: 'Призначення розроблюваної системи', link: '/appointment' },
      { text: 'Аналіз зацікавлених осіб для системи організації та управління опитуваннями експертів', link: '/interested_parties' },
      { text: 'Розробка загальної діаграми прецедентів', link: '/prētsedentiv'},
      { text: 'UseCase', link: '/useCase'},
      { text: 'Автори', link: '/autors' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/varshavskiy05/db_lab.git' }
    ]
  }
})
