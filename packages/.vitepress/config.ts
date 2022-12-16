import { defineConfig } from 'vitepress'
import { categoryNames, metadata, coreCategoryNames } from '../metadata/scripts/metadata'

const CoreCategories = coreCategoryNames.map(c => ({
  text: c,
  activeMatch: '___', // never active
  link: `/functions#category=${c}`
}))

const Guide = [
  { text: '快速开始', link: '/guide/' },
  { text: '最佳实践', link: '/guide/best-practice' },
  { text: '配置项', link: '/guide/config' },
  { text: '如何共建', link: '/contributing' },
  { text: '参考指南', link: '/guidelines' }
]
const DefaultSideBar = [
  { text: '指南', items: Guide },
  { text: '核心方法', items: CoreCategories }
]
const FunctionsSideBar = getFunctionsSideBar()

export default defineConfig({
  title: 'MpxUse',
  description: 'Collection of essential Mpx Composition Utilities',
  lang: 'zh-CN',
  markdown: {
    theme: {
      light: 'vitesse-light',
      dark: 'vitesse-dark'
    }
  },
  base: '/mpxuse/',
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      {
        text: '指南',
        items: [
          { text: '指南', items: Guide }
        ]
      },
      {
        text: '方法',
        items: [
          {
            text: '',
            items: [
              { text: '所有方法', link: '/functions#' },
              { text: '最新更新', link: '/functions#sort=updated' },
              { text: 'Export Size', link: '/export-size' }
            ]
          },
          { text: '核心方法', items: CoreCategories }
        ]
      }
    ],
    sidebar: {
      '/guide/': DefaultSideBar,
      '/contributing': DefaultSideBar,
      '/export-size': DefaultSideBar,
      '/guidelines': DefaultSideBar,
      '/functions': FunctionsSideBar,
      '/shared/': FunctionsSideBar,
      '/math/': FunctionsSideBar,
      '/core/': FunctionsSideBar
    },
    footer: {
      message: '根据MIT许可证发布。',
      copyright: 'Copyright © 2022 pagnkelly'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/mpx-ecology/mpxuse' }
    ],
    algolia: {
      appId: '61D0AT31Y2',
      apiKey: '28d57e28a13a6d01e8e2c2c4a4cc2ef0',
      indexName: 'mpxuse'
    }
  },
  head: [
    ['meta', { name: 'theme-color', content: '#ffffff' }],
    ['meta', { name: 'author', content: 'Pagnkelly' }],
    ['meta', { property: 'og:title', content: 'MpxUse' }],
    ['link', { rel: 'icon', href: '/mpxuse/favicon.png', type: 'image/png' }],
    ['link', { rel: 'icon', href: '/mpxuse/favicon.svg', type: 'image/svg+xml' }]
  ]
})

function getFunctionsSideBar() {
  const links:{
    text: string;
    items: {
      text: string;
      link: string
    }[];
    link: string | undefined;
  }[] = []

  for (const name of categoryNames) {
    if (name.startsWith('_'))
      continue

    const functions = metadata.functions.filter(i => i.category === name && !i.internal)

    links.push({
      text: name,
      items: functions.map(i => ({
        text: i.name,
        link: i.external || `/${i.package}/${i.name}/`
      })),
      link: name.startsWith('@')
        ? functions[0].external || `/${functions[0].package}/README`
        : undefined
    })
  }

  return links
}
