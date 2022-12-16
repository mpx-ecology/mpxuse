import type { ComputedRef, Ref } from '@mpxjs/core'

/**
 * Any function
 */
export type Fn = () => void
/**
 * Maybe it's a ref, or a plain value
 *
 * ```ts
 * type MaybeRef<T> = T | Ref<T>
 * ```
 */
export type MaybeRef<T> = T | Ref<T>

/**
* Maybe it's a ref, or a plain value, or a getter function
*
* ```ts
* type MaybeComputedRef<T> = T | Ref<T> | (() => T)
* ```
*/
export type MaybeComputedRef<T> = T extends () => void
  ? never
  : (() => T) | MaybeRef<T>

/**
 * Maybe it's a computed ref, or a getter function
 *
 * ```ts
 * type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>
 * ```
 */
export type MaybeReadonlyRef<T> = (() => T) | ComputedRef<T>

export type ArgumentsType<T> = T extends (...args: infer U) => any ? U : never

export interface Pausable {
  /**
   * A ref indicate whether a pausable instance is active
   */
  isActive: Ref<boolean>

  /**
   * Temporary pause the effect from executing
   */
  pause: Fn

  /**
   * Resume the effects
   */
  resume: Fn
}

declare type OnCleanup = (cleanupFn: () => void) => void;
export declare type WatchSource<T = any> = Ref<T> | ComputedRef<T> | (() => T);
export declare type WatchArrayCallback<V = any, OV = any> = (value: V, oldValue: OV, added: V, removed: OV, onCleanup: (cleanupFn: () => void) => void) => any
export declare type WatchCallback<V = any, OV = any> = (value: V, oldValue: OV, onCleanup: OnCleanup) => any;
export declare type WatchStopHandle = () => void;

// Internal Types
export type MapSources<T> = {
  [K in keyof T]: T[K] extends WatchSource<infer V> ? V : never;
}
export type MapOldSources<T, Immediate> = {
  [K in keyof T]: T[K] extends WatchSource<infer V> ? Immediate extends true ? V | undefined : V : never;
}
