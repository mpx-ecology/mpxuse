import { join, resolve } from 'path'
import type { Plugin } from 'vite'
import fs from 'fs-extra'
import { packages } from '../../../meta/packages'
import { functionNames, getFunction } from '../../../packages/metadata/scripts/metadata'
import { getTypeDefinition, replacer } from '../../../scripts/utils'

export function MarkdownTransform(): Plugin {
  const DIR_TYPES = resolve(__dirname, '../../../types/packages')
  const hasTypes = fs.existsSync(DIR_TYPES)

  if (!hasTypes)
    console.warn('No types dist found, run `npm run build:types` first.')

  return {
    name: 'mpxuse-md-transform',
    enforce: 'pre',
    async transform(code, id) {
      if (!id.match(/\.md\b/))
        return null
      // linkify function names
      code = code.replace(
        new RegExp(`\`({${functionNames.join('|')}})\`(.)`, 'g'),
        (_, name, ending) => {
          if (ending === ']') // already a link
            return _
          const fn:any = getFunction(name)!
          return `[\`${fn.name}\`](${fn.docs})`
        }
      )
      // convert links to relative
      code = code.replace(/https?:\/\/mpxuse\.cn\//g, '/')

      const [pkg, _name, i] = id.split('/').slice(-3)

      const name = functionNames.find(n => n.toLowerCase() === _name.toLowerCase()) || _name

      if (functionNames.includes(name) && i === 'index.md') {
        const frontmatterEnds = code.indexOf('---\n\n') + 4
        const firstSubheader = code.search(/\n## \w/)
        const sliceIndex = firstSubheader < 0 ? frontmatterEnds : firstSubheader

        const { footer, header } = await getFunctionMarkdown(pkg, name)
        if (hasTypes)
          code = replacer(code, footer, 'FOOTER', 'tail')
        if (header)
          code = code.slice(0, sliceIndex) + header + code.slice(sliceIndex)

        code = code
          .replace(/(# \w+?)\n/, `$1\n\n<FunctionInfo fn="${name}"/>\n`)
          .replace(/## (Components?(?:\sUsage)?)/i, '## $1\n<LearnMoreComponents />\n\n')
          .replace(/## (Directives?(?:\sUsage)?)/i, '## $1\n<LearnMoreDirectives />\n\n')
      }

      return code
    }
  }
}

const DIR_SRC = resolve(__dirname, '../..')
const GITHUB_BLOB_URL = 'https://github.com/mpx-ecology/mpxuse/blob/master/packages'

export async function getFunctionMarkdown(pkg: string, name: string) {
  const URL = `${GITHUB_BLOB_URL}/${pkg}/${name}`

  const dirname = join(DIR_SRC, pkg, name)
  const demoPath = ['demo.vue', 'demo.client.vue'].find(i => fs.existsSync(join(dirname, i)))
  const types = await getTypeDefinition(pkg, name)

  let typingSection = ''

  if (types) {
    const code = `\`\`\`typescript\n${types.trim()}\n\`\`\``
    typingSection = types.length > 1000
      ? `
## Type Declarations

<details>
<summary op50 italic>Show Type Declarations</summary>

${code}

</details>
`
      : `\n## 类型声明\n\n${code}`
  }

  const links = ([
    ['源码', `${URL}/index.ts`],
    demoPath ? ['Demo', `${URL}/${demoPath}`] : undefined,
    ['文档', `${URL}/index.md`]
  ])
    .filter(i => i)
    .map(i => `[${i![0]}](${i![1]})`).join(' • ')

  const sourceSection = `## 源码\n\n${links}\n`
  const ContributorsSection = `
## 贡献者

<Contributors fn="${name}" />
  `
  const changelogSection = `
## 更新日志

<Changelog fn="${name}" />
`

  const demoSection = demoPath
    ? demoPath.endsWith('.client.vue')
      ? `
<script setup>
import { defineAsyncComponent } from 'vue'
const Demo = defineAsyncComponent(() => import('./${demoPath}'))
</script>

## Demo

<DemoContainer>
<p class="demo-source-link"><a href="${URL}/${demoPath}" target="_blank">source</a></p>
<ClientOnly>
  <Suspense>
    <Demo/>
    <template #fallback>
      Loading demo...
    </template>
  </Suspense>
</ClientOnly>
</DemoContainer>
`
      : `
<script setup>
import Demo from './${demoPath}'
</script>

## Demo

<DemoContainer>
<p class="demo-source-link"><a href="${URL}/${demoPath}" target="_blank">source</a></p>
<Demo/>
</DemoContainer>
`
    : ''
  const packageNote = packages.find(p => p.name === pkg)!.addon
    ? `Available in the <a href="/${pkg}/README">@mpxjs/mpxuse-${pkg}</a> add-on.\n`
    : ''

  const footer = `${typingSection}\n\n${sourceSection}\n${ContributorsSection}\n${changelogSection}\n`

  const header = demoSection + packageNote

  return {
    footer,
    header
  }
}