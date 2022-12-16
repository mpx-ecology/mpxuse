import consola from 'consola'
import path from 'path'
import fs from 'fs-extra'
import fg from 'fast-glob'
import { execSync as exec } from 'child_process'
import { metadata } from '../packages/metadata/scripts/metadata'
import { packages } from '../meta/packages'
import { updateImport } from './utils'
import { version } from '../package.json'

const watch = process.argv.includes('--watch')
const rootDir = path.resolve(__dirname, '..')

const FILES_COPY_ROOT = [
  'LICENSE',
  'README.md'
]

// const FILES_COPY_LOCAL = [
//   '*.cjs',
//   '*.mjs',
//   '*.d.ts'
// ]

async function buildMetaFiles() {
  for (const { name } of packages) {
    const packageRoot = path.resolve(__dirname, '..', 'packages', name)
    // const packageDist = path.resolve(packageRoot, 'dist')
    // if (name === 'core') await fs.copyFile(path.join(rootDir, 'README.md'), path.join(packageRoot, 'README.md'))

    for (const file of FILES_COPY_ROOT) await fs.copyFile(path.join(rootDir, file), path.join(packageRoot, file))

    // const files = await fg(FILES_COPY_LOCAL, { cwd: packageRoot })
    // for (const file of files) await fs.copyFile(path.join(packageRoot, file), path.join(packageDist, file))

    // const packageJSON = await fs.readJSON(path.join(packageRoot, 'package.json'))
    // for (const key of Object.keys(packageJSON.dependencies || {}))
    //   if (key.startsWith('@mpxjs/')) packageJSON.dependencies[key] = version

    // await fs.writeJSON(path.join(packageDist, 'package.json'), packageJSON, { spaces: 2 })
  }
}

async function build() {
  consola.info('Clean up')
  exec('pnpm run clean', { stdio: 'inherit' })

  consola.info('Generate Imports')
  await updateImport(metadata)

  consola.info('Rollup')
  exec(`pnpm run build:rollup${watch ? ' -- --watch' : ''}`, { stdio: 'inherit' })

  await buildMetaFiles()

  await fs.copy('./CONTRIBUTING.md', './packages/contributing.md')
}

async function cli() {
  try {
    await build()
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
}

export {
  build
}

if (require.main === module) cli()
