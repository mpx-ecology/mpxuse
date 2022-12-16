import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { resolveUnref } from '@mpxjs/mpxuse-shared'

export interface UsePrecisionOptions {
  /**
   * Method to use for rounding
   *
   * @default 'round'
   */
  math?: 'floor' | 'ceil' | 'round'
}

/**
 * Reactively set the precision of a number.
 *
 * @see https://mpxuse.org/usePrecision
 */
export function usePrecision(
  value: MaybeComputedRef<number>,
  digits: MaybeComputedRef<number>,
  options?: MaybeComputedRef<UsePrecisionOptions>
): ComputedRef<number | string> {
  return computed<number | string>(() => {
    const _value = resolveUnref(value)
    const _digits = resolveUnref(digits)
    const power = 10 ** _digits
    return Math[resolveUnref(options)?.math || 'round'](_value * power) / power
  })
}
