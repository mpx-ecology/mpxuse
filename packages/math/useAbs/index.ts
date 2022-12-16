import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { resolveUnref } from '@mpxjs/mpxuse-shared'
import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'

/**
 * Reactive `Math.abs`.
 *
 * @see https://mpxuse.cn/useAbs
 */
export function useAbs(value: MaybeComputedRef<number>): ComputedRef<number> {
  return computed(() => Math.abs(resolveUnref(value)))
}
