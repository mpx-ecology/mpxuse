import { join, resolve } from 'path'
import { markdownTable } from 'markdown-table'
import { getExportsSize, readableSize as filesize } from 'export-size'
import fs from 'fs-extra'
import { version } from '../package.json'
import { packages } from '../meta/packages'

async function run() {
  // made shared library imported can resolve correctly
  const packagesRoot = resolve(__dirname, '..', 'packages')
  await fs.writeFile(join(packagesRoot, 'shared/index.mjs'), 'export * from "./dist/index.mjs"', 'utf-8')
  await fs.writeFile(join(packagesRoot, 'core/index.mjs'), 'export * from "./dist/index.mjs"', 'utf-8')
  await fs.copy(join(packagesRoot, 'shared/dist'), join(packagesRoot, 'core/dist/node_modules/@mpxjs/mpxuse-shared'), { overwrite: true })

  let md = '# Export size\n\n'
  const mdJSON = <{ [name: string]: string }>{}
  md += 'generated by [export-size](https://github.com/antfu/export-size)<br>\n'
  md += `version: ${version}<br>\n`
  md += `date: ${new Date().toISOString()}\n\n`

  md += '> 请注意，这是每个API(不包含@mpxjs/core)的bundle包大小。 '
  md += '由于我们在每个函数下面都有很多共享的实用程序，因此导入了两个'
  md += '不同的函数不一定意味着bundle大小将是它们的总和(通常较小)。'
  md += '取决于您使用的bundler和minifier，最终结果可能会有所不同，此列表仅供参考。'
  md += '\n\n'

  for (const pkg of packages.slice(0, -1)) {
    const { exports, packageJSON } = await getExportsSize({
      pkg: `./packages/${pkg.name}`,
      output: false,
      bundler: 'rollup',
      external: ['@mpxjs/core', ...(pkg.external || [])],
      includes: ['@mpxjs/mpxuse-shared']
    })

    md += `<kbd>${packageJSON.name}</kbd>\n\n`

    md += markdownTable([
      ['Function', 'min+gzipped'],
      ...exports.map((i) => {
        mdJSON[i.name] = filesize(i.minzipped)
        return [`\`${i.name}\``, filesize(i.minzipped)]
      })
    ])

    md += '\n\n'
  }
  await fs.remove(join(packagesRoot, 'shared/index.mjs'))
  await fs.remove(join(packagesRoot, 'core/index.mjs'))
  await fs.writeFile('packages/export-size.md', md, 'utf-8')
  await fs.writeJSON('packages/export-size.json', mdJSON, { spaces: 2 })
}

run()
