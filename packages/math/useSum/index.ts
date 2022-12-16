import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import type { MaybeComputedRefArgs } from '../utils'
import { resolveUnrefArgsFlat } from '../utils'

export function useSum(array: MaybeComputedRef<MaybeComputedRef<number>[]>): ComputedRef<number>
export function useSum(...args: MaybeComputedRef<number>[]): ComputedRef<number>

/**
 * Get the sum of a set of numbers.
 *
 * @see https://mpxuse.cn/useSum
 */
export function useSum(...args: MaybeComputedRefArgs<number>): ComputedRef<number> {
  return computed(() => resolveUnrefArgsFlat(args).reduce((sum, v) => sum += v, 0))
}
