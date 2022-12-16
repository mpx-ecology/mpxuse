import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { resolveUnref } from '@mpxjs/mpxuse-shared'

/**
 * Reactive `Math.floor`
 *
 * @see https://mpxuse.cn/useFloor
 */
export function useFloor(value: MaybeComputedRef<number>): ComputedRef<number> {
  return computed<number>(() => Math.floor(resolveUnref(value)))
}
