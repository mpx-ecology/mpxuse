import type { WatchOptions } from '@mpxjs/core'
import { watch } from '@mpxjs/core'
import type { ConfigurableEventFilter, MapOldSources, MapSources, WatchCallback, WatchSource, WatchStopHandle } from '../utils'
import { bypassFilter, createFilterWrapper } from '../utils'

export interface WatchWithFilterOptions extends WatchOptions, ConfigurableEventFilter {}

// overloads
export function watchWithFilter<T extends Readonly<WatchSource<unknown>[]>, Immediate extends Readonly<boolean> = false>(sources: [...T], cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>, options?: WatchWithFilterOptions): WatchStopHandle
export function watchWithFilter<T, Immediate extends Readonly<boolean> = false>(source: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchWithFilterOptions): WatchStopHandle
export function watchWithFilter<T extends object, Immediate extends Readonly<boolean> = false>(source: T, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options?: WatchWithFilterOptions): WatchStopHandle

// implementation
export function watchWithFilter(
  source: any,
  cb: any,
  options: WatchWithFilterOptions = {}
): WatchStopHandle {
  const {
    eventFilter = bypassFilter,
    ...watchOptions
  } = options

  return watch(
    source,
    createFilterWrapper(
      eventFilter,
      cb
    ),
    watchOptions
  )
}
