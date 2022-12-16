import type { Ref } from '@mpxjs/core'
import { nextTick, ref } from '@mpxjs/core'
import { resolveUnref } from '../resolveUnref'
import type { MapOldSources, MapSources, MaybeComputedRef, WatchCallback, WatchSource, WatchStopHandle } from '../utils'
import type { WatchWithFilterOptions } from '../watchWithFilter'
import { watchWithFilter } from '../watchWithFilter'

export interface WatchAtMostOptions extends WatchWithFilterOptions {
  count: MaybeComputedRef<number>
}

export interface WatchAtMostReturn {
  stop: WatchStopHandle
  count: Ref<number>
}

// overloads
export function watchAtMost<T extends Readonly<WatchSource<unknown>[]>, Immediate extends Readonly<boolean> = false>(sources: [...T], cb: WatchCallback<MapSources<T>, MapOldSources<T, Immediate>>, options: WatchAtMostOptions): WatchAtMostReturn

export function watchAtMost<T, Immediate extends Readonly<boolean> = false>(sources: WatchSource<T>, cb: WatchCallback<T, Immediate extends true ? T | undefined : T>, options: WatchAtMostOptions): WatchAtMostReturn

// implementation
export function watchAtMost(
  source: any,
  cb: any,
  options: WatchAtMostOptions
): WatchAtMostReturn {
  const {
    count,
    ...watchOptions
  } = options

  const current = ref(0)

  const stop = watchWithFilter(
    source,
    (...args) => {
      current.value += 1
      if (current.value >= resolveUnref(count))
        nextTick(() => stop())

      // eslint-disable-next-line n/no-callback-literal
      cb(...args)
    },
    watchOptions
  )

  return { count: current, stop }
}
