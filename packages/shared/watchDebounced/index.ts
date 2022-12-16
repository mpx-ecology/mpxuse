import type { WatchOptions } from '@mpxjs/core'
import type { DebounceFilterOptions, MapOldSources, MapSources, MaybeComputedRef, WatchCallback, WatchSource, WatchStopHandle } from '../utils'
import { debounceFilter } from '../utils'
import { watchWithFilter } from '../watchWithFilter'

export interface WatchDebouncedOptions extends WatchOptions, DebounceFilterOptions {
  debounce?: MaybeComputedRef<number>
}

// overloads
export function watchDebounced<T extends Readonly<WatchSource<unknown>[]>, Immediate extends Readonly<boolean> = false>(sources: [...T], cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>, options?: WatchDebouncedOptions): WatchStopHandle
export function watchDebounced<T, Immediate extends Readonly<boolean> = false>(source: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchDebouncedOptions): WatchStopHandle
export function watchDebounced<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchDebouncedOptions): WatchStopHandle

// implementation
export function watchDebounced(
  source: any,
  cb: any,
  options: WatchDebouncedOptions = {}
): WatchStopHandle {
  const {
    debounce = 0,
    maxWait = undefined,
    ...watchOptions
  } = options

  return watchWithFilter(
    source,
    cb,
    {
      ...watchOptions,
      eventFilter: debounceFilter(debounce, { maxWait })
    }
  )
}

// alias
export { watchDebounced as debouncedWatch }
