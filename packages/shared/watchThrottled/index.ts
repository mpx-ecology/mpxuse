import type { WatchOptions } from '@mpxjs/core'
import type { MapOldSources, MapSources, MaybeComputedRef, WatchCallback, WatchSource, WatchStopHandle } from '../utils'
import { throttleFilter } from '../utils'
import { watchWithFilter } from '../watchWithFilter'

export interface WatchThrottledOptions extends WatchOptions {
  throttle?: MaybeComputedRef<number>
  trailing?: boolean
  leading?: boolean
}

// overloads
export function watchThrottled<T extends Readonly<WatchSource<unknown>[]>, Immediate extends Readonly<boolean> = false>(sources: [...T], cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>, options?: WatchThrottledOptions): WatchStopHandle
export function watchThrottled<T, Immediate extends Readonly<boolean> = false>(source: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchThrottledOptions): WatchStopHandle
export function watchThrottled<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchThrottledOptions): WatchStopHandle

// implementation
export function watchThrottled(
  source: any,
  cb: any,
  options: WatchThrottledOptions = {}
): WatchStopHandle {
  const {
    throttle = 0,
    trailing = true,
    leading = true,
    ...watchOptions
  } = options

  return watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter: throttleFilter(throttle, trailing, leading)
    }
  )
}

// alias
export { watchThrottled as throttledWatch }
