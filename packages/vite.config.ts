import { defineConfig } from 'vite'
import { resolve } from 'path'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import UnoCSS from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'
import { MarkdownTransform } from './.vitepress/plugins/markdownTransform'
import { ChangeLog } from './.vitepress/plugins/changelog'
import { Contributors } from './.vitepress/plugins/contributors'
import { getChangeLog, getFunctionContributors } from '../scripts/changelog'

export default defineConfig(async () => {
  const [changeLog, contributions] = await Promise.all([
    getChangeLog(process.env.CI ? 1000 : 100),
    getFunctionContributors()
  ])
  return {
    server: {
      hmr: {
        overlay: false
      },
      fs: {
        allow: [
          resolve(__dirname, '..')
        ]
      }
    },
    plugins: [
      MarkdownTransform(),
      ChangeLog(changeLog),
      Contributors(contributions),
      // plugins
      Components({
        dirs: resolve(__dirname, '.vitepress/theme/components'),
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        resolvers: [
          IconsResolver({
            componentPrefix: ''
          })
        ],
        dts: './.vitepress/components.d.ts',
        transformer: 'vue3'
      }),
      Icons({
        compiler: 'vue3',
        defaultStyle: 'display: inline-block'
      }),
      UnoCSS()
    ]
  }
})
