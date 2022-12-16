import type { WatchOptions } from '@mpxjs/core'
import { unref, watch } from '@mpxjs/core'
import type { WatchArrayCallback, WatchSource } from '../utils'

/**
 * Watch for an array with additions and removals.
 *
 * @see https://mpxuse.cn/watchArray
 */
export function watchArray<T, Immediate extends Readonly<boolean> = false>(
  source: WatchSource<T[]> | T[],
  cb: WatchArrayCallback<T[], Immediate extends true ? T[] | undefined : T[]>,
  options?: WatchOptions
) {
  let oldList: T[] = options?.immediate
    ? []
    : [...(source instanceof Function
        ? source()
        : Array.isArray(source)
          ? source
          : unref(source))
      ]

  return watch(source as WatchSource<T[]>, (newList, _, onCleanup) => {
    const oldListRemains = new Array<boolean>(oldList.length)
    const added: T[] = []
    for (const obj of newList) {
      let found = false
      for (let i = 0; i < oldList.length; i++) {
        if (!oldListRemains[i] && obj === oldList[i]) {
          oldListRemains[i] = true
          found = true
          break
        }
      }
      if (!found)
        added.push(obj)
    }
    const removed = oldList.filter((_, i) => !oldListRemains[i])
    cb(newList, oldList, added, removed, onCleanup)
    oldList = [...newList]
  }, options)
}
