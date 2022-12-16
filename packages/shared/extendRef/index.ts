import { resolveUnref } from '../resolveUnref'
import type { Ref } from '@mpxjs/core'
import { ref } from '@mpxjs/core'
import type { MaybeComputedRef } from '../utils'

export type ExtendRef = MaybeComputedRef<object>

/**
 * 类似Object.assign 合并 ref对象
 * @see https://mpxuse.org/useToggle
 * @param [initialValue=false]
 */
export function extendRef<T extends ExtendRef>(target: T, ...sources: ExtendRef[]): Ref {
  if (target === null) return target

  const extendObj = {}
  sources.forEach(source => {
    if (source === null) return
    Object.assign(extendObj, resolveUnref(source))
  })
  const res = Object.assign(resolveUnref(target), extendObj)
  return ref(res)
}
