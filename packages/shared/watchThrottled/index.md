---
category: Watch
alias: throttledWatch
---

# watchThrottled

节流 watch.

## 用法

类似于`watch`，但提供了一个额外的选项`throttle`，该选项将应用于回调函数。

```ts
import { watchThrottled } from '@mpxjs/mpxuse-core'

watchThrottled(
  source,
  () => { console.log('changed!') },
  { throttle: 500 },
)
```

它本质上是以下代码的简写:

```ts
import { throttleFilter, watchWithFilter } from '@mpxjs/mpxuse-core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: throttleFilter(500),
  },
)
```
