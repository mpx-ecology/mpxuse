import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  resolve: {
    alias: {
      '@mpxjs/mpxuse-shared': resolve(__dirname, 'packages/shared/index.ts'),
      '@mpxjs/mpxuse-core': resolve(__dirname, 'packages/core/index.ts'),
      '@mpxjs/mpxuse-math': resolve(__dirname, 'packages/math/index.ts'),
      '@mpxjs/mpxuse-metadata': resolve(__dirname, 'packages/metadata/index.ts')
    },
    dedupe: [
      '@mpxjs/core'
    ]
  },
  test: {
    globals: true,
    reporters: 'dot',
    deps: {
      inline: [
        '@mpxjs/core',
        '@mpxjs/utils'
      ]
    },
    setupFiles: [resolve(__dirname, 'packages/.test/setup.ts')]
  }
})
