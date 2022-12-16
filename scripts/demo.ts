import path from 'path'
import fs from 'fs-extra'
import type { PackageIndexes } from '../packages/metadata/scripts/types'
import { metadata } from '../packages/metadata/scripts/metadata'
import { listFunctions } from '../packages/metadata/scripts/update'
type DEMO_FN = {
  name: string;
  path: string
}
type DEMO_META = {
  package: string;
  fns: DEMO_FN[]
}
type PAGE_DATA = DEMO_META[]
// demo.mpx copyto demo
// rewrite demo/src/pages/index

async function build({ packages }: PackageIndexes) {
  // demo路径
  const demoDirPath = path.resolve('demo/src/components')
  // { package: 'core', fns: [{name: 'useToggle', path: '../components/core/useToggle'}]}
  const pageData: PAGE_DATA = []
  // 遍历包
  for (const { name } of Object.values(packages)) {
    // 源demo package
    const packageRoot = path.resolve(__dirname, '..', 'packages', name)
    const demoMeta: DEMO_META = {
      package: '',
      fns: []
    }
    demoMeta.package = name
    // 具体方法文件夹
    const demoDir = path.join(demoDirPath, name)
    // 包文件夹不存在创建
    if (!fs.existsSync(demoDir))
      fs.mkdirSync(path.join(demoDirPath, name))

    // 遍历方法
    const functions = await listFunctions(packageRoot)
    for (const fnName of functions) {
      // demo
      const demoPath = path.resolve(packageRoot, fnName, 'demo.mpx')
      // 有的话就copy
      if (fs.existsSync(demoPath)) {
        await fs.copyFile(demoPath, path.join(demoDirPath, name, `${fnName}.mpx`))
        // 构建渲染demoPage数据
        demoMeta.fns.push({
          name: fnName,
          path: `../components/${name}/${fnName}`
        })
      }
    }
    pageData.push(demoMeta)
  }
  // 导入pageData到demo/src/pages/index
  buildTemplate(pageData)
}
type COM = Record<string, string>
async function buildTemplate(pageData: PAGE_DATA) {
  const demoPagePath = 'demo/src/pages/index.mpx'
  const tmlPath = 'meta/demo-template.mpx'
  const usingComponents:COM = {}
  pageData.forEach(item => {
    const fns = item.fns
    fns.reduce((prev, next:DEMO_FN) => {
      prev[next.name] = next.path
      return prev
    }, usingComponents)
  })
  let tmlRaw = await fs.readFile(tmlPath, 'utf-8')
  tmlRaw = tmlRaw.replace('/* coms */', JSON.stringify(pageData, null, 2)).replace('/* usingComponents */', JSON.stringify(usingComponents, null, 2))
  await fs.writeFile(demoPagePath, tmlRaw)
}

async function cli() {
  try {
    await build(metadata)
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

export {
  build
}

if (require.main === module)
  cli()
