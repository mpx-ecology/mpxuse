import type { ArgumentsType, Reactified } from '@mpxjs/mpxuse-shared'
import { reactify } from '@mpxjs/mpxuse-shared'

export type UseMathKeys = keyof { [K in keyof Math as Math[K] extends (...args: any) => any ? K : never]: unknown }

/**
 * Reactive `Math` methods.
 *
 * @see https://mpxuse.cn/useMath
 */
export function useMath<K extends keyof Math>(
  key: K,
  ...args: ArgumentsType<Reactified<Math[K], true>>
): ReturnType<Reactified<Math[K], true>> {
  return reactify(Math[key] as any)(...args) as any
}
