# 参考指南

以下是MpxUse函数的指导原则。您还可以将它们作为创作自己的可组合函数或应用程序的参考。

## 常规

- 尽可能使用`ref`而不是`reactive`
- 尽可能使用options对象作为参数，以便将来扩展时更加灵活。
- 包装大量数据时，请使用`shallowRef`而不是`ref`。
- 在内部使用`watch`或`watchEffect`时，还应尽可能配置`immediate`和`flush`选项
- 适当时机清楚副作用，可以的话返回清楚函数暴露给用户
- 避免使用控制台日志
- 当函数为异步时，返回PromiseLike

同时阅读: [最佳实践](./guide/best-practice.md)

## ShallowRef

包装大量数据时，请使用`shallowRef`而不是`ref`。

```ts
export function useMyFunction<T>(value: MaybeRef<string>) {
  const data = shallowRef()

  data.value = 'xxx'
  ...
}
```

## Watch 选项

在内部使用`watch`或`watchEffect`时，还应尽可能配置`immediate`和`flush`选项。
例如 `watchDebounced`:

```ts
import type { WatchOptions } from '@mpxjs/core'

// extend the watch options
export interface WatchDebouncedOptions extends WatchOptions {
  debounce?: number
}

export function watchDebounced(
  source: any,
  cb: any,
  options: WatchDebouncedOptions = {},
): WatchStopHandle {
  return watch(
    source,
    () => { /* ... */ },
    options, // pass watch options
  )
}
```
