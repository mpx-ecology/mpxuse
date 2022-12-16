import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { resolveUnref } from '@mpxjs/mpxuse-shared'

export type MaybeComputedRefArgs<T> = MaybeComputedRef<T>[] | [MaybeComputedRef<MaybeComputedRef<T>[]>]

export function resolveUnrefArgsFlat<T>(args: MaybeComputedRefArgs<T>): T[] {
  return args
    .flatMap((i: any) => {
      const v = resolveUnref(i)
      if (Array.isArray(v))
        return v.map(i => resolveUnref(i))
      return [v]
    })
}
