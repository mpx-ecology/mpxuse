import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import { resolveUnref } from '@mpxjs/mpxuse-shared'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'

/**
 * `NOT` conditions for refs.
 *
 * @see https://mpxuse.cn/logicNot
 */
export function logicNot(v: MaybeComputedRef<any>): ComputedRef<boolean> {
  return computed(() => !resolveUnref(v))
}

// alias
export { logicNot as not }
