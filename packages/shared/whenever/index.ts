import type { WatchOptions } from '@mpxjs/core'
import { watch } from '@mpxjs/core'
import type { WatchCallback, WatchSource } from '../utils'
/**
 * Shorthand for watching value to be truthy
 *
 * @see https://mpxuse.cn/whenever
 */
export function whenever<T>(source: WatchSource<T | false | null | undefined>, cb: WatchCallback<T>, options?: WatchOptions) {
  return watch(
    source,
    (v, ov, onInvalidate) => {
      if (v)
        cb(v, ov, onInvalidate)
    },
    options
  )
}
