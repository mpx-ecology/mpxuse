import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import type { MaybeComputedRefArgs } from '../utils'
import { resolveUnrefArgsFlat } from '../utils'

export function useMax(array: MaybeComputedRef<MaybeComputedRef<number>[]>): ComputedRef<number>
export function useMax(...args: MaybeComputedRef<number>[]): ComputedRef<number>

/**
 * Reactively get maximum of values.
 *
 * @see https://mpxuse.cn/useMax
 * @param values
 */
export function useMax(...args: MaybeComputedRefArgs<number>) {
  return computed<number>(() => {
    const array = resolveUnrefArgsFlat(args)
    return Math.max(...array)
  })
}
