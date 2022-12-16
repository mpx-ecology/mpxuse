---
category: Watch
---

# watchWithFilter

可以传入EventFilter来控制`watch` 

## 用法

类似于`watch`，但提供了一个将应用于回调函数的额外选项`eventFilter`。

```ts
import { debounceFilter, watchWithFilter } from '@mpxjs/mpxuse-core'

watchWithFilter(
  source,
  () => { console.log('changed!') }, // callback will be called in 500ms debounced manner
  {
    eventFilter: debounceFilter(500), // throttledFilter, pausabledFilter or custom filters
  },
)
```
