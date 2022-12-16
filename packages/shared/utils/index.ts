export * from './filters'
export * from './types'
export * from './is'

export function handleNoEvent(fn: any) {
  return typeof fn === 'function'
    ? (t?: any, ...args: any[]) => {
        if (typeof t === 'object' && t.type && t.target && t.currentTarget)
          return (fn as any)(...args)
        else
          return (fn as any)(t, ...args)
      }
    : fn
}

export function promiseTimeout(
  ms: number,
  throwOnTimeout = false,
  reason = 'Timeout'
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (throwOnTimeout)
      setTimeout(() => reject(reason), ms)
    else
      setTimeout(resolve, ms)
  })
}
