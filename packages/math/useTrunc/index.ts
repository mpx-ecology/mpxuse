import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { resolveUnref } from '@mpxjs/mpxuse-shared'

/**
 * Reactive `Math.trunc`.
 *
 * @see https://mpxuse.cn/useTrunc
 */
export function useTrunc(value: MaybeComputedRef<number>): ComputedRef<number> {
  return computed<number>(() => {
    return Math.trunc(resolveUnref(value))
  })
}
