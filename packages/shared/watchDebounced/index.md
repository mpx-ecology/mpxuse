---
category: Watch
alias: debouncedWatch
---

# watchDebounced

防抖watch

## 用法

类似于`watch`，但提供了将应用于回调函数的额外选项`debouck`和`maxWait`。

```ts
import { watchDebounced } from '@mpxjs/mpxuse-core'

watchDebounced(
  source,
  () => { console.log('changed!') },
  { debounce: 500, maxWait: 1000 },
)
```

它本质上是以下代码的简写:

```ts
import { debounceFilter, watchWithFilter } from '@mpxjs/mpxuse-core'

watchWithFilter(
  source,
  () => { console.log('changed!') },
  {
    eventFilter: debounceFilter(500, { maxWait: 1000 }),
  },
)
```
