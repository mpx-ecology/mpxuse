import type { OutputOptions, RollupOptions } from 'rollup'
import esbuild from 'rollup-plugin-esbuild'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { packages } from '../meta/packages'

const configs: RollupOptions[] = []
const esbuildPlugin = esbuild()
const dtsPlugin = dts()
const externals = [
  '@mpxjs/core',
  '@mpxjs/mpxuse-shared',
  '@mpxjs/mpxuse-core',
  '@mpxjs/mpxuse-metadata'
]

for (const { name, cjs, mjs, dts, external } of packages) {
  const output: OutputOptions[] = []
  const input = `packages/${name}/index.ts`
  if (mjs !== false) {
    output.push({
      file: `packages/${name}/dist/index.mjs`,
      format: 'es'
    })
  }

  if (cjs !== false) {
    output.push({
      file: `packages/${name}/dist/index.cjs`,
      format: 'cjs'
    })
  }
  configs.push({
    input,
    output,
    plugins: [
      esbuildPlugin,
      json()
    ],
    external: [
      ...externals,
      ...(external || [])
    ]
  })
  if (dts !== false) {
    configs.push({
      input,
      output: {
        file: `packages/${name}/dist/index.d.ts`,
        format: 'es'
      },
      plugins: [
        dtsPlugin
      ],
      external: [
        ...externals,
        ...(external || [])
      ]
    })
  }
}

export default configs
