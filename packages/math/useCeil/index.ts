import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { resolveUnref } from '@mpxjs/mpxuse-shared'

/**
 * Reactive `Math.ceil`.
 *
 * @see https://mpxuse.cn/useCeil
 */
export function useCeil(value: MaybeComputedRef<number>): ComputedRef<number> {
  return computed<number>(() => Math.ceil(resolveUnref(value)))
}
