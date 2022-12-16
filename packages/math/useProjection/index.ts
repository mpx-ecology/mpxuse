import type { ComputedRef } from '@mpxjs/core'
import type { MaybeComputedRef } from '@mpxjs/mpxuse-shared'
import type { ProjectorFunction } from '../createGenericProjection'
import { createProjection } from '../createProjection'

/**
 * Reactive numeric projection from one domain to another.
 *
 * @see https://mpxuse.cn/useProjection
 */
export function useProjection(
  input: MaybeComputedRef<number>,
  fromDomain: MaybeComputedRef<readonly [number, number]>,
  toDomain: MaybeComputedRef<readonly [number, number]>,
  projector?: ProjectorFunction<number, number>
): ComputedRef<number> {
  return createProjection(fromDomain, toDomain, projector)(input)
}
