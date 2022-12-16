import type { WatchOptions } from '@mpxjs/core'
import { nextTick, watch } from '@mpxjs/core'
import type { WatchCallback, WatchSource, MapOldSources, MapSources } from '../utils'

// overloads
export function watchOnce<T extends Readonly<WatchSource<unknown>[]>, Immediate extends Readonly<boolean> = false>(source: [...T], cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>, options?: WatchOptions): void

export function watchOnce<T, Immediate extends Readonly<boolean> = false>(sources: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchOptions): void

// implementation
export function watchOnce(
  source: any,
  cb: any,
  options?: WatchOptions
): void {
  const stop = watch(source, (...args) => {
    nextTick(() => stop())

    // eslint-disable-next-line n/no-callback-literal
    return cb(...args)
  }, options)
}
