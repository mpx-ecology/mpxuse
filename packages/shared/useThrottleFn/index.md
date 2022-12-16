---
category: Utilities
related: useDebounceFn
---

# useThrottleFn

限制函数的执行。特别适用于在调整大小和滚动等事件上限制处理程序执行速率。
> 
> Throttle是一个投球的弹簧：当球飞出后，它需要一些时间来收缩，所以除非准备好，否则它不能再投球。

## 用法

```js
import { useThrottleFn } from '@mpxjs/mpxuse-core'

const throttledFn = useThrottleFn(() => {
  // do something, it will be called at most 1 time per second
}, 1000)

const onScrolling = () => throttledFn()
```

## 推荐阅读

- [**防抖与节流**: 最终视觉指南](https://redd.one/blog/debounce-vs-throttle)
