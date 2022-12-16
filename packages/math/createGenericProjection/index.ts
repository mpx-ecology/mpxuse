import type { ComputedRef } from '@mpxjs/core'
import { computed } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import { resolveUnref } from '@mpxjs/mpxuse-shared'

export type ProjectorFunction<F, T> = (input: F, from: readonly [F, F], to: readonly [T, T]) => T

export type UseProjection<F, T> = (input: MaybeComputedRef<F>) => ComputedRef<T>

export function createGenericProjection<F=number, T=number>(
  fromDomain: MaybeComputedRef<readonly [F, F]>,
  toDomain: MaybeComputedRef<readonly [T, T]>,
  projector: ProjectorFunction<F, T>
): UseProjection<F, T> {
  return (input: MaybeComputedRef<F>) => {
    return computed(() => projector(resolveUnref(input), resolveUnref(fromDomain), resolveUnref(toDomain)))
  }
}
