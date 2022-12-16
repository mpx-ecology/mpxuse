import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import type { MaybeComputedRefArgs } from '../utils'
import { resolveUnrefArgsFlat } from '../utils'

export function useMin(array: MaybeComputedRef<MaybeComputedRef<number>[]>): ComputedRef<number>
export function useMin(...args: MaybeComputedRef<number>[]): ComputedRef<number>

/**
 * Reactive `Math.min`.
 *
 * @see https://mpxuse.cn/useMin
 * @param values
 */
export function useMin(...args: MaybeComputedRefArgs<number>) {
  return computed<number>(() => {
    const array = resolveUnrefArgsFlat(args)
    return Math.min(...array)
  })
}
