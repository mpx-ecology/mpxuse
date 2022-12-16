import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { resolveUnref } from '@mpxjs/mpxuse-shared'

/**
 * Reactive `Math.round`.
 *
 * @see https://mpxuse.cn/useRound
 */
export function useRound(value: MaybeComputedRef<number>): ComputedRef<number> {
  return computed<number>(() => Math.round(resolveUnref(value)))
}
