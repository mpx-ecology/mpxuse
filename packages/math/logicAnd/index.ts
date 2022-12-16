import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import { resolveUnref } from '@mpxjs/mpxuse-shared'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'

/**
 * `AND` conditions for refs.
 *
 * @see https://mpxuse.cn/logicAnd
 */
export function logicAnd(...args: MaybeComputedRef<any>[]): ComputedRef<boolean> {
  return computed(() => args.every(i => resolveUnref(i)))
}

// alias
export { logicAnd as and }
