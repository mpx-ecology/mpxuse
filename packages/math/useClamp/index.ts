import type { Ref } from '@mpxjs/core'
import { computed, ref } from '@mpxjs/core'
import type { MaybeComputedRef, MaybeRef } from '@mpxjs/mpxuse-shared'
import { clamp, resolveUnref } from '@mpxjs/mpxuse-shared'

/**
 * Reactively clamp a value between two other values.
 *
 * @see https://mpxuse.cn/useClamp
 * @param value number
 * @param min
 * @param max
 */
export function useClamp(value: MaybeRef<number>, min: MaybeComputedRef<number>, max: MaybeComputedRef<number>): Ref<number> {
  const _value = ref(value)
  return computed<number>({
    get() {
      return _value.value = clamp(_value.value, resolveUnref(min), resolveUnref(max))
    },
    set(value) {
      _value.value = clamp(value, resolveUnref(min), resolveUnref(max))
    }
  })
}
