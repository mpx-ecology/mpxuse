import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '../utils'
import { resolveUnref } from '../resolveUnref'

/**
 * Reactive `Array.find`
 *
 * @see https://mpxuse.cn/useArrayFind
 * @param {Array} list - the array was called upon.
 * @param fn - a function to test each element.
 *
 * @returns the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
 */
export function useArrayFind<T>(
  list: MaybeComputedRef<MaybeComputedRef<T>[]>,
  fn: (element: T, index: number, array: MaybeComputedRef<T>[]) => boolean
): ComputedRef<T | undefined> {
  return computed(() =>
    resolveUnref<T | undefined>(
      resolveUnref(list)
        .find((element, index, array) => fn(resolveUnref(element), index, array))
    )
  )
}
