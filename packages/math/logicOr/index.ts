import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import { resolveUnref } from '@mpxjs/mpxuse-shared'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'

/**
 * `OR` conditions for refs.
 *
 * @see https://mpxuse.cn/logicOr
 */
export function logicOr(...args: MaybeComputedRef<any>[]): ComputedRef<boolean> {
  return computed(() => args.some(i => resolveUnref(i)))
}

// alias
export { logicOr as or }
